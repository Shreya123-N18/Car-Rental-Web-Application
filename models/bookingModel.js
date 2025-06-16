const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    car: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "cars", // This links to the 'cars' collection
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users", // Optional: If you're tracking users
    },
    transactionId: { type: String },
    bookedTimeSlots: {
      from: { type: String },
      to: { type: String },
    },
    totalHours: { type: Number },
    totalAmount: { type: Number },
    driverRequired: { type: Boolean },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const bookingModel = mongoose.model("bookings", bookingSchema);

module.exports = bookingModel;