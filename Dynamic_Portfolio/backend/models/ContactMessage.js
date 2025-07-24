const mongoose = require("mongoose");

const contactMessageSchema = new mongoose.Schema(
  {
    senderName: { type: String, required: true },
    senderEmail: { type: String, required: true },
    messageBody: { type: String, required: true },
    isRead: { type: Boolean, default: false },
  },
  { timestamps: { createdAt: "receivedAt" } }
); 

module.exports = mongoose.model("ContactMessage", contactMessageSchema);
