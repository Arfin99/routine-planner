import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.get('/', (req, res) => {
    res.send("Backend Service is Running..")
});

app.get("/api/products", (req, res) => {
    res.send("products");
});

app.listen(port, () => console.log(`Server running on port ${port}`));