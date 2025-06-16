const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    rentPerHour: { type: Number, required: true },
    capacity: { type: String, required: true },
    fuelType: { type: String, required: true },
    bookedTimeSlots: [
      {
        from: { type: String },
        to: { type: String },
      },
    ],
  },
  {
    timestamps: true, // Adds createdAt and updatedAt
  }
);

const carModel = mongoose.model("cars", carSchema);

module.exports = carModel;