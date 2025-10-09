import catchAsync from "../../middileware/catchAsync";

import httpStatus from "http-status";
import { feedStockReportService } from "./feedStockReport.service";

const createStock = catchAsync(async (req, res) => {
  const repotData =req.body
  const result = await feedStockReportService.getDailyFeedStockReport(repotData)

  res.status(httpStatus.OK).json({
    success: true,
    message: "feed stock repot created successfully",
    data: result,
  });
});

export const feedStockRepotContorler = {
  createStock,
};
