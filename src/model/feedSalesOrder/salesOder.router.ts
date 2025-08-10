import { Router } from "express";
import { feedSalesOrderControler } from "./salesOrder.controler";

const router = Router();

router.post("/create-salesorder", feedSalesOrderControler.createSalesOrder);

export const feedSalesOrderRouter = router;
