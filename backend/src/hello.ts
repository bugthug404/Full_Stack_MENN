import express, { Request, Response } from "express";
import Cors from "cors";
import { signIn, signUp } from "./auth";
import mongoose from "mongoose";

const app = express();
const port = 3009;
app.use(
  Cors({
    origin: "http://localhost:3000",
  })
);
// add json middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.post("/", (req: Request, res: Response) =>
  res.send({ data: `got post request as ${new Date().getTime()}` })
);

app.post("/signup", signUp);
app.post("/login", signIn);

mongoose
  .connect("mongodb+srv://admin:admin@learnapi.bz9ulhi.mongodb.net/test")
  .then(() => {
    console.log("connected to db");
    app.listen(port);
  })
  .catch((err) => {
    console.log(err);
  });
