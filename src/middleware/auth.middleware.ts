//auth middleware for authenticating token for specific user

import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";

interface CustomJwtPayload extends JwtPayload {
  userId: string;
}

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized! access denied"});
  }

  jwt.verify(token, JWT_SECRET!, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    const customUser = user as CustomJwtPayload;
    req.body.userId = customUser.userId;

    next();
  });
};

export default authMiddleware;
