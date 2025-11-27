import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./config/database.js";
import router from "./routes/FeedbackRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"]
}));

app.use(express.json());

app.use("/api/v1", router);

dbConnect();

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend running locally"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
