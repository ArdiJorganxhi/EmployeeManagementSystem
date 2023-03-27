import { Request, Response } from "express";
import bcrypt from 'bcryptjs'
import AuthService from "../services/auth.service";
import { Employee } from '../models/employee.model'
import EmployeeRegister from "../models/requests/employee.register";
import EmployeeLogin from "../models/requests/employee.login";



class AuthController {

    private authService = new AuthService();

    public async register(req: Request, res: Response): Promise<Response> {
        let registerRequest: EmployeeRegister = req.body


        const user = await this.authService.register(registerRequest);

        if (user) {
            return res.status(201).send({ message: "Employee is created!" })
        }

        return res.status(500).send({ message: "Something wrong happened!" })
    }

    public async login(req: Request, res: Response): Promise<Response> {

        let loginRequest: EmployeeLogin = req.body;

        const userAuth = await this.authService.login(loginRequest);

        if (userAuth) {
            return res.status(200).send(userAuth);
        }

        return res.status(500).send({ message: "Something went wrong!" })
    }
}

export default AuthController;