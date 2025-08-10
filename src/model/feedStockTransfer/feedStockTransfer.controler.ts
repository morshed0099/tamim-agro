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

export const feedStockTransferControler = {
  createFeedStockTransfer,
};
