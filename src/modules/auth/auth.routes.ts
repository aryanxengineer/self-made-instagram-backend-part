import { Router } from "express";
import { AuthController } from "./auth.controller.js";
import { AuthService } from "./auth.service.js";

const router = Router();

// Passing Dependency Injection to AuthController because according to SOLID Principles Top Level module should not be dependent on Low Level module.
const authController = new AuthController(new AuthService());

// Here I am not using explicit binding because I am using arrow functions for controllers and as we know that arrow function does not have 
router.post("/signup", authController.signUp);
router.post("/login", authController.signIn);
router.post("/logout", authController.signOut);

export default router;
