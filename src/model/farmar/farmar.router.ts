import { Router } from "express";
import { farmControler } from "./farmar.controler";

const router = Router();

router.post("/create-farm", farmControler.createFarm);
router.get("/farmer", farmControler.getFarmer);
export const farmRouter = router;
