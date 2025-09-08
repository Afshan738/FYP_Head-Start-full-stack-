const express = require("express");
const router = express.Router();
const Service = require("../models/Service");
const { protect } = require("../middleware/authMiddleware");
router.get("/", async (req, res) => {
  try {
    const services = await Service.find().sort({ name: 1 });
    res.json(services);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
});
router.post("/", protect, async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name || !description) {
      return res
        .status(400)
        .json({ message: "Please provide a name and description" });
    }

    const newService = new Service({ name, description });
    const savedService = await newService.save();
    res.status(201).json(savedService);
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).json({ message: err.message });
    }
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
});
router.put("/:id", protect, async (req, res) => {
  try {
    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedService) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.json(updatedService);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
});
router.delete("/:id", protect, async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.json({ message: "Service deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
