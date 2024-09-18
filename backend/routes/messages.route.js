import express from "express";
import {
    getMessages,
    sendMessage,
} from "../controllers/messages.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

export const messagesRouter = express.Router();

messagesRouter.get("/:id", protectRoute, getMessages);
messagesRouter.post("/send/:id", protectRoute, sendMessage);
