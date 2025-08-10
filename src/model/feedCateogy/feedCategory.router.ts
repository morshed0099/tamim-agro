import { Router } from "express";
import { feedCategoryControler } from "./feed.category.controler";

const router = Router();

router.post("/create-feedcategory", feedCategoryControler.createFeedCategory);
router.get("/", feedCategoryControler.getAllFeedCategory);

export const feedCategoryRouter = router;
