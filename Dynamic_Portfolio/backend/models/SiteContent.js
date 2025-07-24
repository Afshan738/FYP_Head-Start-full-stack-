const mongoose = require("mongoose");

const siteContentSchema = new mongoose.Schema({
  aboutHeadline: String,
  aboutDescription: String,
  aboutImageUrl: String,
  contactEmail: String,
  linkedinUrl: String,
  githubUrl: String,
});

module.exports = mongoose.model("SiteContent", siteContentSchema);
