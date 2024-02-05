// FoodSchema.js

const mongoose = require("mongoose");

// Schema for a single review
const ReviewSchema = new mongoose.Schema({
  user: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

// Schema for a single food item
const FoodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  image: { type: String, required: true }, // URL of the food image
  reviews: [ReviewSchema], // Embedding the ReviewSchema as an array of reviews
});

const Food = mongoose.model("Food", FoodSchema);

module.exports = Food;
