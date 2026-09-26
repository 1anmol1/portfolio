const mongoose = require("mongoose");

// We don't redefine the model if it already exists (Next.js/Vercel hot-reloading workaround)
const PortfolioSchema = new mongoose.Schema({}, { strict: false });
const Portfolio = mongoose.models.Portfolio || mongoose.model("Portfolio", PortfolioSchema);

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  try {
    const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://patilanmolkop_db_user:L3FCoQ8vMQHI3XVW@cluster0.b0nkq00.mongodb.net/?appName=Cluster0";
    
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(MONGO_URI);
    }
    
    const data = await Portfolio.findOne();
    
    if (!data) {
      return res.status(404).json({ message: "Portfolio data not found" });
    }
    
    res.status(200).json(data);
  } catch (error) {
    console.error("Error in serverless function:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
