import { Prisma } from "../../generated/prisma";
import prismaClient from "../../helper/prismaClient";
import { EmployeeType } from "../../type";

const createEmployee = async (payload: any) => {
  const result = await prismaClient.$transaction(async (tncClient) => {
    const branchcode = await tncClient.branch.findFirstOrThrow({
      where: {
        branchCode: payload.branchCode,
      },
    });
    const addressCreate = await tncClient.address.create({
      data: payload.address,
    });
    const createEmployee = await tncClient.employee.create({
      data: {
        designation: payload.designation,
        employeeId: payload.employeeId, //need create employee id like emp00001
        name: payload.name,
        phoneNumber: payload.phoneNumber,
        workingLocation: payload.workingLocation,
        addressId: addressCreate.id,
        branchCode: branchcode.branchCode,
      },
      include: {
        address: true,
      },
    });
    return createEmployee;
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
  });
  return result;
};

export const employeeService = {
  createEmployee,
  getEmployee,
};
