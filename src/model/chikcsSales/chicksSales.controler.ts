import catchAsync from "../../middileware/catchAsync";
import httpStatus from "http-status";

const createChicksSell = catchAsync(async (req, res) => {
  const sellData = req.body;

  const result = await chicksSellService.createChiksSell(sellData);

  res.status(httpStatus.OK).json({
    success: true,
    message: "chicks sell created successfully !!",
    data: result,
  });
});

export const chicksSellCrontroler = {
  createChicksSell,
};
