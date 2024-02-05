// foodRoutes.js

const express = require("express");
const router = express.Router();
const {
  getAllFoods,
  getFoodById,
  createFood,
  updateFoodById,
  deleteFoodById,
} = require("../controllers/foodController");

// Get all food items
router.get("/", getAllFoods);

// Get a specific food item by ID
router.get("/:foodId", getFoodById);

// Create a new food item
router.post("/create", createFood);

// Update a specific food item by ID
router.put("/:foodId", updateFoodById);

// Delete a specific food item by ID
router.delete("/:foodId", deleteFoodById);

module.exports = router;
