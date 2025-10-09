import express, { Application, Request, Response } from "express";
import cors from "cors";
import notFound from "./middileware/notFound";
import globalError from "./middileware/globalError";
import router from "./router";
import { cronJob, startCronJobs } from "./helper/cronJob";
const app: Application = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // Your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "tamim agro",
  });
});

app.use("/api/v1", router);
app.use(globalError);
app.use(notFound);

export default app;
