import catchAsync from "../../middileware/catchAsync";
import { branchAssinEployeeService } from "./branchAssinEmployee.router";
import httpStatus from "http-status";

const createBranchAssinEmployee = catchAsync(async (req, res) => {
  const result = await branchAssinEployeeService.createBranchAssinEmployee(
    req.body
  );
  res.status(httpStatus.CREATED).json({
    success: true,
    message: "employee brach assin successfully !!",
    data: result,
  });
});

export const brachAssinEmployeeControler = {
  createBranchAssinEmployee,
};
