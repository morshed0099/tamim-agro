import prismaClient from "../../helper/prismaClient";

const createFarm = async (payload: any) => {
  console.log("hii");
  const findLastFarmer = await prismaClient.farmer.findFirst({
    where: {
      branchCode: payload.branchCode,
    },
    orderBy: {
      farmCode: "desc",
    },
  });

  const nextFarmId = findLastFarmer ? findLastFarmer.farmCode + 1 : 1;
  console.log(nextFarmId);
  payload.farCode = nextFarmId;
  const cheBranche = await prismaClient.branch.findFirstOrThrow({
    where: {
      branchCode: payload.branchCode,
    },
  });

  const address = await prismaClient.address.create({
    data: payload.address,
  });
  console.log(address.id);
  const farmer = await prismaClient.farmer.create({
    data: {
      branchCode: payload.branchCode, // This is the foreign key
      farmCode: nextFarmId,
      addressId: address.id,
      name: payload.name,
      farmType: payload.farmType,
      totalShed: payload.totalShed,
      totalSquare: payload.totalSquare,
      capacity: payload.capacity,
      nid: payload.nid,
    },
  });

  return {
    farmer,
    address,
  };
};

const getFarmer = async () => {
  const farmer = await prismaClient.farmer.findMany({
    include: {
      address: true,
      flocks: true,
    },
  });
  return farmer;
};

export const farmService = {
  createFarm,
  getFarmer,
};
