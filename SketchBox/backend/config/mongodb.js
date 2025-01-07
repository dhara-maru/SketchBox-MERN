import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(`${process.env.MONGODB_URI}/SketchBox`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        // If the connection is successful, log the message
        console.log("DB connected");

    } catch (err) {
        console.error("DB connection error:", err);
        process.exit(1); // Exit the application if the connection fails
    }
};

export default connectDB;
