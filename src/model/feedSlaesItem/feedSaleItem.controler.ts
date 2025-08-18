import catchAsync from "../../middileware/catchAsync";
import { feedsalesItemService } from "./feedSalesItem.service";
import httpStatus from "http-status";

const deleteFeedSalesItem = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await feedsalesItemService.deletFeedSalItem(id);
  res.status(httpStatus.OK).json({
    success: true,
    message: "feed Item Delete Successfully !!",
    data: result,
  });
});

const createFeedSaleItem = catchAsync(async (req, res) => {
  const createData = req.body;
  const result = await feedsalesItemService.createFeedSaleItem(createData);

  res.status(httpStatus.OK).json({
    success: true,
    message: "feed sales item created successfully !!",
    data: result,
  });
});

const updateFeedSaleItem = catchAsync(async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  const result = await feedsalesItemService.feedSalesItemUpdate(id, updateData);
  res.status(httpStatus.OK).json({
    success: true,
    message: "feed sales item updated successfully!!",
    data: result,
  });
});

export const feedSaleItemControler = {
  deleteFeedSalesItem,
  createFeedSaleItem,
  updateFeedSaleItem,
};
