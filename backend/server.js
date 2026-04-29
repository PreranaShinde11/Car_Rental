const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

// Middleware
app.use(cors());
//app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});


// Routes
app.use("/api/bookings", bookingRoutes);

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log(err));

// Start server

//app.listen(process.env.PORT, () => {
  //console.log(`🚀 Server running on port ${process.env.PORT}`);
//});
app.listen(process.env.PORT || 5000, () => {
  console.log("🚀 Server running");
});

