import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export async function authRequest(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("authRequest() called");
  const authHeader = req.headers.authorization;

  try {
    let token = authHeader?.split(" ")[1];
    if (!token) {
      res.status(401).send({ error: "Invalid token", token: authHeader });
      return;
    }

    const decodedToken = jwt.verify(token, process.env.SECRET_KEY!);
    console.log("decodedToken", decodedToken);

    if (!decodedToken) {
      res.status(401).send({ error: "Invalid token", token: authHeader });
      return;
    }

    console.log("authorized");
    req.body.decodedToken = decodedToken;
    next();
  } catch (error: any) {
    res.status(401).send({ error: error?.message });
    return;
  }
}
