import { Router } from "express";
import { employeeControler } from "./emplyee.controler";

const router = Router();

router.post("/create-employee", employeeControler.createEmployee);
router.get("/", employeeControler.getEmployee);
router.get("/:id", employeeControler.getSingleEmployee);

export const employleeRouter = router;
