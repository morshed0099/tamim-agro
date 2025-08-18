import { Router } from "express";
import { feedSalesOrderControler } from "./salesOrder.controler";

const router = Router();

router.post("/create-salesorder", feedSalesOrderControler.createSalesOrder);
router.get("/", feedSalesOrderControler.getAllSalesOrder);
router.get("/:id", feedSalesOrderControler.getSingleSalesOrder);
router.put("/:id", feedSalesOrderControler.updateSalesOrder);
router.post("/:id", feedSalesOrderControler.salesOrderPosting);
router.delete("/:id", feedSalesOrderControler.deleteSalesOder);

export const feedSalesOrderRouter = router;
