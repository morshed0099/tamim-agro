import { DeliveryStatus, FlockStatus, Prisma } from "../../generated/prisma";
import prismaClient from "../../helper/prismaClient";
import AppError from "../../middileware/AppError";
import { RetunFeedItem } from "../../generated/prisma/index";
import { flockCrontroler } from "../flog/flog.controler";

const createFeedRetun = async (payload: any) => {
  const farm = await prismaClient.farmer.findFirst({
    where: {
      farmCode: payload.farmCode,
      branchCode: payload.branchCode,
    },
    include: {
      address: true,
    },
  });
  if (!farm) {
    throw new AppError(400, "farm is not found");
  }
  const flock = await prismaClient.flock.findFirst({
    where: {
      farmId: farm.id,
      flockStatus: FlockStatus.RUNNING,
    },
  });
  if (!flock) {
    throw new AppError(400, "flock is not found");
  }

  const lastBill = await prismaClient.feedRetun.findFirst({
    orderBy: { createAt: "desc" },
    select: { returnInvoice: true },
  });

  let bill: string;

  if (!lastBill) {
    bill = "FRI-0001";
  } else {
    // "FST-0001" → শুধু নম্বর অংশটা কেটে নেয়া
    const lastNumber = parseInt(lastBill.returnInvoice.replace("FRI-", ""), 10);

    // নতুন bill number + leading zero padding
    bill = "FRI-" + String(lastNumber + 1).padStart(4, "0");
  }

  const createRetun = await prismaClient.feedRetun.create({
    data: {
      branChCode: payload.branchCode,
      createDate: new Date(payload.createAt),
      farmCode: payload.farmCode,
      flockNumber: flock.flockNumber,
      farmId: farm.id,
      depotName: payload.depotName,
      flockId: flock.id,
      returnInvoice: bill,
    },
  });

  for (const itm of payload.item) {
    await prismaClient.retunFeedItem.create({
      data: {
        price: itm.price,
        quantity: itm.quantity,
        createAt: new Date(payload.createAt),
        feedName: itm.feedName,
        returnInvoice: bill,
      },
    });
  }
  const result = await prismaClient.feedRetun.findUnique({
    where: {
      id: createRetun.id,
    },
    include: {
      RetunFeedItem: true,
    },
  });
  return {
    farmer: farm,
    salesReturn: result,
  };
};

const getAllRetunFeed = async (params: any) => {
  const { searchTermp, ...filterData } = params;
  const andCondition: Prisma.FeedRetunWhereInput[] = [];

  if (searchTermp) {
    andCondition.push({
      OR: [].map((feild) => ({
        [feild]: {
          contains: searchTermp,
          mode: "incensitive",
        },
      })),
    });
  }
  if (filterData && Object.keys(filterData).length > 0) {
    andCondition.push({
      AND: Object.keys(filterData).map((key) => ({
        [key]: {
          equals: filterData[key],
        },
      })),
    });
  }

  const whereCondition: Prisma.FeedRetunWhereInput = { AND: andCondition };
  const result = await prismaClient.feedRetun.findMany({
    where: whereCondition,
    include: {
      RetunFeedItem: true,
    },
  });
  return result;
};

const getFeedReturnById = async (id: string) => {
  const feedReturn = await prismaClient.feedRetun.findUnique({
    where: {
      id,
    },
    include: {
      RetunFeedItem: true,
    },
  });
  if (!feedReturn) {
    throw new AppError(400, "feed return order not found");
  }
  const address = await prismaClient.farmer.findUnique({
    where: {
      id: feedReturn?.farmId,
    },
    include: {
      address: true,
    },
  });
  return {
    feedReturn,
    farmer: address,
  };
};

const editFeedRetun = async (updateData: any) => {
  console.log(updateData, "146");
  const findReturnOrder = await prismaClient.feedRetun.findUnique({
    where: {
      id: updateData.id,
    },
  });

  const farm = await prismaClient.farmer.findFirst({
    where: {
      farmCode: updateData.farmCode,
      branchCode: updateData.branchCode,
    },
    include: {
      address: true,
    },
  });

  if (!farm) {
    throw new AppError(400, "farm is not found");
  }

  const flock = await prismaClient.flock.findFirst({
    where: {
      farmId: farm.id,
    },
  });

  if (!flock) {
    throw new AppError(400, "flock is not found");
  }
  if (!findReturnOrder) {
    throw new AppError(400, "feed return order not found");
  }

  const createAt = findReturnOrder.createAt;
  const bill = findReturnOrder.returnInvoice;
  const id = findReturnOrder.id;

  const delteOld = await prismaClient.feedRetun.delete({
    where: {
      id: findReturnOrder.id,
    },
  });

  const createNew = await prismaClient.feedRetun.create({
    data: {
      id,
      branChCode: updateData.branchCode,
      createDate: new Date(updateData.createAt),
      farmCode: updateData.farmCode,
      flockNumber: flock.flockNumber,
      returnInvoice: bill,
      createAt: new Date(createAt),
      updateAt: new Date(updateData.createAt),
      depotName: updateData.detpotName,
      depot: {
        connect: {
          depotName: updateData.depotName,
        },
      },
      farm: {
        connect: { id: farm.id },
      },
      flock: {
        connect: {
          id: flock.id,
        },
      },
    },
  });

  for (const itm of updateData.item) {
    await prismaClient.retunFeedItem.create({
      data: {
        price: itm.price,
        quantity: itm.quantity,
        createAt: new Date(createAt),
        updateAt: new Date(updateData.createAt),
        feedName: itm.feedName,
        returnInvoice: bill,
      },
    });
  }

  const feedReturn = await prismaClient.feedRetun.findUnique({
    where: {
      id: updateData.id,
    },
    include: {
      RetunFeedItem: true,
    },
  });
  return {
    feedReturn,
    farmer: farm,
  };
};

const postingFeedReturn = async (payload: any) => {
  console.log(payload);
  const findReturn = await prismaClient.feedRetun.findUnique({
    where: {
      id: payload.rowId,
    },
    include: {
      RetunFeedItem: true,
    },
  });
  if (!findReturn) {
    throw new AppError(400, "feed return not found");
  }

  const result = await prismaClient.$transaction(async (tx) => {
    for (const item of findReturn.RetunFeedItem) {
      const stockFind = await tx.feedStock.upsert({
        where: {
          depotName_feedName: {
            depotName: findReturn.depotName,
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
          depotName: findReturn.depotName,
          feedName: item.feedName,
          unitPrice: item.unitPrice,
        },
      });
    }
    const updateRetun = await tx.feedRetun.update({
      where: {
        id: payload.rowId,
      },
      data: {
        deliveryDate: new Date(payload.deliverDate),
        status: DeliveryStatus.DELIVER,
      },
      include: {
        RetunFeedItem: true,
      },
    });
    return updateRetun;
  });
  return result;
};

export const feedRetunService = {
  createFeedRetun,
  getAllRetunFeed,
  getFeedReturnById,
  editFeedRetun,
  postingFeedReturn,
};
