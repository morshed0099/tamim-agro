import prismaClient from "../../helper/prismaClient";

const createBranchAssinEmployee = async (payload: any) => {
  console.log(payload);
  const oldData = await prismaClient.branchEmployeeHistory.findFirst({
    where: {
      employeeId: payload.employeeId,
      isActive: true,
    },
  });
  if (oldData) {
    return { message: "employe alredy posting" };
  }
  const result = await prismaClient.branchEmployeeHistory.create({
    data: payload,
  });
};

export const branchAssinEployeeService = {
  createBranchAssinEmployee,
};
