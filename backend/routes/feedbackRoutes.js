// define api routes
const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");
// GET all feedback (database se sara feedback lena)
router.get("/", async (req, res) => {
  try {
    const feedback = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedback);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// POST feedback (new feedback save krna)
router.post("/", async (req, res) => {
  try {
    const { name, role, rating, message } = req.body;

    const newFeedback = new Feedback({
      name,
      role,
      rating,
      feedback: message
    });
    await newFeedback.save();
    res.json(newFeedback);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
