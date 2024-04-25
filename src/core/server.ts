var express = require("express");

import { Express } from "express";

import { InitializeRoutes } from "./initRoutes";

import { helloworldController } from "@src/controllers/helloworld.controller";
import * as ServerConfig from "@configs/serverConfig.json";
import { InitializeMiddleWare } from "./initMiddleware";

export async function server() {
  let app: Express = express();

  let host = ServerConfig.host;
  let port = ServerConfig.port;

  let link = "http://" + host + ":" + port.toString();

  await InitializeMiddleWare.InitializeCommonMiddleware(app);
  await InitializeRoutes.init(app);

  app.listen(port, host, () => {
    console.log(
      `Server  started listening at ${host} on ${port} port in environment : ${process.env.NODE_ENV}`
    );
  });

  return Promise.resolve(app);
}
