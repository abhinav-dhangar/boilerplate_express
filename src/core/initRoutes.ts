import { Express } from "express";
import { router } from "../routes/index.router";
import { helloworldController } from "@src/controllers/helloworld.controller";

export class InitializeRoutes {
  public static async init(app: Express) {
    app.use("/", router);
  }
}
