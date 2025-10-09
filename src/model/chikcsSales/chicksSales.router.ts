import { Router } from "express";
import { chicksSellCrontroler } from "./chicksSales.controler";

const router = Router();

router.post("/create-sell", chicksSellCrontroler.createChicksSell);
router.get("/", chicksSellCrontroler.getAllChicksSell);
router.get("/:id", chicksSellCrontroler.getSingleChicksSell);

export const chicksSellRouter = router;
