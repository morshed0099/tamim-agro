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

const getSingleBranchEmpoyee = async (id: string) => {
  const oldData = await prismaClient.branchEmployeeHistory.findFirst({
    where: {
      employeeId: id,
    },
  });

  const employeeDetails = await prismaClient.employee.findFirst({
    where: {
      employeeId: id,
    },
  });

  return {
    oldData,
    employeeDetails,
  };
};

export const branchAssinEployeeService = {
  createBranchAssinEmployee,
  getSingleBranchEmpoyee,
};
