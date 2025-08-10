import catchAsync from "../../middileware/catchAsync";
import { feedCategoryService } from "./feedCategory.service";
import httpStatus from "http-status";

const createFeedCategory = catchAsync(async (req, res) => {
  const result = await feedCategoryService.createFeedCategory(req.body);
  res.status(httpStatus.OK).json({
    success: true,
    message: "feed category created successfully !!",
    data: result,
  });
});

const getAllFeedCategory = catchAsync(async (req, res) => {
  const result = await feedCategoryService.getAllFeedCategoy(req.query);
  res.status(httpStatus.OK).json({
    success: true,
    message: "all feedcategory retive successfully !!",
    data: result,
  });
});

export const feedCategoryControler = {
  createFeedCategory,
  getAllFeedCategory,
};
