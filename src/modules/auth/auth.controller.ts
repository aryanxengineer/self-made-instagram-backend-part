import type { Request, Response, NextFunction } from "express";
import { AuthService } from "./auth.service.js";

export class AuthController {
  constructor(private readonly authService: AuthService) {}

  public signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.authService.signUp(req.body);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  };

  public signIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.authService.signIn(req.body);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  public signOut = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.authService.signOut(req);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
}
