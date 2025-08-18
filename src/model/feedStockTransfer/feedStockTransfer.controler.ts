import catchAsync from "../../middileware/catchAsync";
import { feedStockTransferService } from "./feedstockTransfer.service";
import httpStatus from "http-status";

const createFeedStockTransfer = catchAsync(async (req, res) => {
  const transferData = req.body;
  const result = await feedStockTransferService.createFeedStockTransfer(
    transferData
  );

  res.status(httpStatus.OK).json({
    success: true,
    message: "feed stock transfer successfully !!",
    data: result,
  });
});

const getAllFeedTransferDepot = catchAsync(async (req, res) => {
  const result = await feedStockTransferService.getAllDepotFeedTransfer(
    req.query
  );
  res.status(httpStatus.OK).json({
    success: true,
    message: "all feed stock transfer retive successfull!!",
    data: result,
  });
});

const getFeedTransferDepotToDepotById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await feedStockTransferService.getFeedTransferDepotToDepotById(
    id
  );

  res.status(httpStatus.OK).json({
    success: true,
    message: "stock transfer retive by id",
    data: result,
  });
});

const editTransfer = catchAsync(async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  const result = await feedStockTransferService.editTransfer(id, updateData);

  res.status(httpStatus.OK).json({
    success: true,
    message: "stock transfer edit successfully",
    data: result,
  });
});

export const feedStockTransferControler = {
  createFeedStockTransfer,
  getAllFeedTransferDepot,
  getFeedTransferDepotToDepotById,
  editTransfer,
};
