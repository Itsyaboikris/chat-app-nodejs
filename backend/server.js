import express from "express";
import "dotenv/config";
import { authRouter } from "./routes/auth.routes.js";
import connect from "./db/mongodb.js";

const app = express();

app.use("/api/auth", authRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    connect();
    console.log(`Server is running on port ${PORT}`);
});
