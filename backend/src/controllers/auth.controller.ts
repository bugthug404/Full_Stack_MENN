// routes/tweets.ts

import { Router } from "express";
import { createTweet, getAllTweets } from "./tweets.service";
import { signIn, signUp } from "./auth.service";

const authRouter = Router();

authRouter.post("/signup", signUp);
authRouter.post("/login", signIn);

export default authRouter;
