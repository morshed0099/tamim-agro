import { Router } from "express";
import { flockCrontroler } from "./flog.controler";

const router = Router();
router.post("/create-flock", flockCrontroler.createFlock);
router.get("/", flockCrontroler.getAllFlock);
router.get("/:id", flockCrontroler.getFlockById);
 
export const flockRouter = router;
