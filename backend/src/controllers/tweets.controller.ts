import { Router } from "express";
import { createTweet, getAllTweets } from "./tweets.service";

const tweetRouter = Router();

tweetRouter.get("/list", getAllTweets);
tweetRouter.post("/create", createTweet);

export default tweetRouter;
