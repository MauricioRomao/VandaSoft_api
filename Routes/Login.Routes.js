import express from "express";
import { LoginController } from "../Controllers/Login.Controller.js";
import { AuthMiddleware } from "../Middlewares/Auth.Middleware.js";

const router = express.Router();    

router.post("/login", LoginController.login);


export default router;
 