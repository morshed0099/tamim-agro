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
router.put("/:id", feedStockTransferControler.editTransferg);

export const feedStockTransferRouter = router;
