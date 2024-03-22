import express from "express";
import cors from "cors";
import { port } from "./configuration/environment_prop_access.js";
import connectDB from "./db/connectDB.js";
import userRoutes from "./routes/user.js";
import authRoutes from "./routes/auth.js";

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/user", userRoutes);
app.use("/api/login", authRoutes);

app.get("/", (req, res) => {
  res.send("Server is ok....");
});

// app.get("/api/products", (req, res) => {
//   res.send("products");
// });

// const __dirname = path.resolve();
// app.use("/uploads", express.static(path.join(__dirname, '/uploads')));

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/frontend/dist")));

//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
//   );
// } else {
// //   const __dirname = path.resolve();
// //   app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
//   app.get("/", (req, res) => {
//     res.send("API is running....");
//   });
// }

app.listen(port, () => console.log(`Server running on port ${port}`));
