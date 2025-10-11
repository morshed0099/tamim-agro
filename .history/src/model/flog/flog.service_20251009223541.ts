import { FlockStatus } from "../../generated/prisma";
import prismaClient from "../../helper/prismaClient";
import AppError from "../../middileware/AppError";

const createFlock = async (payload: any) => {
  console.log(payload);
  const isRunningFlock = await prismaClient.flock.findFirst({
    where: {
      farmId: payload.farmId,
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
    },
  });
  return result;
};

export const flockService = {
  createFlock,
};
