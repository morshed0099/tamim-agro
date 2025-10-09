import {
  DeliveryStatus,
  Prisma,
  TransactionType,
} from "../../generated/prisma";
import prismaClient from "../../helper/prismaClient";
import AppError from "../../middileware/AppError";

const createStock = async (payload: any) => {
  const depot = await prismaClient.depot.findFirst({
    where: {
      depotName: payload.depotName,
    },
  });

  if (!depot) {
    throw new AppError(400, "depot not found!!");
  }

  let id;

  await prismaClient.$transaction(async (tx) => {
    const addStock = await tx.addStock.create({
      data: {
        createAt: new Date(payload.createAt),
        quantity: payload.totalQuantiy,
        depotName: payload.depotName,
        price: payload.totalPrice,
      },
    });
    id = addStock.id;
    for (const item of payload.item) {
      const createItem = await tx.addStockItem.create({
        data: {
          addStockId: addStock.id,
          createAt: new Date(payload.createAt),
          feedName: item.feedName,
          price: item.price,
          quantity: item.quantity,
        },
      });
    }
  });

  const result = await prismaClient.addStock.findUnique({
    where: {
      id,
    },
    include: {
      AddStockItem: true,
    },
  });
  return result;
};

const getAllAddStockOrder = async (params: any) => {
  const { searchTermp, ...filterData } = params;
  const andCondition: Prisma.AddStockWhereInput[] = [];

  if (searchTermp) {
    andCondition.push({
      OR: [""].map((feild) => ({
        [feild]: {
          contains: searchTermp,
          mode: "incensitive",
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

  const whereConditon: Prisma.AddStockWhereInput = { AND: andCondition };
  const result = await prismaClient.addStock.findMany({
    where: whereConditon,
    include: {
      AddStockItem: true,
    },
  });
  return result;
};

const getAddStockById = async (id: string) => {
  const result = await prismaClient.addStock.findUnique({
    where: {
      id,
    },
    include: {
      AddStockItem: true,
    },
  });
  return result;
};

const updateAddStock = async (payload: any) => {
  console.log(payload);
  const findAddStock = await prismaClient.addStock.findUnique({
    where: {
      id: payload.id,
      status: DeliveryStatus.PENDING,
    },
  });

  const delteOld = await prismaClient.addStock.delete({
    where: {
      id: payload.id,
    },
  });

  const createNew = await prismaClient.addStock.create({
    data: {
      id: payload.id,
      createAt: new Date(payload.createAt),
      price: payload.totalPrice,
      quantity: payload.totalQuantiy,
      depotName: payload.depotName,
      source: payload.source,
    },
  });
  for (const itm of payload.item) {
    const createItem = await prismaClient.addStockItem.create({
      data: {
        createAt: new Date(payload.createAt),
        price: itm.price,
        unitPrice: itm.unitPrice,
        quantity: itm.quantity,
        feedName: itm.feedName,
        addStockId: createNew.id,
      },
    });
  }

  const result = await prismaClient.addStock.findUnique({
    where: {
      id: payload.id,
    },
  });
  return result;
};

const delteAddStock = async (id: string) => {
  const result = await prismaClient.addStock.delete({
    where: {
      id,
    },
  });
  return result;
};

const postingAddStock = async (payload: any) => {
  const addStock = await prismaClient.addStock.findUnique({
    where: {
      id: payload.id,
    },
    include: {
      AddStockItem: true,
    },
  });
  if (!addStock) {
    throw new AppError(400, "add stock order not found!!");
  }
  const updateStatus = await prismaClient.addStock.update({
    where: {
      id: addStock.id,
    },
    data: {
      deliveryDate: new Date(payload.deliveryDate),
      status: DeliveryStatus.DELIVER,
    },
  });
  const createFeedTrnsaction = await prismaClient.feedTransActionHeader.create({
    data: {
      createAt: new Date(payload.deliveryDate),
      refId: addStock.id,
      status: DeliveryStatus.DELIVER,
      transactionType: TransactionType.INITIAL,
      depotName: addStock.depotName,
    },
  });

  const result = [];

  for (const stocks of addStock.AddStockItem) {
    const checkStock = await prismaClient.feedStock.upsert({
      where: {
        depotName_feedName: {
          depotName: addStock.depotName,
          feedName: stocks.feedName,
        },
      },
      update: {
        stock: {
          increment: stocks.quantity,
        },
      },
      create: {
        createAt: new Date(payload.deliveryDate),
        stock: stocks.quantity,
        feedName: stocks.feedName,
        unitPrice: stocks.unitPrice,
        depotName: addStock.depotName,
      },
    });
    result.push(checkStock);
  }
  return result;
};

export const feedAddStockService = {
  createStock,
  getAllAddStockOrder,
  getAddStockById,
  updateAddStock,
  delteAddStock,
  postingAddStock,
};
