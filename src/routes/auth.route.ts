import { Router } from "express";
import { loginUser, registerUser } from "../controllers/auth.controller";


const router = Router();

//register-user api 
router.post("/register-user", registerUser);

//login-user api
router.post("/login-user", loginUser);

export default router;
