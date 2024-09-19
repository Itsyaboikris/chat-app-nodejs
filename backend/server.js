import express from "express";
import "dotenv/config";
import { authRouter } from "./routes/auth.routes.js";
import connect from "./db/mongodb.js";
import { messagesRouter } from "./routes/messages.route.js";
import { usersRouter } from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/messages", messagesRouter);
app.use("/api/users", usersRouter);

server.listen(PORT, () => {
    connect();
    console.log(`Server is running on port ${PORT}`);
});
