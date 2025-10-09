import { FlockStatus, Prisma } from "../../generated/prisma";
import prismaClient from "../../helper/prismaClient";
import AppError from "../../middileware/AppError";

const createBirdsSales = async (payload: any) => {
  const farm = await prismaClient.farmer.findFirst({
    where: {
      branchCode: payload.branchCode,
      farmCode: payload.farmCode,
    },
  });

  if (!farm) {
    throw new AppError(400, "farmer not found!!");
  }

  const flock = await prismaClient.flock.findFirst({
    where: {
      farmId: farm.id,
      flockStatus: FlockStatus.RUNNING,
    },
  });

  if (!flock) {
    throw new AppError(400, "flock is not found!!");
  }
  const result = await prismaClient.birdSell.create({
    data: {
      avgWeight: payload.avgWeight,
      buyerAddress: payload.buyerAddress,
      buyerName: payload.buyerName,
      buyerPhoneNumber: payload.buyerPhoneNumber,
      pricePerkg: payload.pricePerkg,
      totalPrice: payload.totalPrice,
      totalQantity: payload.totalQantity,
      totalWeight: payload.totalWeight,
      branchCode: farm.branchCode!,
      farmId: farm.id,
      flockId: flock.id,
    },
  });
  return result;
};

const getAllBirdsSales = async (params: any) => {
  const { searchTermp, ...filterData } = params;
  const andCondition: Prisma.BirdSellWhereInput[] = [];

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

  const whereCondition: Prisma.BirdSellWhereInput = { AND: andCondition };
  const result = await prismaClient.birdSell.findMany({
    where: whereCondition,
  });
  return result;
};

const singleBirdsSales = async (id: string) => {
  const result = await prismaClient.birdSell.findUnique({
    where: {
      id,
    },
  });
};

export const birdsSalesService = {
  createBirdsSales,
  getAllBirdsSales,
  singleBirdsSales,
};
