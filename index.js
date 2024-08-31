import express from "express";
import "dotenv/config";
import { connectDB } from "./config/database.js";

// Create App
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());

// Default route
app.get('/', (req, res) => {
    res.send("App is running");
});

// connect mongoDB
connectDB();

// listen server
app.listen(port, () => {
    console.log(`Server Running on ${port}`);
});