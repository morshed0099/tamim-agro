import { Router } from "express";
import { farmRouter } from "../model/customer/custeromer.router";
import { brancehRouter } from "../model/brances/branc.router";

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
];

moduleRouter.forEach((ele) => router.use(ele.path, ele.route));
export default router;
