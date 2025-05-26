import { Router } from "express";
import { farmControler } from "./customer.controler";

const router = Router();

router.post("/create-farm", farmControler.createFarm);
export const farmRouter= router
