import express, { Application, Request, Response } from "express";
import cors from "cors";
import notFound from "./middileware/notFound";
import globalError from "./middileware/globalError";
import router from "./router";
const app: Application = express();
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "tamim agro",
  });
});

app.use("/api/v1", router);
app.use(globalError);
app.use(notFound);

export default app;
