import catchAsync from "../../middileware/catchAsync";
import { feedSalesOrderService } from "./salesOrder.service";
import httpStatus from "http-status";

const createSalesOrder = catchAsync(async (req, res) => {
  const salesData = req.body;
  const result = await feedSalesOrderService.createSalesOrder(salesData);
  res.status(httpStatus.OK).json({
    success: true,
    message: "sales order created successfull !!",
    data: result,
  });
});

const salesOrderPosting = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await feedSalesOrderService.salesOrderPosting(id);

  res.status(httpStatus.OK).json({
    success: true,
    message: "sales order posting",
    data: result,
  });
});

const deleteSalesOder = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await feedSalesOrderService.deleteSaleOder(id);
  res.status(httpStatus.OK).json({
    success: true,
    message: "sales order deleted successfully !!",
    data: result,
  });
});

const updateSalesOrder = catchAsync(async (req, res) => {
  console.log('hiii')
  const { id } = req.params;
  const updateData = req.body;
  const result = await feedSalesOrderService.updateSalesOrder(id, updateData);
  res.status(httpStatus.OK).json({
    success: true,
    message: "sales order updated successfully !!",
    data: result,
  });
});

const getAllSalesOrder = catchAsync(async (req, res) => {
  const result = await feedSalesOrderService.getAllSalesOrder(req.query);
  res.status(httpStatus.OK).json({
    success: true,
    message: "all sales order retive successfully !!",
    data: result,
  });
});

const getSingleSalesOrder = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await feedSalesOrderService.getSingleSalesOrder(id);
  res.status(httpStatus.OK).json({
    success: true,
    message: "single sales order retive successfully !!",
    data: result,
  });
});

export const feedSalesOrderControler = {
  createSalesOrder,
  deleteSalesOder,
  salesOrderPosting,
  updateSalesOrder,
  getAllSalesOrder,
  getSingleSalesOrder,
};
