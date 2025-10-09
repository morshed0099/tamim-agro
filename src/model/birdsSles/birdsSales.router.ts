import { Router } from "express";
import { birdsSalesControler } from "./birdsSales.controler";

const router = Router();

router.post("/create-birds-sales", birdsSalesControler.createBirdsSales);
router.get("/", birdsSalesControler.getAllBirdsSales);
router.get("/:id", birdsSalesControler.getAllBirdsSales);

export const birdsSalesRouter = router;
