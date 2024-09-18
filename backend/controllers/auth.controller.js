import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateToken.js";

export const login = (req, res) => {
    try {
    } catch (error) {}
};

export const logout = (req, res) => {
    try {
    } catch (error) {}
};

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } =
            req.body;

        if (password !== confirmPassword)
            return response
                .status(400)
                .json({ error: "Passwords do not match" });

        const user = await User.findOne({ username });
        if (user) return res.status(400).json({ error: "User already exists" });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const maleProPic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const femaleProPic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? maleProPic : femaleProPic,
        });

        if (newUser) {
            await newUser.save();

            await generateTokenAndSetCookie(newUser._id, res);

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic,
            });
        } else {
            res.status(400).json({ error: "Invalid user data" });
        }
    } catch (error) {
        console.log("Error in signup controller", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
