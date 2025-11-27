import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    if (!process.env.MONGODB_URL) {
      console.log("MONGODB_URL is not defined in env");
      return;
    }
    await mongoose.connect(process.env.MONGODB_URL, {
      // options if needed
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB connection failed", error);
  }
};

export default dbConnect;
