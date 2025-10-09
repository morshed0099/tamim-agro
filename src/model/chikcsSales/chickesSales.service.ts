import { FlockStatus, Prisma } from "../../generated/prisma";
import prismaClient from "../../helper/prismaClient";
import AppError from "../../middileware/AppError";

const createChiksSell = async (payload: any) => {
  const farm = await prismaClient.farmer.findFirst({
    where: {
      branchCode: payload.branchCode,
      farmCode: payload.farmCode,
    },
  });
  if (!farm) {
    throw new AppError(400, "farmer not found !!");
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

  const result = await prismaClient.chicks.create({
    data: {
      createdBy: "manager",
      currentPrice: payload.currentPrice,
      farmNumber: farm.farmCode,
      name: payload.name,
      quantity: payload.quantity,
      sellPrice: payload.sellPrice,
      totalPrice: payload.totalPrice,
      branchCode: payload.branchCode,
      description: "this birds is good",
      farmId: farm.id,
      flockId: flock.id,
    },
  });
  return result;
};

const getAllchicksSell = async (params: any) => {
  const { searchTermp, ...filterData } = params;
  const andCondition: Prisma.ChicksWhereInput[] = [];
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

  if (Object.keys(filterData).length > 0) {
    andCondition.push({
      AND: Object.keys(filterData).map((key) => ({
        [key]: {
          equals: filterData[key],
        },
      })),
    });
  }
  const whereCondition: Prisma.ChicksWhereInput = { AND: andCondition };
  const result = await prismaClient.chicks.findMany({
    where: whereCondition,
  });

  return result;
};

const getSingleChicksSell = async (id: string) => {
  const result = await prismaClient.chicks.findUnique({
    where: {
      id,
    },
  });
};
export const chicksSellService = {
  createChiksSell,
  getAllchicksSell,
  getSingleChicksSell,
};
