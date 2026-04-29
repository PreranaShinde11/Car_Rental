const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

// Middleware
//app.use(cors());
app.use(cors({
  origin: ["http://localhost:5173", "https://your-frontend.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
//app.use(bodyParser.json());
app.use(express.json());

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

// Connect MongoDB
//mongoose.connect(process.env.MONGO_URI)
  //.then(() => console.log("✅ MongoDB Connected"))
  //.catch(err => console.log(err));

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

// Start server

//app.listen(process.env.PORT, () => {
  //console.log(`🚀 Server running on port ${process.env.PORT}`);
//});
app.listen(process.env.PORT || 5000, () => {
  console.log("🚀 Server running");
});

