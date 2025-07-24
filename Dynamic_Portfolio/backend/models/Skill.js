// models/Skill.js
const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  category: String,
  iconUrl: String,
  description: String,
});

module.exports = mongoose.model("Skill", skillSchema);
