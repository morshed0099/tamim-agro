import { Router } from "express";
import { brachControler } from "./brance.controler";

const router = Router();
router.get("/", brachControler.getAllBranch);
router.post("/create-brance", brachControler.createBranch);
router.get("/:id", brachControler.getSingleBranch);
router.put("/:id", brachControler.updateBranch);

export const brancehRouter = router;
