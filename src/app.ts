
import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express"
import authRoutes from "./routes/auth.route"
import bodyParser from "body-parser";
import todoRoutes from "./routes/todo.routes";
import './cronjobs/expiredTodoCronJob'

//env config
dotenv.config();

//Intializing app from express
const app = express();

//getting Mongodb URI from .env file
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api", authRoutes, todoRoutes);

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
