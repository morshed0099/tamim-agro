import { FlockStatus } from "../../generated/prisma";
import prismaClient from "../../helper/prismaClient";

const createFlock = async (payload: any) => {
  const executiveIsAviableBrnach = await prismaClient.employee.findFirstOrThrow(
    {
      where: {
        branchCode: payload.brachCode,
      },
    }
  );

  const isRunningFlock = await prismaClient.flock.findFirst({
    where: {
      farmId: payload.farmId,
      flockStatus: FlockStatus.RUNNING,
    },
  });

  if (!isRunningFlock) {
    const result = await prismaClient.flock.create({
      data: payload,
    });
    return result;
  }
  return { message: "flock is alredy running" };
};

export const flockService = {
  createFlock,
};
