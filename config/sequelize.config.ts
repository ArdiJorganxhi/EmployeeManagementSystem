require('dotenv').config()
import { Sequelize } from "sequelize-typescript";
import { Employee } from "../models/employee.model";

const connection = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME,
  logging: false,
  models: [Employee],
});

export default connection;