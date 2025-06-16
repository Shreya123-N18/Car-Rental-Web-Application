const express = require("express");
const router = express.Router();
const Booking = require("../models/bookingModel");

// Get all bookings for a specific user
router.post("/getuserbookings", async (req, res) => {
  const { userId } = req.body;

  try {
    const bookings = await Booking.find({ user: userId }).populate("car");
    res.send(bookings);
  } catch (error) {
    console.error("Error fetching user bookings:", error);
    return res.status(400).json({ error: "Failed to get user bookings" });
  }
});

module.exports = router;