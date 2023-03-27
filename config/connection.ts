require('dotenv').config()
import { Sequelize } from "sequelize-typescript";
import { User } from "../models/user.model";

const connection = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME,
  logging: false,
  models: [User],
});

export default connection;