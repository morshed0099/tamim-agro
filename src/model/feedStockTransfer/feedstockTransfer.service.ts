import prismaClient from "../../helper/prismaClient";
import { DeliveryStatus, Prisma } from "../../generated/prisma";
import AppError from "../../middileware/AppError";

const createFeedStockTransfer = async (payload: any) => {
  if (payload.toDepot == payload.fromDepot) {
    throw new AppError(400, "from depot and to depot name same ");
  }
  let bill;
  const oldBil = await prismaClient.feedStockTransfer.findFirst({
    orderBy: {
      updateAt: "desc",
    },
  });

  if (!oldBil) {
    bill = "FST-" + "000" + 1;
  } else {
    const s = oldBil.trnasferBill.substring(7);
    const last = parseInt(s) + 1;
    bill = "FST-" + "000" + last;
  }

  const createTransfer = await prismaClient.feedStockTransfer.create({
    data: {
      createAt: new Date(payload.createAt),
      trnasferBill: bill,
      fromDepot: payload.fromDepot,
      toDepot: payload.toDepot,
      totalPrice: payload.totalPrice,
      totalQuantity: payload.totalQuantity,
    },
  });
  for (const itm of payload.item) {
    await prismaClient.transferFeedItem.create({
      data: {
        createDate: new Date(payload.createAt),
        quantity: itm.quantity,
        createdAt: new Date(payload.createAt),
        feedName: itm.feedName,
        price: itm.price,
        tansferId: bill,
      },
    });
  }
  const result = await prismaClient.feedStockTransfer.findUnique({
    where: {
      id: createTransfer.id,
    },
    include: {
      transferFeedItem: true,
    },
  });
  return result;
};

const getAllDepotFeedTransfer = async (payload: any) => {
  const { serarchTerm, ...filterData } = payload;

  console.log(serarchTerm);
  const andCondition: Prisma.FeedStockTransferWhereInput[] = [];
  const searchFields = ["trnasferBill", "fromDepot", "toDepot"];
  if (serarchTerm) {
    andCondition.push({
      OR: searchFields.map((feilds) => ({
        [feilds]: {
          contains: serarchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andCondition.push({
      AND: Object.keys(filterData).map((key) => ({
        [key]: {
          equals: filterData[key],
        },
      })),
    });
  }
  const whereCondition: Prisma.FeedStockTransferWhereInput = {
    AND: andCondition,
  };

  const result = await prismaClient.feedStockTransfer.findMany({
    where: whereCondition,
  });
  return result;
};

const getFeedTransferDepotToDepotById = async (id: string) => {
  const result = await prismaClient.feedStockTransfer.findUnique({
    where: {
      id,
    },
    include: {
      transferFeedItem: true,
    },
  });

  return {
    feedTransfer: result,
    item: result?.transferFeedItem,
  };
};

const deleteById = async (id: string) => {
  const feedTranser = await prismaClient.feedStockTransfer.findUnique({
    where: {
      id,
    },
    include: {
      transferFeedItem: true,
    },
  });

  if (!feedTranser?.transferFeedItem) {
    throw new AppError(400, "feedStransfer not found!!");
  }

  for (const item of feedTranser?.transferFeedItem) {
    const result = await prismaClient.$transaction(async (tx) => {
      await tx.feedStock.update({
        where: {
          feedName_depotName: {
            depotName: feedTranser.fromDepot,
            feedName: item.feedName,
          },
        },
        data: {
          stock: {
            increment: Number(item.quantity),
          },
        },
      });
      await tx.feedStock.update({
        where: {
          feedName_depotName: {
            depotName: feedTranser.toDepot,
            feedName: item.feedName,
          },
        },
        data: {
          stock: {
            decrement: Number(item.quantity),
          },
        },
      });
    });
  }
  const result = await prismaClient.feedStockTransfer.delete({
    where: {
      id,
    },
  });
};

const editTransfer = async (id: string, payload: any) => {
  const transferold = await prismaClient.feedStockTransfer.findUnique({
    where: {
      id,
    },
  });
  if (!transferold) {
    throw new AppError(400, "transfer order not found!!");
  }
  const bill = transferold.trnasferBill;
  const delteOld = await prismaClient.feedStockTransfer.delete({
    where: {
      id,
    },
  });

  const createTransfer = await prismaClient.feedStockTransfer.create({
    data: {
      createAt: new Date(payload.createAt),
      trnasferBill: bill,
      id,
      fromDepot: payload.fromDepot,
      totalPrice: payload.totalPrice,
      toDepot: payload.toDepot,
      totalQuantity: payload.totalQuantity,
    },
  });
  for (const itm of payload.item) {
    const createItem = await prismaClient.transferFeedItem.create({
      data: {
        createDate: new Date(payload.createAt),
        quantity: itm.quantity,
        createdAt: new Date(payload.createAt),
        feedName: itm.feedName,
        tansferId: bill,
        price: itm.price,
        unitPrice: itm.unitPrice,
      },
    });
  }
  const result = await prismaClient.feedStockTransfer.findUnique({
    where: {
      id,
    },
    include: {
      transferFeedItem: true,
    },
  });
  return result;
};

const postingFeedStockTransfer = async (payload: any) => {
  console.log(payload.deliverDate);
  const findTransferOrder = await prismaClient.feedStockTransfer.findUnique({
    where: {
      id: payload.rowId,
    },
    include: {
      transferFeedItem: true,
    },
  });
  if (!findTransferOrder) {
    throw new AppError(400, "feed Stock transfer not forund");
  }

  const result = await prismaClient.$transaction(async (tx) => {
    for (const item of findTransferOrder.transferFeedItem) {
      const stockCheck = await tx.feedStock.findUnique({
        where: {
          depotName_feedName: {
            depotName: findTransferOrder.fromDepot,
            feedName: item.feedName,
          },
        },
      });
      if (!stockCheck || stockCheck.stock < item.quantity) {
        throw new AppError(400, "feed stock quantity and feed not avileable");
      }
      await tx.feedStock.upsert({
        where: {
          depotName_feedName: {
            depotName: findTransferOrder.toDepot,
            feedName: item.feedName,
          },
        },
        update: {
          stock: {
            increment: item.quantity,
          },
        },
        create: {
          createAt: new Date(payload.deliverDate),
          stock: item.quantity,
          depotName: findTransferOrder.toDepot,
          feedName: item.feedName,
          unitPrice: item.unitPrice,
        },
      });
      await tx.feedStock.update({
        where: {
          depotName_feedName: {
            depotName: findTransferOrder.fromDepot,
            feedName: item.feedName,
          },
        },
        data: {
          stock: {
            decrement: item.quantity,
          },
        },
      });
    }

    const final = await tx.feedStockTransfer.update({
      where: {
        id: findTransferOrder.id,
      },
      data: {
        status: DeliveryStatus.DELIVER,
        deliveryDate: new Date(payload.deliverDate),
      },
      include: {
        transferFeedItem: true,
      },
    });
    return final;
  });
  return result;
};

export const feedStockTransferService = {
  createFeedStockTransfer,
  getAllDepotFeedTransfer,
  getFeedTransferDepotToDepotById,
  deleteById,
  editTransfer,
  postingFeedStockTransfer,
};
