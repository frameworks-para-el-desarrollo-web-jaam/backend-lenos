import mongoose from "mongoose";

export const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/ventalenos";

  try {
    await mongoose.connect(mongoUri);
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
};
