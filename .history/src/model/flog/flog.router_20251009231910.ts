import { Router } from "express";
import { flockCrontroler } from "./flog.controler";

const router = Router();
router.post("/create-flock", flockCrontroler.createFlock);
router

export const flockRouter = router;
