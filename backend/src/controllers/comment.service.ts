import { Request, Response } from "express";
import { Types } from "mongoose";
import { authRequest } from "../middleware/auth-request";
import { Tweet } from "../model/tweet";
import mongoose from "mongoose";
import { CommentSchema } from "../model/comment-schema";

export async function getAllComments(req: Request, res: Response) {
  //  validateRequest(req, res);
  authRequest(req, res, () => {
    // limit to last 10 tweets
    CommentSchema.find(
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

export async function createComment(req: Request, res: Response) {
  const { comment } = req.body;
  const userid = req.body.decodedToken.userId;
  console.log("decoded token -- ", req.body.decodedToken);
  if (!comment) {
    res
      .status(400)
      .send({ error: "Comment object is missing! please check your request" });
    return;
  }
  try {
    const data = await CommentSchema.create({
      ...comment,
      userId: new Types.ObjectId(userid),
    });
    res.status(200).send({ data: data, message: "Tweet created successfully" });
    return;
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error });
  }
}
