import { Router } from "express";
import { farmControler } from "./farmar.controler";

const router = Router();

router.post("/create-farm", farmControler.createFarm);
router.get("/farmer", farmControler.getFarmer);
router.get("/", farmControler.getSepecificFarmer);
router.get("/:id", farmControler.getSingleFarmer);
router.put("/:id", farmControler.updateFarmer);
export const farmRouter = router;
