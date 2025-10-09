import { Router } from "express";
import { feedStockTransferControler } from "./feedStockTransfer.controler";
import { feedStocControler } from "../feedStock/feedStock.controler";

const router = Router();

router.post(
  "/create-feedstocktransfer",
  feedStockTransferControler.createFeedStockTransfer
);

router.get("/", feedStockTransferControler.getAllFeedTransferDepot);
router.get("/:id", feedStockTransferControler.getFeedTransferDepotToDepotById);
router.post("/posting", feedStockTransferControler.postingFeedStockTransfer);
router.put("/:id", feedStockTransferControler.editTransfer);

export const feedStockTransferRouter = router;
