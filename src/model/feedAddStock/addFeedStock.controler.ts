import prismaClient from "../../helper/prismaClient";
import catchAsync from "../../middileware/catchAsync";
import { feedAddStockService } from "./feedAddStock.service";
import httpStatus from "http-status";

const createAddStock = catchAsync(async (req, res) => {
  const stockData = req.body;
  const result = await feedAddStockService.createStock(stockData);
  res.status(httpStatus.CREATED).json({
    success: true,
    message: "add stock created successfully !!",
    data: result,
  });
});

const getAllFeedAddStock = catchAsync(async (req, res) => {
  const params = req.query;
  const result = await feedAddStockService.getAllAddStockOrder(params);
  res.status(httpStatus.OK).json({
    success: true,
    message: "all feed stock order retive successfully",
    data: result,
  });
});

const getAddStockById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await feedAddStockService.getAddStockById(id);
  res.status(httpStatus.OK).json({
    success: true,
    message: "retive addStock successfully!!",
    data: result,
  });
});

const updateAddStock = catchAsync(async (req, res) => {
  const updateData = req.body;
  const result = await feedAddStockService.updateAddStock(updateData);
  res.status(httpStatus.OK).json({
    success: true,
    message: "add stock updated successfull!!",
    data: result,
  });
});

const delteAddStock = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await feedAddStockService.delteAddStock(id);
  res.status(httpStatus.OK).json({
    success: true,
    message: "delte successfullyy!!",
    data: result,
  });
});

const postingAddStock = catchAsync(async (req, res) => {
  const postingData = req.body;
  const result = await feedAddStockService.postingAddStock(postingData);
  res.status(httpStatus.OK).json({
    success: true,
    message: "add stock posting successfull ",
    data: result,
  });
});

export const feedAddStockControler = {
  createAddStock,
  getAllFeedAddStock,
  getAddStockById,
  updateAddStock,
  delteAddStock,
  postingAddStock,
};
