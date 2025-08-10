import { Console } from "console";
import prismaClient from "../../helper/prismaClient";
import { create } from "domain";

type ToldStock = {
  fromDepot?: string;
  id: string;
  feedName: string;
  stock: number;
  depotName: string;
  createDate: string;
  createdAt: Date | null;
  updatedAt: Date;
  branchId: string | null;
  quantity?: number;
  toDepot?: string;
};

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

export const feedStockTransferService = {
  createFeedStockTransfer,
};
