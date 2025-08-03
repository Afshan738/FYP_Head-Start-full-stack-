const express = require("express");
const router = express.Router();
const Education = require("../models/Education");
const { protect } = require("../middleware/authMiddleware");

router.get("/", async (req, res) => {
  try {
    const education = await Education.find().sort({ createdAt: -1 });
    res.json(education);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.post("/", protect, async (req, res) => {
  try {
    const newEducation = new Education(req.body);
    const neweducation = await newEducation.save();
    res.status(201).json(neweducation);
  } catch (e) {
    console.error(e.message);
    res.status(500).send("Server Error");
  }
});
router.put("/:id", protect, async (req, res) => {
  try {
    const updatedEducation = await Education.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedEducation);
  } catch (e) {
    console.error(e.message);
    res.status(500).send("Server Error");
  }
});
router.delete("/:id", protect, async (req, res) => {
  try {
    await Education.findByIdAndDelete(req.params.id);
    res.json({ msg: "Education deleted" });
  } catch (e) {
    console.error(e.message);
    res.status(500).send("Server Error");
  }
});
module.exports = router;
