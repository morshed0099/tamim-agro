import { Router } from "express";
import { feedStocControler } from "./feedStock.controler";

const router = Router();

router.post("/create-feedstock", feedStocControler.createFeedStock);
router.get("/", feedStocControler.getFeedStock);
router.delete("/:id", feedStocControler.deleteFeedStock);

export const feedStockRouter = router;
