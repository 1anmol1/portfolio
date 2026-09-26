require("dotenv").config();
const mongoose = require("mongoose");
const Portfolio = require("./models/Portfolio");

const MONGO_URI = process.env.MONGO_URI;

async function updateResume() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");

    const result = await Portfolio.updateOne(
      {},
      { $set: { "contact.resume": "/Anmol_Patil_Resume_Sept_26.pdf" } }
    );
    console.log("Update Result:", result);

    mongoose.disconnect();
  } catch (err) {
    console.error(err);
    mongoose.disconnect();
  }
}

updateResume();
