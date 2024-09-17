import { DataSource } from "typeorm";
import {
  DB_TYPE,
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_DATABASE,
} from ".";
//import { Credential } from "../entities/Credential";
//import { User } from "../entities/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  synchronize: true,
  //dropSchema: true,
  logging: true,
  //entities: [Credential, User],
  entities: ["src/entities/*.ts"],
  subscribers: [],
  migrations: [],
});
