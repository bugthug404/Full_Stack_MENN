import { Request, Response } from "express";
import { authRequest } from "../middleware/auth-request";
import { Tweet } from "../model/tweet";

export async function getAllTweets(req: Request, res: Response) {
  // Get all tweets from the database
  try {
    const data = await Tweet.find({}).populate("author", "username");

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: error });
  }
}

export async function createTweet(req: Request, res: Response) {
  const { tweet } = req.body;
  const { userId } = req.body;
  try {
    const data = await Tweet.create({ tweet, userId });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: error });
  }
}
