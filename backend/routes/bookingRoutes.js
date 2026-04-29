const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const nodemailer = require("nodemailer");

// ✅ GET all bookings from MongoDB
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});

// ✅ CREATE booking + send email
router.post("/", async (req, res) => {
  try {
    // Save booking to MongoDB
    const booking = new Booking(req.body);
    await booking.save();

    // Email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL,
      subject: "New Car Booking Received",
      text: `
New Booking Details:

Name: ${req.body.name}
Email: ${req.body.email}
Phone: ${req.body.phone}
Car: ${req.body.selectedCar}
Pickup Date: ${req.body.pickupDate}
Return Date: ${req.body.returnDate}
Location: ${req.body.location}
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: "Booking saved and email sent!" });

  } catch (error) {
    console.error("Booking error:", error);
    res.status(500).json({ error: "Failed to process booking" });
  }
});

module.exports = router;