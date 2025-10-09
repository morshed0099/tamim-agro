import { DeliveryStatus, FlockStatus, Prisma } from "../../generated/prisma";
import prismaClient from "../../helper/prismaClient";
import AppError from "../../middileware/AppError";

const createSalesOrder = async (payload: any) => {
  const farm = await prismaClient.farmer.findFirst({
    where: {
      branchCode: payload.branchCode,
      farmCode: Number(payload.farmCode),
    },
  });
  if (!farm) {
    throw new AppError(400, "farmer not found");
  }
  payload.farmId = farm?.id;

  const flock = await prismaClient.flock.findFirst({
    where: {
      farmId: payload.farmId,
      flockStatus: FlockStatus.RUNNING,
    },
  });
  if (!flock) {
    throw new AppError(400, "flock is not found");
  }

  payload.flockId = flock?.id;
  payload.flockNumber = flock?.flockNumber;

  const item: any[] = [];
  const result = await prismaClient.$transaction(async (tx) => {
    const oldSlesOrder = await tx.feedSalesOrder.findFirst({
      orderBy: {
        createdAt: "desc",
      },
    });

    let invoice;

    if (oldSlesOrder) {
      const oldInoice = oldSlesOrder?.saleInvoice.substring(6);
      const newInvoice = parseInt(oldInoice) + 1;
      invoice = "SI-000" + newInvoice;
    } else {
      invoice = "SI-" + "000" + 1;
    }
    const order = await tx.feedSalesOrder.create({
      data: {
        branchCode: payload.branchCode,
        createdAt: new Date(payload.createAt),
        farmId: payload.farmId,
        farmNumber: Number(payload.farmCode),
        flockNumber: payload.flockNumber,
        saleInvoice: invoice,
        totalQuantity: Number(payload.totalQuantiy),
        totalPrice: Number(payload.totalPrice),
        depot: {
          connect: {
            depotName: payload.depotName,
          },
        },
        flock: { connect: { id: flock?.id } },
      },
    });

    for (const itm of payload.item) {
      const feedItem = await tx.feedSalesItem.create({
        data: {
          createdAt: new Date(payload.createAt),
          quantity: Number(itm.quantity),
          price: Number(itm.price),
          feedName: itm.feedName,
          salesInvoice: invoice,
        },
      });
      item.push(feedItem);
    }
    return order;
  });
  const salesOrder = await prismaClient.feedSalesOrder.findFirst({
    where: {
      saleInvoice: result.saleInvoice,
    },
    include: {
      FeedSalesItem: true,
    },
  });

  return salesOrder;
};

const salesOrderPosting = async (updateData: any) => {
  const salesOrder = await prismaClient.feedSalesOrder.findUnique({
    where: { id: updateData.id },
    include: { FeedSalesItem: true },
  });

  if (!salesOrder) throw new AppError(400, "Sales order not found");

  await prismaClient.$transaction(async (prisma) => {
    for (const item of salesOrder.FeedSalesItem) {
      // Find stock for depot + feedName + date
      const stocks = await prisma.feedStock.findUnique({
        where: {
          depotName_feedName: {
            depotName: salesOrder.depotName,
            feedName: item.feedName,
          },
        },
      });

      if (!stocks) {
        throw new AppError(
          400,
          `No stock history found for ${item.feedName} at ${salesOrder.depotName} on ${updateData.deliverDate}`
        );
      }

      if (stocks.stock < item.quantity) {
        throw new AppError(
          400,
          `Stock not enough for ${item.feedName}. Available: ${stocks.stock}, Requested: ${item.quantity}`
        );
      }

      // Update stock history
      await prisma.feedStock.update({
        where: { id: stocks.id },
        data: {
          stock: { decrement: item.quantity },
          updateAt: new Date(),
        },
      });
    }

    // Update sales order status
    await prisma.feedSalesOrder.update({
      where: { id: salesOrder.id },

      data: {
        status: "DELIVER",
        updateAt: new Date(),
        deliveryDate: new Date(updateData.deliverDate),
      },
    });
  });

  return { message: "Sales order delivered successfully" };
};

