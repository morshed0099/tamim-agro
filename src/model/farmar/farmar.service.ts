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

  console.log(findLastFarmer,'dfdf')
  const nextFarmId = findLastFarmer ? findLastFarmer.farmCode + 1 : 1;
  payload.farCode = nextFarmId;


  const cheBranche = await prismaClient.branch.findFirstOrThrow({
    where: {
      branchCode: payload.branchCode,
    },
  });
 

  const address = await prismaClient.address.create({
    data: payload.address,
  });
  console.log(address)
  const farmer = await prismaClient.farmer.create({
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
      createdAt: payload.createdAt,
    },
  });

  return {
    farmer,
    address,
  };
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

export const farmService = {
  createFarm,
  getFarmer,
};
