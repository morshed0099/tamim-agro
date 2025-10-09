import { Prisma } from "../../generated/prisma";
import prismaClient from "../../helper/prismaClient";

const createFeedStock = async (payload: any) => {
  payload.createDate = new Date(payload.createDate);
  const results = [];
  for (const itm of payload.item) {
    const findOldQuntity = await prismaClient.feedStock.findFirst({
      where: {
        feedName: itm.feedName,
      },
    });
    if (findOldQuntity) {
      const newQuntity = findOldQuntity.stock + parseInt(itm.quantity);
      const result = await prismaClient.feedStock.update({
        where: {
          id: findOldQuntity.id,
        },
        data: {
          stock: newQuntity,
        },
      });
      results.push(result);
    } else {
      const result = await prismaClient.feedStock.create({
        data: {
          createAt: payload?.createDate,
          stock: itm.quantity,
          feedName: itm.feedName,
          depotName: payload?.depotName,
        },
      });
      results.push(result);
    }
  }
  return results;
};

const deleteFeedStock = async (id: string) => {
  const result = await prismaClient.feedStock.delete({
    where: {
      id,
    },
  });
};

const getFeedStock = async (query: any) => {
  const { feedName, depotName } = query;
  if (feedName && depotName) {
    const result = await prismaClient.feedStock.findMany({
      where: {
        depotName: depotName,
        feedName: {
          contains: feedName,
          mode: "insensitive",
        },
      },
    });
    return result;
  }
};

export const feedStockService = {
  createFeedStock,
  deleteFeedStock,
  getFeedStock,
};
