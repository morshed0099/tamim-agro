import catchAsync from "../../middileware/catchAsync";
import { flockService } from "./flog.service";
import httpStatus from "http-status";

const createFlock = catchAsync(async (req, res) => {
  const flockData = req.body;
  const result = await flockService.createFlock(flockData);
  res.status(httpStatus.CREATED).json({
    success: true,
    message: "flock created successfully !!",
    data: result,
  });
});

const getAllFlock = catchAsync(async (req, res) => {
  const result = await flockService.getAllFlock(req.query);
  res.status(httpStatus.OK).json({
    success: true,
    message: "all flock retive successfully",
    data: result,
  });
});

const getFlockById= catchAsync(async(req,res)=>{
  const {id}= req.params
  const result = await flo
})

export const flockCrontroler = {
  createFlock,
  getAllFlock,
};
