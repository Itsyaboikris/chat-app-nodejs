import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { getUsersForSidebar } from "../controllers/users.controller.js";

export const usersRouter = express.Router();

usersRouter.get("/", protectRoute, getUsersForSidebar);
