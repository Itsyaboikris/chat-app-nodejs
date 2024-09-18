import express from "express";
import "dotenv/config";
import { authRouter } from "./routes/auth.routes.js";
import connect from "./db/mongodb.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/auth", authRouter);

app.listen(PORT, () => {
    connect();
    console.log(`Server is running on port ${PORT}`);
});
