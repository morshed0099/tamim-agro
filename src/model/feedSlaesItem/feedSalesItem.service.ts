import { DeliveryStatus } from "../../generated/prisma";
import prismaClient from "../../helper/prismaClient";
import AppError from "../../middileware/AppError";

const deletFeedSalItem = async (id: string) => {
  const oldSalesOrder = await prismaClient.feedSalesItem.findFirst({
    where: {
      id,
    },
    include: {
      salesOrder: true,
    },
  });

  if (oldSalesOrder?.salesOrder.status == DeliveryStatus.DELIVER) {
    throw new AppError(400, "item can not delete this sales order posting");
  }

  const result = await prismaClient.feedSalesItem.delete({
    where: {
      id,
    },
  });
  return result;
};

const createFeedSaleItem = async (payload: any) => {
  const salesOrder = await prismaClient.feedSalesOrder.findFirst({
    where: {
      saleInvoice: payload.salesInvoice,
    },
  });

  if (salesOrder?.status == DeliveryStatus.DELIVER) {
    throw new AppError(
      400,
      "item can not add more feed , this sales order alredy posting"
    );
  }

  const oldItem = await prismaClient.feedSalesItem.findFirst({
    where: {
      feedName: payload.feedName,
      salesInvoice: payload.salesInvoice,
    },
  });

  if (oldItem) {
    throw new AppError(400, "alredy added this feed item");
  }

  console.log(oldItem,'kk');

  const result = await prismaClient.feedSalesItem.create({
    data: {
      createDate: payload.createDate,
      quantity: payload.quantity,
      totalPice: payload.totalPice,
      feedName: payload.feedName,
      salesInvoice: payload.salesInvoice,
    },
  });

  return result;
};

const feedSalesItemUpdate = async (id: string, updateData: any) => {
  const result = await prismaClient.feedSalesItem.update({
    where: {
      id,
    },
    data: updateData,
  });

  return result;
};

export const feedsalesItemService = {
  deletFeedSalItem,
  createFeedSaleItem,
  feedSalesItemUpdate,
};
