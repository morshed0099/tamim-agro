import { Router } from "express";
import { farmControler } from "./customer.controler";

const router = Router();

router.post("/create-farm", farmControler.createFarm);
router.get("/farmer", farmControler.getFarmer);
export const farmRouter = router;
