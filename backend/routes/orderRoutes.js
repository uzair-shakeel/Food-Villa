const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, orderController.createOrder);
router.get("/", orderController.getAllOrders);
router.get("/orders/:id", orderController.getSingleOrder);
router.put("/orders/:id", orderController.updateOrder);
router.get("/ordersbyid/:id", orderController.getOrdersById);
router.get("/delivered", orderController.getDeliveredOrders);

module.exports = router;
