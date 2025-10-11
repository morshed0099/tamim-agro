import catchAsync from "../../middileware/catchAsync";
import { flockService } from "./flog.service";
import httpStatus from "http-status";

const createFlock = catchAsync(async (req, res) => {
  const flockData = req.body;
  const result = await flockService.createFlock(flockData);
  res.status(httpStatus.CREATED).json({
    success: true,
    message:result?.message|| "flock created successfully !!",
    data: result,
  });
});

export const flockCrontroler = {
  createFlock,
};
