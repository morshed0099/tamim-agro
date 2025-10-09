import { Router } from "express";
import { feedAddStockControler } from "./addFeedStock.controler";

const router = Router();
router.post("/create-stock", feedAddStockControler.createAddStock);
router.get("/", feedAddStockControler.getAllFeedAddStock);
router.get("/:id", feedAddStockControler.getAddStockById);
router.put("/:id", feedAddStockControler.updateAddStock);
router.delete("/:id", feedAddStockControler.delteAddStock);
router.post("/posting", feedAddStockControler.postingAddStock);
export const feedAddStockRouter = router;
