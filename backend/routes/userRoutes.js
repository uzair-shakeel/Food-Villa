const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

// Register a new user
router.post("/register", userController.registerUser);

// Login user
router.post("/login", userController.loginUser);
router.get("/getUser", authMiddleware, userController.getUser);
router.get("/getAllUsers", userController.getAllUsers);
router.put("/update", authMiddleware, userController.updateUser);

module.exports = router;
