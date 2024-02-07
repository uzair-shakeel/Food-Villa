const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import the cors middleware
const imageRoutes = require("./routes/imageRoute");
const userRoutes = require("./routes/userRoutes");
const foodRoutes = require("./routes/foodRoutes");
const orderRoutes = require("./routes/orderRoutes");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB with updated options
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

// Middleware for CORS and JSON parsing
app.use(cors()); // Enable CORS for all routes
app.use(express.json({ limit: "3mb" }));

// Routes
app.use("/images", imageRoutes);
app.use("/user", userRoutes);
app.use("/food", foodRoutes);
app.use("/order", orderRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
