import { Prisma } from "../../generated/prisma";
import prismaClient from "../../helper/prismaClient";

const createDepot = async (payload: any) => {
  const result = await prismaClient.depot.create({
    data: payload,
  });
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
  });
  return result;
};

export const depotService = { createDepot, getAlldepot };
