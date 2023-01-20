import express, { Request, Response } from "express";
import Cors from "cors";
const app = express();
const port = 3009;
app.use(
  Cors({
    origin: "http://localhost:3000",
  })
);

app.get("/", (req: Request, res: Response) => res.send("it was get request"));
app.post("/p", (req: Request, res: Response) =>
  res.send({ data: "it was post request" })
);

app.listen(port);
