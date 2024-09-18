import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(401).json({ error: "Unauthorized - No token" });
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        if (!decodedToken) {
            return res
                .status(401)
                .json({ error: "Unauthorized - Invalid token" });
        }

        const user = await User.findById(decodedToken.userId).select(
            "-password"
        );

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.log("Error in protectRoute function", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
