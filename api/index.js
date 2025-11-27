import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "../config/database.js";
import router from "../routes/FeedbackRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// CORS for React frontend
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(express.json());

// Main API Path
app.use("/api/v1", router);

// Connect MongoDB
dbConnect();

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend running on Render"
  });
});

app.listen(PORT, () => {
  console.log("Backend running on PORT:", PORT);
});
