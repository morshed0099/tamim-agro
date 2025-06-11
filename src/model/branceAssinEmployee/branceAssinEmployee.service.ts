import { Router } from "express";
import { brachAssinEmployeeControler } from "./branceAssinEployee.controler";

const router = Router();
router.post(
  "/create-employee-branch",
  brachAssinEmployeeControler.createBranchAssinEmployee
);

export const branchAssinEmployeeRouter = router;
