import catchAsync from "../../middileware/catchAsync";
import { birdsSalesService } from "./birdsSales.service";
import httpStatus from "http-status";

const createBirdsSales = catchAsync(async (req, res) => {
  const birdsSalesData = req.body;
  const result = await birdsSalesService.createBirdsSales(birdsSalesData);
  res.status(httpStatus.CREATED).json({
    success: true,
    message: "birdsSales Created Successfully!!",
    data: result,
  });
});

const getAllBirdsSales = catchAsync(async (req, res) => {
  const params = req.params;
  const result = await birdsSalesService.getAllBirdsSales(params);
  res.status(httpStatus.OK).json({
    success: true,
    message: "all birds sales retive successfully!!",
    data: result,
  });
});

const getSingleBirdsSales = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await birdsSalesService.singleBirdsSales(id);
  res.status(httpStatus.OK).json({
    success: true,
    message: "single sales birds retive successfully!!",
    data: result,
  });
});

export const birdsSalesControler = {
  createBirdsSales,
  getAllBirdsSales,
  getSingleBirdsSales,
};
