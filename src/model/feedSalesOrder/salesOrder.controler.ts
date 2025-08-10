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

export const feedSalesOrderControler = {
  createSalesOrder,
};
