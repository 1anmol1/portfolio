require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Portfolio = require("./models/Portfolio");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// API endpoint to fetch portfolio data
app.get("/api/portfolio", async (req, res) => {
  try {
    const data = await Portfolio.findOne();
    if (!data) {
      return res.status(404).json({ message: "Portfolio data not found" });
    }
    res.json(data);
  } catch (error) {
    console.error("Error fetching portfolio data:", error);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
