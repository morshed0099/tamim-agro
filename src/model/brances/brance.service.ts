import prismaClient from "../../helper/prismaClient";

const createBranch = async (payload: any) => {
  const result = await prismaClient.branch.create({
    data: payload,
  });
  return result;
};

export const branchService = {
  createBranch,
};
