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
  payload.farmId = farm?.id;

  const flock = await prismaClient.flock.findFirst({
    where: {
      farmId: payload.farmId,
      flockStatus: FlockStatus.RUNNING,
    },
  });

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
        createDate: payload.createDate,
        farmId: payload.farmId,
        farmNumber: Number(payload.farmCode),
        flockId: payload.flockId,
        flockNumber: payload.flockNumber,
        saleInvoice: invoice,
        totalKg: Number(payload.totalKg),
        totalPrice: Number(payload.totalprice),
        depot: {
          connect: {
            depotName: payload.depotName,
          },
        },
      },
    });

    for (const itm of payload.item) {
      const feedItem = await tx.feedSalesItem.create({
        data: {
          createDate: payload.createDate,
          quantity: Number(itm.quantity),
          totalPice: Number(itm.price),
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

const salesOrderPosting = async (id: string) => {
  const salesorder = await prismaClient.feedSalesOrder.findUnique({
    where: {
      id,
    },
    include: {
      FeedSalesItem: true,
    },
  });
  if (!salesorder) {
    throw new AppError(400, "sales order not found");
  }

  let stockUpdae = [];
  let stockAdd = [];
  for (const order of salesorder.FeedSalesItem) {
    const checkStock = await prismaClient.feedStock.findUnique({
      where: {
        feedName_depotName: {
          feedName: order.feedName,
          depotName: salesorder.depotName,
        },
      },
    });

    if (!checkStock) {
      throw new AppError(400, "feed stock not found");
    }

    if (checkStock?.stock < order.quantity) {
      throw new AppError(400, "feed stock is less then the sales order ");
    }

    const decrimentStock = await prismaClient.feedStock.update({
      where: {
        feedName_depotName: {
          feedName: order.feedName,
          depotName: salesorder.depotName,
        },
      },
      data: {
        stock: {
          decrement: order.quantity,
        },
      },
    });
    stockUpdae.push(decrimentStock);
    const farmStockIcrement = await prismaClient.farmFeedStock.upsert({
      where: {
        flockId_feedName: {
          feedName: order.feedName,
          flockId: salesorder.flockId,
        },
      },
      create: {
        feedName: order.feedName,
        flockId: salesorder.flockId,
        stock: order.quantity,
      },
      update: {
        stock: {
          increment: order.quantity,
        },
      },
    });
    stockAdd.push(farmStockIcrement);
  }

  const updateStatus = await prismaClient.feedSalesOrder.update({
    where: {
      id,
    },
    data: {
      status: DeliveryStatus.DELIVER,
    },
  });
  if (!stockAdd && !stockUpdae) {
    return { message: "not sotck updated successfully " };
  }

  return {
    updateStatus,
    stockAdd,
    stockUpdae,
  };
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

  console.log(updateEle);

  const farm = await prismaClient.farmer.findFirst({
    where: {
      farmCode: Number(updateEle.farmCode),
      branchCode: updateData.branchCode,
    },
  });

  console.log(farm);
  updateEle.farmId = farm?.id;

  const flock = await prismaClient.flock.findFirst({
    where: {
      farmId: farm?.id,
      flockStatus: FlockStatus.RUNNING,
    },
  });

  updateEle.flockNumber = flock?.flockNumber;
  updateEle.flockId = flock?.id;

  const oldSalesOrder = await prismaClient.feedSalesOrder.findFirst({
    where: {
      saleInvoice: updateEle.saleInvoice,
    },
  });

  if (oldSalesOrder?.status == DeliveryStatus.DELIVER) {
    throw new AppError(400, "sales order alredy posting you can't update ");
  }

  const salesOrder = await prismaClient.feedSalesOrder.update({
    where: {
      id,
    },
    data: {
      branchCode: updateEle.branchCode,
      createDate: updateEle.createDate,
      depotName: updateEle.depotName,
      farmId: farm?.id,
      farmNumber: farm?.farmCode,
      flockId: flock?.id,
      flockNumber: flock?.flockNumber,
      saleInvoice: updateEle.saleInvoice,
      totalKg: updateEle.totalKg,
      totalPrice: updateEle.totalPrice,
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
