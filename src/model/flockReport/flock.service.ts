import { Prisma } from "../../generated/prisma";
import prismaClient from "../../helper/prismaClient";

const createFlockReport = async (payload: any) => {
  //   const result = await prismaClient.$transaction(async (tncClient) => {
  //     const findFlockLast = await tncClient.flockReport.findFirst({
  //       where: {
  //         flockId: payload.flockId,
  //       },
  //       orderBy: {
  //         visitedDate: "desc",
  //       },
  //     });
  //     if (findFlockLast) {
  //       const flock= await tncClient.flock.findFirst({
  //         where: {
  //           id: payload.flockId,
  //         },
  //       });
  //       payload.

  //     }
  //   });

  const result = await prismaClient.flockReport.create({
    data: payload,
  });
  return result;
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
          mortalityPercent: {
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
