import { Router } from "express";
import { farmRouter } from "../model/customer/custeromer.router";
import { brancehRouter } from "../model/brances/branc.router";
import { medicineRouter } from "../model/medecine/medicine.router";

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
];

moduleRouter.forEach((ele) => router.use(ele.path, ele.route));
export default router;
