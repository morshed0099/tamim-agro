import { Router } from "express";
import { feedRetunControler } from "./feedSalesReturn.controler";

const router = Router();

router.post("/create-return", feedRetunControler.createFeedRetun);
router.post("/posting", feedRetunControler.postingFeedReturn);
router.get("/", feedRetunControler.getAllFeedReturn);
router.get("/:id", feedRetunControler.getFeedRetrunById);
router.put("/:id", feedRetunControler.editFeedReturn);

export const feedReturnRouter = router;
