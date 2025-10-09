import { Prisma } from "../../generated/prisma";
import prismaClient from "../../helper/prismaClient";
import AppError from "../../middileware/AppError";

const createDepot = async (payload: any) => {
  const old = await prismaClient.depot.findFirst({
    where: {
      depotName: payload.depotName,
    },
  });
  if (old) {
    throw new AppError(400, "THIS DEPOT NAME ALREDY EXIT");
  }

  const result = await prismaClient.depot.create({
    data: {
      createDate: new Date(payload.createAt),
      depotName: payload.depotName,
      locationName: payload.locationName,
    },
  });
  return result;
};

const getAlldepot = async (payload: any) => {
  const { serchTermp, ...filterData } = payload;
  const andCondition: Prisma.DepotWhereInput[] = [];

  if (serchTermp) {
    andCondition.push({
      OR: ["depotName"].map((feilds) => ({
        [feilds]: {
          contains: serchTermp,
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
  const wherecondition: Prisma.DepotWhereInput = { AND: andCondition };
  const result = await prismaClient.depot.findMany({
    where: wherecondition,
    include: {
      FeedSalesOrder: {
        include: {
          FeedSalesItem: true,
        },
      },

      sentTransfers: {
        include: {
          transferFeedItem: true,
        },
      },
    },
  });

  return result;
};

export const depotService = { createDepot, getAlldepot };
