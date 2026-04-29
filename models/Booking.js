const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  pickupDate: {
    type: String,
    required: true
  },
  returnDate: {
    type: String,
    required: true
  },
  selectedCar: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);