const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

// ✅ CORS config — must be defined BEFORE routes and options handler
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      "http://localhost:5173",
      "https://safar-now-car-rental-website.vercel.app"
    ];

    // Allow requests with no origin (e.g. curl, Postman, mobile apps)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204  // Some browsers (IE11) choke on 204
};

// ✅ Handle preflight OPTIONS requests FIRST, before any other middleware
app.options("*", cors(corsOptions));

// ✅ Apply CORS to all routes
app.use(cors(corsOptions));

app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// Routes
app.use("/api/bookings", bookingRoutes);

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong" });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// MongoDB + Server start
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("❌ MongoDB connection failed:", err);
  });