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

const getFlockReport = catchAsync(async (req, res) => {
  const result = await flockReportService.getAllFclockReport(req.query);
  res.status(httpStatus.OK).json({
    success: true,
    message: "flock report retive successfully !!",
    data: result,
  });
});

export const flockReportControler = {
  createFlockReport,
  getFlockReport,
};
