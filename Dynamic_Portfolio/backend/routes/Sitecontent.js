const express = require("express");
const router = express.Router();
const SiteContent = require("../models/SiteContent");
const { protect } = require("../middleware/authMiddleware");

router.get("/", async (req, res) => {
  try {
    const content = await SiteContent.findOne();
    if (!content) {
      return res
        .status(404)
        .json({ msg: "Site content has not been created yet." });
    }
    res.json(content);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/", protect, async (req, res) => {
  try {
    const existingContent = await SiteContent.findOne();
    if (existingContent) {
      return res.status(400).json({
        msg: "Site content already exists. Use the PUT method to update it.",
      });
    }
    const newContent = new SiteContent(req.body);
    await newContent.save();
    res.status(201).json(newContent);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.put("/", protect, async (req, res) => {
  try {
    const updatedContent = await SiteContent.findOneAndUpdate({}, req.body, {
      new: true,
    });
    if (!updatedContent) {
      return res
        .status(404)
        .json({ msg: "Site content not found. Use POST to create it first." });
    }
    res.json(updatedContent);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.delete("/", protect, async (req, res) => {
  try {
    const deletedContent = await SiteContent.findOneAndDelete({});
    if (!deletedContent) {
      return res.status(404).json({ msg: "Site content not found." });
    }
    res.json({ msg: "Site content was successfully deleted." });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
