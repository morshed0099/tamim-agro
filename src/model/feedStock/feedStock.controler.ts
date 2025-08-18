import prismaClient from "../../helper/prismaClient";
import catchAsync from "../../middileware/catchAsync";
import { feedStockService } from "./feedStock.service";
import httpStatus from "http-status";

const createFeedStock = catchAsync(async (req, res) => {
  const stockData = req.body;
  const result = await feedStockService.createFeedStock(stockData);
  res.status(httpStatus.OK).json({
    success: true,
    message: "feed stock created successfully !!",
    data: result,
  });
});

const deleteFeedStock = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await feedStockService.deleteFeedStock(id);
  res.status(httpStatus.OK).json({
    success: true,
    message: "feed Stock delete successfully !!",
    data: result,
  });
});

const getFeedStock = catchAsync(async (req, res) => {
  const result = await feedStockService.getFeedStock(req.query);

  res.status(httpStatus.OK).json({
    success: true,
    message: "feed stock name fetch successfully !!",
    data: result,
  });
});

export const feedStocControler = {
  createFeedStock,
  deleteFeedStock,
  getFeedStock,
};
