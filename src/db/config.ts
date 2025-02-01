import mongoose from "mongoose";

let isConnected = false;

export async function connectToDatabase() {
  if (isConnected) {
    console.log("✅ Using existing database connection");
    return mongoose.connection;
  }

  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error(
      "🚨 MONGODB_URI or DATABASE is missing from environment variables!"
    );
  }

  try {
    const db = await mongoose.connect(uri);

    isConnected = true;
    return db.connection;
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
}
