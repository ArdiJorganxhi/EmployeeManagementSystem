import express from "express";
import { container } from "tsyringe";
import AuthController from "../controllers/auth.controller";


const router = express.Router();
const authController = container.resolve(AuthController);

router.post('/register', authController.register.bind(authController));
router.post('/login', authController.login.bind(authController));


export default router;

