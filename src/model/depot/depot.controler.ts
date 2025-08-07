import catchAsync from "../../middileware/catchAsync";
import { depotService } from "./depot.service";
import httpStatus from "http-status";

const createDepot = catchAsync(async (req, res) => {
  const depotData = req.body;
  const result = await depotService.createDepot(depotData);

  res.status(httpStatus.OK).json({
    success: true,
    message: "depot created successfull !!",
    data: result,
  });
});

const getAllDepot = catchAsync(async (req, res) => {
  const result = await depotService.getAlldepot(req.query);
  res.status(httpStatus.OK).json({
    success: true,
    message: "all depot retive successfully !!",
    data: result,
  });
});

export const depotContoler = {
  createDepot,
  getAllDepot,
};
