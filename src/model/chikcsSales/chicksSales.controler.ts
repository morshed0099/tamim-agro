import catchAsync from "../../middileware/catchAsync";
import httpStatus from "http-status";
import { chicksSellService } from "./chickesSales.service";

const createChicksSell = catchAsync(async (req, res) => {
  const sellData = req.body;

  const result = await chicksSellService.createChiksSell(sellData);

  res.status(httpStatus.OK).json({
    success: true,
    message: "chicks sell created successfully !!",
    data: result,
  });
});

const getAllChicksSell = catchAsync(async (req, res) => {
  const params = req.params;
  const result = await chicksSellService.getAllchicksSell(params);
  res.status(httpStatus.OK).json({
    success: true,
    message: "chicks sell retive successfully",
    data: result,
  });
});

const getSingleChicksSell = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await chicksSellService.getSingleChicksSell(id);
  res.status(httpStatus.OK).json({
    success: true,
    message: "single chicks sell retive successfully !!",
    data: result,
  });
});

export const chicksSellCrontroler = {
  createChicksSell,
  getAllChicksSell,
  getSingleChicksSell,
};
