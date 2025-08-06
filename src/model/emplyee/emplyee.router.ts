import { Router } from "express";
import { employeeControler } from "./emplyee.controler";

const router = Router();

router.post("/create-employee", employeeControler.createEmployee);
router.get("/", employeeControler.getEmployee);
router.post("/empid", employeeControler.getEmployeeWithEmpid);
router.get("/:id", employeeControler.getSingleEmployee);
router.put("/:id", employeeControler.updateEmployee);

export const employleeRouter = router;
