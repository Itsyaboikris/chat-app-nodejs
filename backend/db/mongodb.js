import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDb");
    } catch (error) {
        console.log("Error connecting to MongoDB", error.message);
    }
};

export default connect;
