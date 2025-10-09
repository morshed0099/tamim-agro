import { Router } from "express";
import { brancehRouter } from "../model/brances/branc.router";
import { medicineRouter } from "../model/medecine/medicine.router";
import { employleeRouter } from "../model/emplyee/emplyee.router";
import { flockRouter } from "../model/flog/flog.router";
import { flockReportRouter } from "../model/flockReport/flock.router";
import { farmRouter } from "../model/farmar/farmar.router";
import { branchAssinEmployeeRouter } from "../model/branceAssinEmployee/branceAssinEmployee.service";
import { depotRouter } from "../model/depot/depot.router";
import { feedCategoryRouter } from "../model/feedCateogy/feedCategory.router";
import { feedStockTransferRouter } from "../model/feedStockTransfer/feedStockTransfer.router";
import { feedSalesOrderRouter } from "../model/feedSalesOrder/salesOder.router";
import { chicksSellRouter } from "../model/chikcsSales/chicksSales.router";
import { feedSaleItemRouter } from "../model/feedSlaesItem/feedSalesItem.router";
import { feedReturnRouter } from "../model/feedSalesRetun/feedReturn.router";
import { birdsSalesRouter } from "../model/birdsSles/birdsSales.router";
import { feedStockRepotRouter } from "../model/feedStockRepot/feedStockReport.router";
import { feedAddStockRouter } from "../model/feedAddStock/feedAddStock.router";
import { feedStockRouter } from "../model/feedStock/feedStock.router";

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
  {
    path: "/feedcategory",
    route: feedCategoryRouter,
  },
  {
    path: "/feedstock",
    route: feedStockRouter,
  },
  {
    path: "/feedstocktransfer",
    route: feedStockTransferRouter,
  },
  {
    path: "/feedsales",
    route: feedSalesOrderRouter,
  },
  {
    path: "/chicks",
    route: chicksSellRouter,
  },
  {
    path: "/feed-sales-item",
    route: feedSaleItemRouter,
  },
  {
    path: "/feed-return",
    route: feedReturnRouter,
  },
  {
    path: "/birds",
    route: birdsSalesRouter,
  },
  {
    path: "/feed-stock-repot",
    route: feedStockRepotRouter,
  },
  {
    path: "/add-stock",
    route: feedAddStockRouter,
  },
];

moduleRouter.forEach((ele) => router.use(ele.path, ele.route));
export default router;
