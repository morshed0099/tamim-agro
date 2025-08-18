import catchAsync from "../../middileware/catchAsync";
import httpStatus from "http-status";
import { farmService } from "./farmar.service";

const createFarm = catchAsync(async (req, res) => {
  const farmDate = req.body;
  const result = await farmService.createFarm(farmDate);
  res.status(httpStatus.CREATED).json({
    message: "user created successfully !!",
    success: true,
    data: result,
  });
});

const getFarmer = catchAsync(async (req, res) => {
  const farmer = await farmService.getFarmer(req.query);
  res.status(httpStatus.OK).json({
    success: true,
    message: "farmer retive successfully",
    data: farmer,
  });
});

const getSingleFarmer = catchAsync(async (req, res) => {
  const { id } = req.params;

  const farmer = await farmService.getSingleFarmer(id);
  res.status(httpStatus.OK).json({
    success: true,
    message: "farmer retive success full !!",
    data: farmer,
  });
});

const updateFarmer = catchAsync(async (req, res) => {
  const updateData = req.body;
  const { id } = req.params;
  const result = await farmService.updateFarmer(updateData, id);
  res.status(httpStatus.OK).json({
    success: true,
    message: "farmer details updated successfully !!",
    data: result,
  });
});

const getSepecificFarmer = catchAsync(async (req, res) => {
  const result = await farmService.getSpecificFarmer(req.query);
  res.status(httpStatus.OK).json({
    success: true,
    message: "farm retive successfully !!",
    data: result,
  });
});

export const farmControler = {
  createFarm,
  getFarmer,
  getSingleFarmer,
  updateFarmer,
  getSepecificFarmer,
};
