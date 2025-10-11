import catchAsync from "../../middileware/catchAsync";
import { feedRetunService } from "./feedSalesReturn.service";
import httpStatus from "http-status";

const createFeedRetun = catchAsync(async (req, res) => {
  const retunData = req.body;
  const result = await feedRetunService.createFeedRetun(retunData);
  res.status(httpStatus.CREATED).json({
    success: true,
    message: "feed retun created successfully !!",
    data: result,
  });
});

const getAllFeedReturn = catchAsync(async (req, res) => {
  const params = req.query;
  const result = await feedRetunService.getAllRetunFeed(params);
  res.status(httpStatus.OK).json({
    success: true,
    message: "all feed retun retive successfully !!",
    data: result,
  });
});

const getFeedRetrunById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await feedRetunService.getFeedReturnById(id);
  res.status(httpStatus.OK).json({
    success: true,
    message: "single feed return retive successfully",
    data: result,
  });
});

const editFeedReturn = catchAsync(async (req, res) => {
  const updateData = req.body;
  const result = await feedRetunService.editFeedRetun(updateData);
  res.status(httpStatus.OK).json({
    success: true,
    message: "feed return updated successfully",
    data: result,
  });
});

const postingFeedReturn = catchAsync(async (req, res) => {
  const postingData = req.body;
  const result = await feedRetunService.postingFeedReturn(postingData);
  res.status(httpStatus.OK).json({
    success: true,
    message: "feed return posting successfully",
    data: result,
  });
});

const getAllFlo

export const feedRetunControler = {
  createFeedRetun,
  getAllFeedReturn,
  getFeedRetrunById,
  editFeedReturn,
  postingFeedReturn,
};
