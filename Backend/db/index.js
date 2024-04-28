import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    const connection = await mongoose.connect("mongodb+srv://jasingh203:JvnTkK1hNqO3bSfA@tif.riynqgn.mongodb.net/?retryWrites=true&w=majority&appName=TiF");
    console.log(`MongoDB connected : ${connection.connection.host}`);
  } catch (error) {
    console.log("MONGODB connection FAILED ", error);
    process.exit(1);
  }
};

export default ConnectDB;