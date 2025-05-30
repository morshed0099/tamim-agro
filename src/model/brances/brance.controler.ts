import catchAsync from "../../middileware/catchAsync";
import httpStatus from "http-status";
import { branchService } from "./brance.service";

const createBranch = catchAsync(async (req, res) => {
  const branceDate = req.body;
  const result = await branchService.createBranch(branceDate);
  res.status(httpStatus.CREATED).json({
    success: true,
    message: "Branch Created Successfully",
    data: result,
  });
});

export const brachControler = {
  createBranch,
};
