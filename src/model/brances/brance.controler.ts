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

const getAllBranch = catchAsync(async (req, res) => {
  const result = await branchService.getAllBrance(req.query);
  res.status(httpStatus.OK).json({
    success: true,
    message: "all brance retive successfully !!",
    data: result,
  });
});
const getSingleBranch = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await branchService.getSingleBranch(id);
  res.status(httpStatus.OK).json({
    success: true,
    message: "brance retive successfully !!",
    data: result,
  });
});

const updateBranch = catchAsync(async (req, res) => {
  const {id}= req.params
  const result = await branchService.updateBranch(req.body,id);
  res.status(httpStatus.OK).json({
    success: true,
    message: " brance updated successfully !!",
    data: result,
  });
});

export const brachControler = {
  createBranch,
  getAllBranch,
  getSingleBranch,
  updateBranch
};
