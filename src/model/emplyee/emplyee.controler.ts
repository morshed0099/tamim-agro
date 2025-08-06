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

const getSingleEmployee = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await employeeService.getSingleEmployee(id);
  res.status(httpStatus.OK).json({
    success: true,
    message: "retive single employee successfully !!",
    data: result,
  });
});

const updateEmployee = catchAsync(async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  const result = await employeeService.updateEmployee(updateData, id);

  res.status(httpStatus.OK).json({
    success: true,
    message: "employe updated successfully !!",
    data: result,
  });
});

const getEmployeeWithEmpid = catchAsync(async (req, res) => {
  const { employeeId } = req.body;
  const result = await employeeService.getEmployeWithEmpid(employeeId);
  res.status(httpStatus.OK).json({
    success: true,
    message: "retive employee success fully !!",
    data: result,
  });
});

export const employeeControler = {
  createEmployee,
  getEmployee,
  getSingleEmployee,
  updateEmployee,
  getEmployeeWithEmpid,
};
