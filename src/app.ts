
import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express"

dotenv.config();

const app = express();

const MONGODB_URI = process.env.MONGODB_URI;



// Connect to MongoDB
mongoose
  .connect(MONGODB_URI!)
  .then(() => {
    console.log("Connected to MongoDB.");
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => console.error("Error connecting to MongoDB:", error));
