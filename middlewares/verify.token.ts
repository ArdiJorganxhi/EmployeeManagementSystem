require('dotenv').config()
import express, { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import UserUtils from '../utils/user.utils';

class VerifyToken {

    public verifyUser(req: Request, res: Response, next: NextFunction) {

        let header = req.header('Authorization');

        const jwtSecret = process.env.JWT_SECRET || ""

        if (!header) {
            return res.status(401).send({ message: "Unauthorized!" });
        }
        let token = header.replace("Bearer ", "");

        jwt.verify(token, jwtSecret, function (err, decoded) {
            if (err) {
                return res.status(401).send({ message: "Unauthorized!" })
            }
            UserUtils.user = decoded;
            
            
            next();
        })

    }
}

export default VerifyToken