import prismaClient from "../../helper/prismaClient";

const createFeedStock = async (payload: any) => {
  const results = [];
  for (const itm of payload.item) {
    const findOldQuntity = await prismaClient.feedStock.findFirst({
      where: {
        feedName: itm.feedName,
      },
    });
    if (findOldQuntity) {
      const newQuntity = findOldQuntity.stock + parseInt(itm.quntity);
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
          createDate: payload?.createDate,
          stock: itm.quntity,
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
  try {
    if (feedName && depotName) {
      const result = await prismaClient.feedStock.findFirst({
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
    return null;
  } catch (error) {
    console.log(error);
  }
};

export const feedStockService = {
  createFeedStock,
  deleteFeedStock,
  getFeedStock,
};
