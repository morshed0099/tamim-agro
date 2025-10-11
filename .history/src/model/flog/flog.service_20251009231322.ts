import { FlockStatus, Prisma } from "../../generated/prisma";
import prismaClient from "../../helper/prismaClient";
import AppError from "../../middileware/AppError";

const createFlock = async (payload: any) => {
  const farm = await prismaClient.farmer.findFirst({
    where: {
      branchCode: payload.selectBranch,
      farmCode: payload.farmNumber,
    },
  });

  if (!farm) {
    throw new AppError(400, "farm is not found");
  }
  const isRunningFlock = await prismaClient.flock.findFirst({
    where: {
      farmId: farm!.id,
      flockStatus: FlockStatus.RUNNING,
    },
  });

  if (isRunningFlock) {
    throw new AppError(400, "flock is alredy running");
  }

  const lastFlock = await prismaClient.flock.findFirst({
    where: {
      farmId: payload.farmId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const newFlockNumber = lastFlock ? lastFlock.flockNumber + 1 : 1;

  const result = await prismaClient.flock.create({
    data: {
      createdAt: new Date(payload.createDate),
      docName: payload.docName,
      flockNumber: newFlockNumber,
      startDate: new Date(payload.createDate),
      approvedBy: payload.approvedBy,
      executiveId: payload.selectExecutive,
      branchCode: payload.selectBranch,
      farmId: farm!.id,
    },
  });
  return result;
};

const getAllFlock = async (payload: any) => {
  const { searchTermp, ...filterData } = payload;
  const adnCondition: Prisma.FlockWhereInput[] = [];
  if (searchTermp) {
    adnCondition.push({
      OR: [""].map((feilds) => ({
        [feilds]: {
          contains: searchTermp,
          mode: "incensitive",
        },
      })),
    });
  }
  if(Object.keys(filterData).length >0){
    adnCondition.push({
      AND:Object.keys(filterData).map(key=>({
        [key]:
      }))
    })
  }
};

export const flockService = {
  createFlock,
};
