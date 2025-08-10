import { Prisma } from "../../generated/prisma";
import prismaClient from "../../helper/prismaClient";

const createFeedCategory = async (payload: any) => {
  const result = await prismaClient.feedNameCategory.create({
    data: payload,
  });
  return result;
};

const getAllFeedCategoy = async (payload: any) => {
  const { serchTermp, ...filterData } = payload;
  const andCondition: Prisma.FeedNameCategoryWhereInput[] = [];

  if (serchTermp) {
    andCondition.push({
      OR: [].map((feilds) => ({
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

  const whreCondition: Prisma.FeedNameCategoryWhereInput = {
    AND: andCondition,
  };

  const result = await prismaClient.feedNameCategory.findMany({
    where: whreCondition,
  });
  return result;
};

export const feedCategoryService = {
  createFeedCategory,
  getAllFeedCategoy,
};
