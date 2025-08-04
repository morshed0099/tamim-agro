import prismaClient from "../../helper/prismaClient";
import { Prisma } from "../../generated/prisma";

const createBranch = async (payload: any) => {
  console.log(payload);
  const result = await prismaClient.branch.create({
    data: payload,
  });
  return result;
};

const getAllBrance = async (payload: any) => {
  const { serchTermp, ...filterData } = payload;
  const andCondition: Prisma.BranchWhereInput[] = [];

  if (serchTermp) {
    andCondition.push({
      OR: ["locationName"].map((feild) => ({
        [feild]: {
          contains: serchTermp,
          mode: "insensitive",
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andCondition.push({
      AND: Object.keys(filterData).map((key) => ({
        [key]: {
          equals: filterData[key],
        },
      })),
    });
  }
  const whereCondition: Prisma.BranchWhereInput = { AND: andCondition };
  const result = await prismaClient.branch.findMany({
    where: whereCondition,
  });

  return result;
};

const updateBranch = async (payload: any, id: string) => {
  const result = await prismaClient.branch.update({
    where: {
      id,
    },
    data: {
      createDate: payload.createDate,
      branchCode: payload.branchCode,
      locationName: payload.locationName,
    },
  });
};

const getSingleBranch = async (id: string) => {
  const result = await prismaClient.branch.findUnique({
    where: {
      id,
    },
  });
  return result;
};

export const branchService = {
  createBranch,
  getAllBrance,
  getSingleBranch,
  updateBranch,
};
