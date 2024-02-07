const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, orderController.createOrder);
router.get("/", authMiddleware, orderController.getAllOrders);
router.get("/orders/:id", authMiddleware, orderController.getSingleOrder);
router.get("/delivered", authMiddleware, orderController.getDeliveredOrders);

module.exports = router;
