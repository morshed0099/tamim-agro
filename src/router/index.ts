import { Router } from "express";
import { brancehRouter } from "../model/brances/branc.router";
import { medicineRouter } from "../model/medecine/medicine.router";
import { employleeRouter } from "../model/emplyee/emplyee.router";
import { flockRouter } from "../model/flog/flog.router";
import { flockReportRouter } from "../model/flockReport/flock.router";
import { farmRouter } from "../model/farmar/farmar.router";
import { branchAssinEmployeeRouter } from "../model/branceAssinEmployee/branceAssinEmployee.service";
import path from "path";
import { depotRouter } from "../model/depot/depot.router";

const router = Router();

const moduleRouter = [
  {
    path: "/customer",
    route: farmRouter,
  },
  {
    path: "/branch",
    route: brancehRouter,
  },
  {
    path: "/medicine",
    route: medicineRouter,
  },
  {
    path: "/employee",
    route: employleeRouter,
  },
  {
    path: "/flock",
    route: flockRouter,
  },
  {
    path: "/flock-report",
    route: flockReportRouter,
  },
  {
    path: "/bracnh-employee",
    route: branchAssinEmployeeRouter,
  },
  {
    path: "/depot",
    route: depotRouter,
  },
];

moduleRouter.forEach((ele) => router.use(ele.path, ele.route));
export default router;
