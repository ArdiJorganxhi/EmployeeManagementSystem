require('dotenv').config();
import { Employee } from "../models/entities/employee.model";
import bcrypt from 'bcryptjs'
import EmployeeRegister from "../models/requests/employee.register";
import jwt from 'jsonwebtoken'
import EmployeeLogin from "../models/requests/employee.login";
import UserUtils from "../utils/user.utils";
import { raw } from "express";

class AuthService {


    public async register(registerRequest: EmployeeRegister): Promise<Employee> {

        let { name, surname, email, password } = registerRequest;

        const checkUser = await Employee.findOne({ where: { email } });

        if (checkUser) {
            throw new Error("User already exists!")
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const employee = await new Employee({ name, surname, email, password: hashedPassword })

        await employee.save();

        return employee;

    }

    public async login(loginRequest: EmployeeLogin): Promise<String> {

        let { email, password } = loginRequest;

        const checkUser = await Employee.findOne(
            { where: { email }, raw: true });

        if (!checkUser) {
            throw new Error("User doesn't exist!")
        };

        let passwordCheck = bcrypt.compare(password, checkUser.password);

        if (!passwordCheck) {
            throw new Error("Passwords do not match!")
        }
        const jwtSecret = process.env.JWT_SECRET || "";
        
        UserUtils.user = checkUser.id;

        return jwt.sign({ ...checkUser }, jwtSecret, { expiresIn: 60 * 60 });
    }
}

export default AuthService;