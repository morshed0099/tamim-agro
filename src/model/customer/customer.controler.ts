import catchAsync from "../../middileware/catchAsync";
import httpStatus from "http-status";
import { farmService } from "./customer.service";

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

export const farmControler = {
  createFarm,
  getFarmer,
};
