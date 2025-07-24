const express = require("express");
const router = express.Router();
const ContactMessage = require("../models/ContactMessage");
const { body, validationResult } = require("express-validator");

router.get("/", async (req, res) => {
  try {
    const contactMessages = await ContactMessage.find().sort({ createdAt: -1 });
    res.json(contactMessages);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post(
  "/",
  [
    body("name").trim().notEmpty().escape(),
    body("email").isEmail().normalizeEmail(),
    body("message").trim().notEmpty().escape(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const newMessage = new ContactMessage(req.body);
      const savedMessage = await newMessage.save();
      res.status(201).json(savedMessage);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

router.delete("/:id", async (req, res) => {
  try {
    await ContactMessage.findByIdAndDelete(req.params.id);
    res.json({ msg: "Contact message deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
