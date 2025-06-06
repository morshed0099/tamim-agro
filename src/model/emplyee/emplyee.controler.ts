import catchAsync from "../../middileware/catchAsync";
import { EmployeeType } from "../../type";
import { employeeService } from "./emplyee.service";
import httpStatus from "http-status";

const createEmployee = catchAsync(async (req, res) => {
  const employeeData = req.body;
  const result = await employeeService.createEmployee(
    employeeData as EmployeeType
  );
  res.status(httpStatus.CREATED).json({
    success: true,
    message: "employee created successfully !!",
    data: result,
  });
});

const getEmployee = catchAsync(async (req, res) => {
  const result = await employeeService.getEmployee(req.query);
  res.status(httpStatus.OK).json({
    success: true,
    message: "employee retive successfull !!",
    data: result,
  });
});

export const employeeControler = {
  createEmployee,
  getEmployee,
};
