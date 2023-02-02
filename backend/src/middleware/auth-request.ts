import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../utils/secret-key";

export function authRequest(req: Request, res: Response, next: NextFunction) {
  console.log("authRequest() called");
  const authHeader = req.headers.authorization;

  try {
    let token = authHeader?.split(" ")[1];
    if (token && token !== "") {
      const decodedToken = jwt.verify(token, SECRET_KEY);
      console.log("decodedToken", decodedToken);
      if (decodedToken !== null) {
        console.log("authorized");
      } else {
        console.log("not authorized");
      }
      next();
    } else {
      res.status(401).send({ error: "Invalid token", token: authHeader });
    }
  } catch (error: any) {
    res.status(401).send({ error: error?.message });
  }
}
