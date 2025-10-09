import { Prisma } from "../../generated/prisma";
import prismaClient from "../../helper/prismaClient";
import AppError from "../../middileware/AppError";

const createFeedCategory = async (payload: any) => {
  const old = await prismaClient.feedNameCategory.findFirst({
    where: {
      feedName: payload.feedName,
    },
  });
  if (old) {
    throw new AppError(400, "feed alredy created ");
  }

  const result = await prismaClient.feedNameCategory.create({
    data: {
      createDate: new Date(payload.createAt),
      feedCodeNumber: payload.feedCodeNumber,
      feedName: payload.feedName,
      unitPrice: payload.unitPrice,
    },
  });
  return result;
};

const getAllFeedCategoy = async (payload: any) => {
  const { serchTermp, ...filterData } = payload;
  const andCondition: Prisma.FeedNameCategoryWhereInput[] = [];
  if (serchTermp) {
    andCondition.push({
      OR: ["feedName"].map((feilds) => ({
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
