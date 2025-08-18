import prismaClient from "../../helper/prismaClient";
import { Prisma } from "../../generated/prisma";
import AppError from "../../middileware/AppError";

const createFeedStockTransfer = async (payload: any) => {
  let isvilAvilStok;

  for (const feed of payload.item) {
    isvilAvilStok = await prismaClient.feedStock.findUnique({
      where: {
        feedName_depotName: {
          feedName: feed.feedName,
          depotName: payload.fromDepot,
        },
        stock: {
          gte: feed.quantity,
        },
      },
    });
    if (!isvilAvilStok) {
      return { message: "depot feed quantity no sufficient" };
    }
  }
  let updateStock;
  let createStock;
  for (const feed of payload.item) {
    const result = await prismaClient.$transaction(async (tx) => {
      updateStock = await tx.feedStock.update({
        where: {
          feedName_depotName: {
            feedName: feed.feedName,
            depotName: payload.fromDepot,
          },
        },
        data: {
          stock: {
            decrement: feed.quantity,
          },
        },
      });

      createStock = await tx.feedStock.upsert({
        where: {
          feedName_depotName: {
            feedName: feed.feedName,
            depotName: payload.toDepot,
          },
        },
        update: {
          stock: {
            increment: feed.quantity!,
          },
        },
        create: {
          createDate: payload.createDate,
          depotName: payload.toDepot,
          stock: feed.quantity,
          feedName: feed.feedName,
        },
      });
      return { updateStock, createStock };
    });
  }
  let bill;
  const oldBil = await prismaClient.feedStockTransfer.findFirst({
    orderBy: {
      createAt: "desc",
    },
  });

  if (!oldBil) {
    bill = "FST-" + "000" + 1;
  } else {
    const s = oldBil.trnasferBill.substring(7);
    const last = parseInt(s) + 1;
    bill = "FST-" + "000" + last;
  }

  let feedTransfer;

  if (updateStock && createStock) {
    feedTransfer = await prismaClient.feedStockTransfer.create({
      data: {
        createDate: payload.createDate,
        transerFerDate: payload.createDate,
        trnasferBill: bill,
        fromDepot: payload.fromDepot,
        toDepot: payload.toDepot,
        totalKg: payload.totalKg,
        totalPrice: payload.totalPrice,
      },
    });

    let feedItem = [];

    for (const feed of payload.item) {
      const item = await prismaClient.transferFeedItem.create({
        data: {
          createDate: payload.createDate,
          quntity: String(feed.quantity),
          feedName: feed.feedName,
          tansferId: bill,
          price: feed.totalPrice,
        },
      });

      feedItem.push(item);
    }
    return {
      feedTransfer,
      item: feedItem,
    };
  }
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
            increment: Number(item.quntity),
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
            decrement: Number(item.quntity),
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
  console.log("edit");
};

export const feedStockTransferService = {
  createFeedStockTransfer,
  getAllDepotFeedTransfer,
  getFeedTransferDepotToDepotById,
  deleteById,
  editTransfer,
};
