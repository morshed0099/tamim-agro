import prismaClient from "../../helper/prismaClient";

const createBranch = async (payload: any) => {
  // console.log(payload);
  const result = await prismaClient.branch.create({
    data: payload,
  });
  return result;
};

export const branchService = {
  createBranch,
};
