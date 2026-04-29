const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  pickupDate: String,
  returnDate: String,
  selectedCar: String,
  location: String
}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);
