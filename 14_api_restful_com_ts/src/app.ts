require("dotenv").config();
import express from "express";
import config from "config";

//Routes
import router from "./router";

const app = express();

// JSON middleware
app.use(express.json());
app.use("/api/", router);

// DB
import db from "../config/db";

//Loger 
import Logger from "../config/logger"

//app port
const port = config.get<number>("port");

app.listen(port, async () => {
  await db();
  Logger.info(`Aplicação está funcionando na porta: ${port}`);
});
