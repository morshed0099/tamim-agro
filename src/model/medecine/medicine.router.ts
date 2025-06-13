import { Router } from "express";
import { medicineControler } from "./medecine.controler";

const router = Router();
router.post(
  "/create-medicine-generic",
  medicineControler.createMedicineGeneric
);

router.get("/medicine-generic", medicineControler.findMedicineGeneric);

router.post("/create-medicine-name", medicineControler.createMedicineName);

router.post("/create-medicine-purchess", medicineControler.medicinePurchess);
router.get("/", medicineControler.findPurchess);
router.post("/add-stock", medicineControler.addMedicineStock);

export const medicineRouter = router;
