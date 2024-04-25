import express from "express";
import { helloworldRouter } from "./helloworld.route";
import { helloworldController } from "@src/controllers/helloworld.controller";

const router = express.Router();

router.use("/", helloworldRouter);

export { router };
