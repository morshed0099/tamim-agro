import { Router } from "express";
import { flockReportControler } from "./flock.controler";

const router = Router();

router.post("/create-flock-report", flockReportControler.createFlockReport);

export const flockReportRouter = router;
