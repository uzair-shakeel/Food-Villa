const express = require("express");
const router = express.Router();
const {
  getUserCart,
  addItemToCart,
  removeItemFromCart,
  updateCart,
  emptyCartByUserID,
} = require("../controllers/cartControllers");
const authMiddleware = require("../middleware/authMiddleware");

// GET user's cart
router.get("/", authMiddleware, getUserCart);

// POST add item to cart
router.post("/add", authMiddleware, addItemToCart);

router.put("/update/:productId", authMiddleware, updateCart);
// DELETE remove item from cart
router.delete("/remove/:productId", authMiddleware, removeItemFromCart);
router.delete("/delete", emptyCartByUserID);

module.exports = router;
