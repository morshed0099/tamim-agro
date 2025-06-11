import { Prisma } from "../../generated/prisma";
import prismaClient from "../../helper/prismaClient";
import { TFlockReport } from "../../type";

const createFlockReport = async (payload: TFlockReport) => {
  const findFlockLast = await prismaClient.flockReport.findFirst({
    where: {
      executiveId: payload.executiveId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (findFlockLast) {
    const totalMortality: number =
      findFlockLast.totalMortality! + payload.todayMortality;

    const birdsStock: number = findFlockLast.housedBirds - totalMortality;

    const todayMortalityPercent: number =
      (payload.todayMortality / birdsStock) * 100;

    const totalMortalityPercentage: number =
      (totalMortality / findFlockLast.housedBirds) * 100;
    const bodyWeight: number = (birdsStock * payload.bodyWeight) / 1000;

    const averageBodyWight: number = bodyWeight / birdsStock;
    console.log(averageBodyWight);
    const totalFeedEting: number =
      findFlockLast.totalFeedEting + payload.todayFeedEting;

    const age: number = findFlockLast.age ? findFlockLast.age! + 1 : 1;

    const fcr = totalFeedEting / bodyWeight;

    const result = await prismaClient.flockReport.create({
      data: {
        age,
        birdsStock,
        bodyWeight,
        condition: payload.condition,
        diseases: payload.diseases,
        description: payload.description,
        executiveId: payload.executiveId,
        executiveName: payload.executiveName,
        feedStock: payload.feedStock,
        flockNumber: payload.flockNumber,
        housedBirds: payload.housedBirds,
        todayFeedEting: payload.todayFeedEting,
        todayMortality: payload.todayMortality,
        todayWeightGain: payload.todayWeightGain,
        totalFeedEting,
        todayMortalityPercent,
        branchCode: payload.branchCode,
        farmId: payload.farmId,
        fcr,
        flockId: payload.flockId,
        averageBodyWight,
        totalMortality,
        totalMortalityPercentage,
        visitedDate: payload.visitedDate,
        locationLink: payload.locationLink,
      },
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
