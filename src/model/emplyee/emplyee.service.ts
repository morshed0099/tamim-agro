import { Prisma } from "../../generated/prisma";
import prismaClient from "../../helper/prismaClient";

const createEmployee = async (payload: any) => {
  const oldEmpId = await prismaClient.employee.findFirst({
    orderBy: {
      createdAt: "desc",
    },
  });

  let employeeId;

  if (oldEmpId) {
    const startString = oldEmpId.employeeId.substring(5);
    const newId = parseInt(startString) + 1;
    employeeId = `em000${newId}`;
  } else {
    employeeId = "em0001";
  }

  const { address, ...employeData } = payload;
  const result = await prismaClient.$transaction(async (tx) => {
    const empAddress = await tx.address.create({
      data: address,
    });
    employeData["addressId"] = empAddress.id;
    employeData["employeeId"] = employeeId;
    const employee = await tx.employee.create({
      data: employeData,
    });
    return {
      empAddress,
      employee,
    };
  });
  return result;
};

const getEmployee = async (params: any) => {
  const { serchTermp, ...filterData } = params;
  const andCondition: Prisma.EmployeeWhereInput[] = [];

  if (serchTermp) {
    andCondition.push({
      OR: ["name"].map((feilds) => ({
        [feilds]: {
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

  const whereCondition: Prisma.EmployeeWhereInput = { AND: andCondition };
  const result = await prismaClient.employee.findMany({
    where: whereCondition,
    include: {
      address: true,
    },
  });
  return result;
};

const getSingleEmployee = async (id: string) => {
  const result = await prismaClient.employee.findUnique({
    where: {
      id,
    },
  });
  return result;
};

export const employeeService = {
  createEmployee,
  getEmployee,
  getSingleEmployee,
};
