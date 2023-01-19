import express, { Request, Response } from "express";
const app = express();
const port = 3009;

app.get("/", (req: Request, res: Response) => res.send("Heljskhfdklo world!"));

app.listen(port);
