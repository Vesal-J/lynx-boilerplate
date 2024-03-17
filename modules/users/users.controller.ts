import { Request, Response } from "express";

export function Index(req: Request, res: Response) {
    res.send("users router")
}