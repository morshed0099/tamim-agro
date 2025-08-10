import { Router } from "express";
import { feedStockTransferControler } from "./feedStockTransfer.controler";

const router = Router();

router.post(
  "/create-feedstocktransfer",
  feedStockTransferControler.createFeedStockTransfer
);

export const feedStockTransferRouter = router;
