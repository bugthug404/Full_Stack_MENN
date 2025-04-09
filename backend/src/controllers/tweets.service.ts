import { Request, Response } from "express";
import { Types } from "mongoose";
import { authRequest } from "../middleware/auth-request";
import { Tweet } from "../model/tweet";
import mongoose from "mongoose";

export async function getAllTweets(req: Request, res: Response) {
  //  validateRequest(req, res);
  authRequest(req, res, () => {
    // limit to last 10 tweets
    Tweet.find(
      { userId: new Types.ObjectId(req.body.decodedToken.userId) },
      null,
      {
        limit: 10,
        sort: { createdAt: -1 },
      }
    )
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send({ error: err });
      });
  });
}

export async function createTweet(req: Request, res: Response) {
  const { tweet } = req.body;
  const userid = req.body.decodedToken.userId;
  if (!tweet) {
    res.status(400).send({ error: "Tweet is required" });
    return;
  }
  try {
    const data = await Tweet.create({
      ...tweet,
      userId: new Types.ObjectId(userid),
    });
    res.status(200).send({ data: data, message: "Tweet created successfully" });
    return;
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error });
  }
}
