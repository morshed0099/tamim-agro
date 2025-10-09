import { Prisma } from "../../generated/prisma";
import prismaClient from "../../helper/prismaClient";

const createFarm = async (payload: any) => {
  const findLastFarmer = await prismaClient.farmer.findFirst({
    where: {
      branchCode: payload.branchCode,
    },
    orderBy: {
      farmCode: "desc",
    },
  });

  const nextFarmId = findLastFarmer ? findLastFarmer.farmCode + 1 : 1;
  payload.farCode = nextFarmId;

  const cheBranche = await prismaClient.branch.findFirstOrThrow({
    where: {
      branchCode: payload.branchCode,
    },
  });

  const result = await prismaClient.$transaction(async (tx) => {
    const address = await tx.address.create({
      data: payload.address,
    });

    const farmer = await tx.farmer.create({
      data: {
        branchCode: payload.branchCode, // This is the foreign key
        farmCode: nextFarmId,
        addressId: address.id,
        name: payload.name,
        phoneNumber: payload.phoneNumber,
        farmType: payload.farmType,
        totalShed: payload.totalShed,
        totalSquare: payload.totalSquare,
        capacity: payload.capacity,
        nid: payload.nid,
        createDate: new Date(payload.createDate),
      },
    });
    return {
      farmer,
      address,
    };
  });

  return result;
};

const getFarmer = async (params: any) => {
  console.log(params);
  const { searchTermp, ...filterdata } = params;
  const andcontion: Prisma.FarmerWhereInput[] = [];

  if (filterdata.farmCode) {
    filterdata.farmCode = parseInt(filterdata.farmCode);
  }
  if (searchTermp) {
    andcontion.push({
      OR: ["name"].map((feilds) => ({
        [feilds]: {
          contains: searchTermp,
          mode: "insensitive",
        },
      })),
    });
  }

  if (Object.keys(filterdata).length > 0) {
    andcontion.push({
      AND: Object.keys(filterdata).map((key) => ({
        [key]: {
          equals: filterdata[key],
        },
      })),
    });
  }

  const whereCondition: Prisma.FarmerWhereInput = { AND: andcontion };
  const farmer = await prismaClient.farmer.findMany({
    where: whereCondition,
    include: {
      address: true,
    },
  });

  return farmer;
};

const getSingleFarmer = async (id: string) => {
  const result = await prismaClient.farmer.findUnique({
    where: {
      id,
    },
  });
  const address = await prismaClient.address.findUnique({
    where: {
      id: result?.addressId!,
    },
  });
  return {
    address,
    farmer: result,
  };
};

const updateFarmer = async (payload: any, farmId: string) => {
  const { id, addressId, address, ...updateData } = payload;
  const result = await prismaClient.$transaction(async (tx) => {
    const addressUpdate = await tx.address.update({
      where: {
        id: addressId,
      },
      data: address,
    });

    const farmerUpdate = await tx.farmer.update({
      where: {
        id,
      },
      data: updateData,
    });
    return {
      addressUpdate,
      farmerUpdate,
    };
  });
  return result;
};

const getSpecificFarmer = async (query: any) => {
  try {
    const { branchCode, farmCode } = query;

    if (branchCode && farmCode) {
      const result = await prismaClient.farmer.findFirst({
        where: {
          branchCode,
          farmCode: parseInt(farmCode),
        },
        include: {
          address: true,
        },
      });

      return result;
    }

    return null;
  } catch (err) {
    console.error("Error in getSpecificFarmer:", err);
    throw err;
  }
};

export const farmService = {
  createFarm,
  getFarmer,
  getSingleFarmer,
  updateFarmer,
  getSpecificFarmer,
};
