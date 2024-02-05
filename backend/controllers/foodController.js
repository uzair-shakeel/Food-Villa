const Food = require("../models/FoodSchema");

exports.getAllFoods = async (req, res) => {
  try {
    const { category } = req.query;

    let query = {};

    // Check if category is provided in the query parameters
    if (category) {
      query = { category: { $regex: new RegExp(category, "i") } };
    }

    const foods = await Food.find(query);

    if (foods.length === 0) {
      return res
        .status(404)
        .json({ message: "No data found for the given category" });
    }

    res.status(200).json({ data: foods, message: "Data Received" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller to get a specific food item by ID
exports.getFoodById = async (req, res) => {
  try {
    const food = await Food.findById(req.params.foodId);
    if (!food) {
      return res.status(404).json({ message: "Food not found" });
    }
    res.json(food);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller to create a new food item
exports.createFood = async (req, res) => {
  try {
    const newFood = await Food.create(req.body);
    res
      .status(201)
      .json({ data: newFood, message: "Food created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller to update a specific food item by ID
exports.updateFoodById = async (req, res) => {
  try {
    const updatedFood = await Food.findByIdAndUpdate(
      req.params.foodId,
      req.body,
      { new: true }
    );
    if (!updatedFood) {
      return res.status(404).json({ message: "Food not found" });
    }
    res.json({ data: updatedFood, message: "Food updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller to delete a specific food item by ID
exports.deleteFoodById = async (req, res) => {
  try {
    const deletedFood = await Food.findByIdAndDelete(req.params.foodId);
    if (!deletedFood) {
      return res.status(404).json({ message: "Food not found" });
    }
    res.json({ data: deletedFood, message: "Food deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
