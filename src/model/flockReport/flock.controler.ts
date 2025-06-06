import catchAsync from "../../middileware/catchAsync";
import { flockReportService } from "./flock.service";
import httpStatus from "http-status";

const createFlockReport = catchAsync(async (req, res) => {
  const flockReportData = req.body;
  const result = await flockReportService.createFlockReport(flockReportData);
  res.status(httpStatus.CREATED).json({
    success: true,
    message: "flock report created successfully !!",
    data: result,
  });
});

export const flockReportControler = {
  createFlockReport,
};
