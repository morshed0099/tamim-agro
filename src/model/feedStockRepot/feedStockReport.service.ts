import { DeliveryStatus } from "../../generated/prisma";
import prismaClient from "../../helper/prismaClient";

interface FeedData {
  depotName: string;
  feedName: string;
  totalRecive?: number;
  totalSell?: number;
  totalSend?: number;
  totalRetun?: number;
  createDate: string;
}

interface StockReportPayload {
  recive: FeedData[];
  sellFeed: FeedData[];
  send: FeedData[];
  returns: FeedData[];
}

const getDailyFeedStockReport = async (payload: any) => {
  const { depotNames, feedNames, startDate, endDate } = payload;

  // Opening (already তুমি বানিয়েছো, তাই এখানে শুধু দেখালাম)
  const allInBefore = await prismaClient.addStockItem.aggregate({
    where: {
      feedName: feedNames,
      addStock: {
        depotName: depotNames,
        status: DeliveryStatus.DELIVER,
        deliveryDate: { lt: new Date(startDate) },
      },
    },
    _sum: { quantity: true },
  });

  const returnBefore = await prismaClient.retunFeedItem.aggregate({
    where: {
      feedName: feedNames,
      feedRetun: {
        depotName: depotNames,
        status: DeliveryStatus.DELIVER,
        deliveryDate: { lt: new Date(startDate) },
      },
    },
    _sum: { quantity: true },
  });

  const transferInBefore = await prismaClient.transferFeedItem.aggregate({
    where: {
      feedName: feedNames,
      feedStckTranfer: {
        toDepot: depotNames,
        status: DeliveryStatus.DELIVER,
        deliveryDate: { lt: new Date(startDate) },
      },
    },
    _sum: { quantity: true },
  });

  const transferOutBefore = await prismaClient.transferFeedItem.aggregate({
    where: {
      feedName: feedNames,
      feedStckTranfer: {
        fromDepot: depotNames,
        status: DeliveryStatus.DELIVER,
        deliveryDate: { lt: new Date(startDate) },
      },
    },
    _sum: { quantity: true },
  });

  const salesBefore = await prismaClient.feedSalesItem.aggregate({
    where: {
      feedName: feedNames,
      salesOrder: {
        depotName: depotNames,
        status: DeliveryStatus.DELIVER,
        deliveryDate: { lt: new Date(startDate) },
      },
    },
    _sum: { quantity: true },
  });

  console.log(salesBefore._sum.quantity,'age')
  const opening =
    (allInBefore._sum.quantity || 0) +
    (returnBefore._sum.quantity || 0) +
    (transferInBefore._sum.quantity || 0) -
    ((transferOutBefore._sum.quantity || 0) + (salesBefore._sum.quantity || 0));

  // =========================
  // Now: StartDate → EndDate
  // =========================
  const allIn = await prismaClient.addStockItem.aggregate({
    where: {
      feedName: feedNames,
      addStock: {
        depotName: depotNames,
        status: DeliveryStatus.DELIVER,
        deliveryDate: {
          gte: new Date(startDate),
          lte: new Date(endDate),
        },
      },
    },
    _sum: { quantity: true },
  });

  const retunQuntity = await prismaClient.retunFeedItem.aggregate({
    where: {
      feedName: feedNames,
      feedRetun: {
        depotName: depotNames,
        status: DeliveryStatus.DELIVER,
        deliveryDate: {
          gte: new Date(startDate),
          lte: new Date(endDate),
        },
      },
    },
    _sum: { quantity: true },
  });

  const tansferIn = await prismaClient.transferFeedItem.aggregate({
    where: {
      feedName: feedNames,
      feedStckTranfer: {
        toDepot: depotNames,
        status: DeliveryStatus.DELIVER,
        deliveryDate: {
          gte: new Date(startDate),
          lte: new Date(endDate),
        },
      },
    },
    _sum: { quantity: true },
  });

  const transferOut = await prismaClient.transferFeedItem.aggregate({
    where: {
      feedName: feedNames,
      feedStckTranfer: {
        fromDepot: depotNames,
        status: DeliveryStatus.DELIVER,
        deliveryDate: {
          gte: new Date(startDate),
          lte: new Date(endDate),
        },
      },
    },
    _sum: { quantity: true },
  });

  const sales = await prismaClient.feedSalesItem.aggregate({
    where: {
      feedName: feedNames,
      salesOrder: {
        depotName: depotNames,
        status: DeliveryStatus.DELIVER,
        deliveryDate: {
          gte: new Date(startDate),
          lte: new Date(endDate),
        },
      },
    },
    _sum: { quantity: true },
  });
    console.log(sales._sum.quantity,'pore')

  // ✅ সবগুলো quantity বের করে আনো
  const periodAllIn = allIn._sum.quantity || 0;
  const periodReturn = retunQuntity._sum.quantity || 0;
  const periodIn = tansferIn._sum.quantity || 0;
  const periodOut = transferOut._sum.quantity || 0;
  const periodSales = sales._sum.quantity || 0;

  // ✅ Closing বের করতে Opening + (In+Return+TransferIn) - (TransferOut+Sales)
  const closing =
    opening + periodAllIn + periodReturn + periodIn - (periodOut + periodSales);

  return {
    feedNames,
    depotNames,
    opening,
    in: periodAllIn,
    return: periodReturn,
    transferIn: periodIn,
    transferOut: periodOut,
    sales: periodSales,
    closing,
  };
};

export const feedStockReportService = {
  getDailyFeedStockReport,
};
