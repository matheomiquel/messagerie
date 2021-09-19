import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send("A token is required for authentication");
  }
  return next();
};

export { verifyToken };
