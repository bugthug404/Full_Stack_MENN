import { Request, Response } from "express";
import { User } from "./model/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

var hash = require("pbkdf2-password")();
var path = require("path");
var session = require("express-session");
const SECRET_KEY = "123456789";

export async function signUp(req: Request, res: Response) {
  const { name, email, password } = req.body;

  const exists = await User.findOne({ email });

  if (exists) {
    return res.status(400).send({ error: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  User.create({
    name,
    email,
    password: hashedPassword,
  })
    .then((result) => {
      const token = jwt.sign(
        {
          email: result.email,
          userId: result._id.toString(),
        },
        SECRET_KEY
      );
      res.status(201).send({ user: result, token });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ error: err.message });
    });
}

export async function signIn(req: Request, res: Response) {
  const { email, password } = req.body;

  User.findOne({ email: email })
    .then((exists) => {
      if (!exists) {
        return res.status(400).send({ error: exists });
      }

      bcrypt
        .compare(password, exists.password)
        .then((match) => {
          if (!match) {
            return res.status(400).send({ error: "Invalid password" });
          }

          const token = jwt.sign(
            {
              email: exists.email,
              userId: exists._id.toString(),
            },
            SECRET_KEY
          );

          res.status(200).send({ user: exists, token });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send({ error: "Something went wrong" });
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ error: "Something went wrong" });
    });
}
