import { Router } from "express";
import { brachControler } from "./brance.controler";

const router = Router();
router.post("/create-brance", brachControler.createBranch);

export const brancehRouter = router;
