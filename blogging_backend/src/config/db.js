import mongoose from "mongoose";

const connectDB = async (req, res) => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("connection was done");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
