import { Router } from "express";
import { depotContoler } from "./depot.controler";

const router = Router();

router.post("/create-depot", depotContoler.createDepot);
router.get("/", depotContoler.getAllDepot);

export const depotRouter = router;
