import { Router } from "express";
import { feedSaleItemControler } from "./feedSaleItem.controler";

const router = Router();

router.post("/create", feedSaleItemControler.createFeedSaleItem);
router.put("/:id", feedSaleItemControler.updateFeedSaleItem);
router.delete("/:id", feedSaleItemControler.deleteFeedSalesItem);

export const feedSaleItemRouter = router;
