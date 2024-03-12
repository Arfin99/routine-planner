import express from "express";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
// import connectDB from "./config/db.js";
const port = process.env.PORT || 5000;

// connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("Backend Service is Running..");
});

app.get("/api/products", (req, res) => {
  res.send("products");
});

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, '/uploads')));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  );
} else {
//   const __dirname = path.resolve();
//   app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.listen(port, () => console.log(`Server running on port ${port}`));
