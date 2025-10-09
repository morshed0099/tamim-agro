import { Router } from "express";
import { feedStockRepotContorler } from "./feedStockRepot.controler";

const router = Router();

router.post("/create-stock-report", feedStockRepotContorler.createStock);

export const feedStockRepotRouter = router;
