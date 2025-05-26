import { Router } from "express";
import { farmRouter } from "../model/customer/custeromer.router";

const router = Router();

const moduleRouter = [
  {
    path: "/customer",
    route: farmRouter,
  },
];

moduleRouter.forEach((ele) => router.use(ele.path, ele.route));
export default router 
