import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import resumeRoutes from "./routes/resumeRoutes.js"

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("ResumeIta API Running...");
});

const PORT = process.env.PORT || 5000;

connectDB();

app.use("/api/auth",authRoutes);
app.use("/api/user",userRoutes);
app.use("/api/resume",resumeRoutes);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});