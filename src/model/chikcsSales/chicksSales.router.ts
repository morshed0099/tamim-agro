import { Router } from "express";
import { chicksSellCrontroler } from "./chicksSales.controler";

const router = Router();

router.post("/create-checkssell", chicksSellCrontroler.createChicksSell);

export const chicksSellRouter = router;