const deleteSaleOder = async (id: string) => {
  const salesOder = await prismaClient.feedSalesOrder.findUnique({
    where: {
      id,
      status: DeliveryStatus.PENDING,
    },
  });

  if (!salesOder) {
    throw new AppError(400, "sales order not found or posting ");
  }

  const salesFeedItem = await prismaClient.feedSalesItem.findMany({
    where: {
      salesInvoice: salesOder?.saleInvoice,
    },
  });

  let retunStock: any[] = [];
  let stockUpdate: any[] = [];

  for (const order of salesFeedItem) {
    const result = await prismaClient.$transaction(async (tx) => {
      const deletStock = await tx.farmFeedStock.update({
        where: {
          flockId_feedName: {
            feedName: order.feedName,
            flockId: salesOder?.flockId,
          },
        },
        data: {
          stock: {
            decrement: order.quantity,
          },
        },
      });
      stockUpdate.push(deletStock);
      const stockAdd = await tx.feedStock.update({
        where: {
          feedName_depotName: {
            feedName: order.feedName,
            depotName: salesOder.depotName,
          },
        },
        data: {
          stock: {
            increment: order.quantity,
          },
        },
      });
      retunStock.push(stockAdd);
    });
  }

  if (!stockUpdate && !retunStock) {
    throw new AppError(400, "Something went wrong");
  }

  const deleteSales = await prismaClient.feedSalesOrder.delete({
    where: {
      id,
    },
  });
};

const getAllSalesOrder = async (payload: any) => {
  const { searchTermp, ...filterData } = payload;
  const andCondition: Prisma.FeedSalesOrderWhereInput[] = [];

  if (searchTermp) {
    andCondition.push({
      OR: [].map((filds) => ({
        [filds]: {
          contains: searchTermp,
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
  const whereCondition: Prisma.FeedSalesOrderWhereInput = { AND: andCondition };

  const result = await prismaClient.feedSalesOrder.findMany({
    where: whereCondition,
    include: {
      FeedSalesItem: true,
    },
  });

  return result;
};

const getSingleSalesOrder = async (id: string) => {
  const salesOrder = await prismaClient.feedSalesOrder.findUnique({
    where: {
      id,
    },
    include: {
      FeedSalesItem: true,
    },
  });

  const customerDetails = await prismaClient.farmer.findFirst({
    where: {
      branchCode: salesOrder?.branchCode,
      farmCode: salesOrder?.farmNumber,
    },
    include: {
      address: true,
    },
  });

  return {
    salesOrder,
    name: customerDetails?.name,
    phoneNumber: customerDetails?.phoneNumber,
    address: customerDetails?.address,
  };
};

const updateSalesOrder = async (id: string, updateData: any) => {
  const { id: orderId, ...updateEle } = updateData;

  const findFarm = await prismaClient.farmer.findFirst({
    where: {
      branchCode: updateData.branchCode,
      farmCode: updateData.farmCode,
    },
  });

  if (!findFarm) {
    throw new AppError(400, "farm is not found");
  }

  const flock = await prismaClient.flock.findFirst({
    where: {
      farmId: findFarm.id,
      flockStatus: FlockStatus.RUNNING,
    },
  });

  if (!flock) {
    throw new AppError(400, "flock is not found");
  }

  const findSles = await prismaClient.feedSalesOrder.findUnique({
    where: {
      id,
    },
  });

  if (!findSles) {
    throw new AppError(400, "sales order not found");
  }

  const invoice = findSles.saleInvoice;
  const salesId = findSles.id;

  const deleteOld = await prismaClient.feedSalesOrder.delete({
    where: {
      id,
    },
  });
  const createSales = await prismaClient.feedSalesOrder.create({
    data: {
      branchCode: updateData.branchCode,
      createdAt: new Date(updateData.createAt),
      farmId: findFarm.id,
      farmNumber: updateData.farmCode,
      flockNumber: flock.flockNumber,
      saleInvoice: invoice,
      id: salesId,
      depotName: updateData.depotName,
      flockId: flock.id,
    },
  });
  for (const itm of updateData.item) {
    await prismaClient.feedSalesItem.create({
      data: {
        createdAt: new Date(updateData.createAt),
        price: itm.price,
        quantity: itm.quantity,
        feedName: itm.feedName,
        salesInvoice: invoice,
      },
    });
  }
  const salesOrder = await prismaClient.feedSalesOrder.findUnique({
    where: {
      id: salesId,
    },
    include: {
      FeedSalesItem: true,
    },
  });
  return salesOrder;
};

export const feedSalesOrderService = {
  createSalesOrder,
  salesOrderPosting,
  deleteSaleOder,
  updateSalesOrder,
  getAllSalesOrder,
  getSingleSalesOrder,
};
