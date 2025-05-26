import catchAsync from "../../middileware/catchAsync";
import httpStatus from "http-status";
import { farmService } from "./customer.service";

const createFarm = catchAsync(async (req, res) => {
  const farmDate = req.body;
  const result = await farmService.createFarm(farmDate);
  res.send(httpStatus.CREATED).json({
    message: "user created successfully !!",
  });
});

export const farmControler = {
  createFarm,
};
