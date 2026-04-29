const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const nodemailer = require("nodemailer");

// ✅ GET all bookings from MongoDB
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 }); // newest first
    res.json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});

// ✅ CREATE booking + send email
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, selectedCar, pickupDate, returnDate, location } = req.body;

    // Basic validation
    if (!name || !email || !phone || !selectedCar || !pickupDate || !returnDate || !location) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Save booking to MongoDB
    const booking = new Booking({ name, email, phone, selectedCar, pickupDate, returnDate, location });
    await booking.save();

    // Email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS   // Use Gmail App Password, not your login password
      }
    });

    // Email to owner
    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL,
      subject: "🚗 New Car Booking Received",
      text: `
New Booking Details:

Name:        ${name}
Email:       ${email}
Phone:       ${phone}
Car:         ${selectedCar}
Pickup Date: ${pickupDate}
Return Date: ${returnDate}
Location:    ${location}

Booking ID: ${booking._id}
Received at: ${new Date().toLocaleString()}
      `
    };

    // Confirmation email to customer
    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "✅ Your Booking is Confirmed – Safar Now",
      text: `
Hi ${name},

Your booking has been confirmed! Here are your details:

Car:         ${selectedCar}
Pickup Date: ${pickupDate}
Return Date: ${returnDate}
Location:    ${location}

We'll get in touch with you shortly on ${phone}.

Thanks for choosing Safar Now! 🚗
      `
    };

    // Send both emails (don't block response if email fails)
    try {
      await transporter.sendMail(ownerMailOptions);
      await transporter.sendMail(customerMailOptions);
    } catch (emailError) {
      // Log email error but don't fail the booking
      console.error("Email sending failed:", emailError.message);
    }

    res.status(201).json({ message: "Booking saved successfully!", bookingId: booking._id });

  } catch (error) {
    console.error("Booking error:", error);
    res.status(500).json({ error: "Failed to process booking" });
  }
});

module.exports = router;