const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import the cors middleware
const imageRoutes = require("./routes/imageRoute");
const userRoutes = require("./routes/userRoutes");
const foodRoutes = require("./routes/foodRoutes");
const orderRoutes = require("./routes/orderRoutes");
const cartRoutes = require("./routes/cartRoutes");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB with updated options
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

// Middleware for CORS and JSON parsing
const allowedOrigins = [
  "https://food-villa-five.vercel.app",
  "http://localhost:5173",
];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

app.use(express.json({ limit: "3mb" }));

// Routes
app.use("/images", imageRoutes);
app.use("/user", userRoutes);
app.use("/food", foodRoutes);
app.use("/order", orderRoutes);
app.use("/cart", cartRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to the homepage!"); // Sending a message to the root page
});
