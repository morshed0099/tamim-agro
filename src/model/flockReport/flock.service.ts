import { Prisma } from "../../generated/prisma";
import prismaClient from "../../helper/prismaClient";
import { TFlockReport } from "../../type";

const createFlockReport = async (payload: TFlockReport) => {
  const findFlockLast = await prismaClient.flockReport.findFirst({
    where: {
      flockId: payload.flockId,
    },
    orderBy: {
      visitedDate: "desc",
    },
  });
  if (findFlockLast) {
    payload.totalMortality =
      findFlockLast.todayMortality + payload.todayMortality;
    payload.birdsStock = findFlockLast.housedBirds - payload.totalMortality;
    payload.todayMortalityPercent =
      (payload.todayMortality / payload.birdsStock) * 100;
    payload.totalMortalityPercentage =
      (findFlockLast.housedBirds / payload.totalMortality) * 100;
    payload.bodyWeight = (payload.birdsStock * payload.bodyWeight) / 1000;
    payload.averageBodyWight = payload.bodyWeight / payload.birdsStock;
    payload.totalFeedEting =
      findFlockLast.totalFeedEting + payload.todayFeedEting;
    payload.age = payload.age + findFlockLast.age + 1;
    payload.fcr = payload.totalFeedEting / payload.bodyWeight;


    console.log(payload);
    const result = await prismaClient.flockReport.create({
      data: payload as any,
    });
    return result;
  } else {
    payload.birdsStock = payload.housedBirds;
    const result = await prismaClient.flockReport.create({
      data: payload as any,
    });
    return result;
  }

};

const getAllFclockReport = async (params: any) => {
  const { searchTermp, mortalityPercent, ...filterDate } = params;
  const andCondition: Prisma.FlockReportWhereInput[] = [];

  if (searchTermp) {
    andCondition.push({
      // need some changes to prisma schema to find like [executive name ,farmcode ]
      OR: ["diseases", "condition"].map((feilds) => ({
        [feilds]: {
          contains: searchTermp,
          mode: "insensitive",
        },
      })),
    });
  }

  if (Object.keys(filterDate).length > 0) {
    andCondition.push({
      AND: Object.keys(filterDate).map((key) => ({
        [key]: {
          equals: filterDate[key],
        },
      })),
    });
  }
  console.log(mortalityPercent);
  if (mortalityPercent) {
    andCondition.push({
      OR: [
        {
          todayMortalityPercent: {
            gt: parseFloat(mortalityPercent),
          },
        },
      ],
    });
  }

  const whreCondition: Prisma.FlockReportWhereInput = { AND: andCondition };
  const result = await prismaClient.flockReport.findMany({
    where: whreCondition,
  });
  return result;
};

export const flockReportService = {
  createFlockReport,
  getAllFclockReport,
};
