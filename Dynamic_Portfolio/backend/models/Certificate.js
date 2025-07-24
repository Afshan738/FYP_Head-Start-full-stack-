
const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema({
  title: { type: String, required: true },
  issuingOrganization: { type: String, required: true },
  dateIssued: Date,
  certificateUrl: String,
  description: String,
});

module.exports = mongoose.model("Certificate", certificateSchema);
