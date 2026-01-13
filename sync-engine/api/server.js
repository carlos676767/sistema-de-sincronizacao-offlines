import express from "express";
import chalk from "chalk";
import bodyParser from "body-parser";
import expressRouter from "./router/router.js";

import router from "./middlares/acessUser.js";
import "dotenv/config";

import Bot from "./service/ServiceTelegram.js";
;
const app = express();
app.use(expressRouter);

app.use(router);

app.use(bodyParser.json());

app.listen(3000, () => {
  console.log(chalk.bold(`servidor rodando port 3000`));
});



Bot.sendTokenUser()




