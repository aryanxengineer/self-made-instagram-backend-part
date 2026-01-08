import { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } from "@/config/env.js";
import jwt from "jsonwebtoken";

export class TokenService {
  generateAccessToken(payload: { userId: string }) {
    return jwt.sign(payload, JWT_ACCESS_SECRET as string, {
      expiresIn: "1d"
    });
  }

  generateRefreshToken(payload: {
    userId: string;
    tokenVersion: number;
  }) {
    return jwt.sign(payload, JWT_REFRESH_SECRET as string, {
      expiresIn: "30d"
    });
  }
}
