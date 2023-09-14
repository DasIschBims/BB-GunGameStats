import express from "express";
import Logger from "../Utils/Logger";

const middleware = express.Router();

middleware.use((req, res, next) => {
    Logger.request(req);
    next()
})

export default middleware