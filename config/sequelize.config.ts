require('dotenv').config()
import { Sequelize } from "sequelize-typescript";
import { Employee } from "../models/entities/employee.model";
import { Job } from "../models/entities/job.model";

const connection = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME,
  logging: false,
  models: [Employee, Job],
});

export default connection;