const mongoose = require("mongoose");

const PortfolioSchema = new mongoose.Schema({
  name: String,
  title: String,
  role: String,
  phone: String,
  summary: String,
  about: String,
  education: Array,
  experience: Array,
  projects: Array,
  skills: Object,
  achievements: Array,
  stats: Object,
  contact: Object,
}, { strict: false }); // Using strict false allows us to dump all the varied data structures directly

module.exports = mongoose.model("Portfolio", PortfolioSchema);
