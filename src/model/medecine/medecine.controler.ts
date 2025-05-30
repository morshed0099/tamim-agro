import catchAsync from "../../middileware/catchAsync";
import { medicineSercive } from "./medicine.service";
import httpStatus from "http-status";

const createMedicineGeneric = catchAsync(async (req, res) => {
  const medicineCategoryData = req.body;
  const result = await medicineSercive.createMedicineGeniric(
    medicineCategoryData
  );
  res.status(httpStatus.CREATED).json({
    message: "medicine geniric name created successfully !!",
    success: true,
    data: result,
  });
});

const findMedicineGeneric = catchAsync(async (req, res) => {
  const result = await medicineSercive.findMedicineGeniric();
  res.status(httpStatus.OK).json({
    success: true,
    message: "medicine generic name retive successfully !!",
    data: result,
  });
});

const createMedicineName = catchAsync(async (req, res) => {
  const medicineNameData = req.body;
  const result = await medicineSercive.createMedicineName(medicineNameData);
  res.status(httpStatus.CREATED).json({
    message: "medicine name created successfully !!",
    success: true,
    data: result,
  });
});

const medicinePurchess = catchAsync(async (req, res) => {
  const medicinePurchessData = req.body;
  const result = await medicineSercive.medicinePurchess(medicinePurchessData);
  res.status(httpStatus.CREATED).json({
    success: true,
    message: "medicine purchess successfull !!",
    data: result,
  });
});
const findPurchess = catchAsync(async (req, res) => {
  const seachData = req.body;
  const result = await medicineSercive.findPurches(seachData);
  res.status(httpStatus.CREATED).json({
    success: true,
    message: "medicine purchess retive successfull !!",
    data: result,
  });
});

export const medicineControler = {
  createMedicineGeneric,
  findMedicineGeneric,
  createMedicineName,
  medicinePurchess,
  findPurchess,
};
