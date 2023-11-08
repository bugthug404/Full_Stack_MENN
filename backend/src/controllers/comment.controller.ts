import { Router } from "express";
import { createTweet, getAllTweets } from "./tweets.service";
import { createComment, getAllComments } from "./comment.service";

const commentsRouter = Router();

commentsRouter.get("/list", getAllComments);
commentsRouter.post("/create", createComment);

export default commentsRouter;
