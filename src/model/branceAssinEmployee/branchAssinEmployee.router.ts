import prismaClient from "../../helper/prismaClient";

const createBranchAssinEmployee = async (payload: any) => {
  const result = await prismaClient.branchEmployeeHistory.create({
    data: payload,
  });
};

export const branchAssinEployeeService = {
  createBranchAssinEmployee,
};
