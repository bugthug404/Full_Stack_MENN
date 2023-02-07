import express, { Request, Response } from "express";
import Cors from "cors";
import { signIn, signUp } from "./auth";
import mongoose from "mongoose";
import { getAllTweets } from "./utils/tweet";
import { authRequest } from "./middleware/auth-request";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(
  Cors({
    // allow to server to accept request from different origin
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
// add json middleware
app.use(express.json());

app.get("/", (req: Request, res: Response) =>
  res.status(200).send({ data: `got post request as ${new Date().getTime()}` })
);

app.post("/signup", signUp);
app.post("/login", signIn);
app.get("/tweets", getAllTweets);

mongoose
  .connect(process.env.MONGODB!)
  .then(() => {
    console.log("connected to db");
    app.listen(port);
  })
  .catch((err) => {
    console.log(err);
  });
