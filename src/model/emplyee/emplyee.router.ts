import { Router } from "express";
import { employeeControler } from "./emplyee.controler";

const router = Router();

router.post("/create-employee", employeeControler.createEmployee);
router.get("/", employeeControler.getEmployee);

export const employleeRouter = router;
