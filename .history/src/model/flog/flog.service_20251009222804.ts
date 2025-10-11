import { FlockStatus } from "../../generated/prisma";
import prismaClient from "../../helper/prismaClient";

const createFlock = async (payload: any) => {
  console.log(payload);
  const isRunningFlock = await prismaClient.flock.findFirst({
    where: {
      farmId: payload.farmId,
      flockStatus: FlockStatus.RUNNING,
    },
  });

   if(isRunningFlock){
    throw new App
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
  payload.flockNumber = newFlockNumber;

  const result = await prismaClient.flock.create({
    data: payload,
  });
  return result;
};

export const flockService = {
  createFlock,
};
