const Order = require("../models/orderSchema");

exports.createOrder = async (req, res) => {
  const { user, products } = req.body;

  try {
    const order = new Order(req.body);
    await order.save();

    res.status(201).json({
      status: "success",
      message: "Order created successfully",
      data: order,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Failed to create order",
      error: error.message,
    });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .sort({ createdAt: -1 })
      .populate("user")
      .populate("products.product");
    res.status(200).json({
      status: "success",
      message: "All orders fetched successfully",
      data: orders,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch orders",
      error: error.message,
    });
  }
};
exports.getOrdersById = async (req, res) => {
  try {
    const id = req.params.id;
    const orders = await Order.find({ user: id }).sort({ createdAt: -1 });
    res.status(200).json({
      status: "success",
      message: "All orders fetched successfully",
      data: orders,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch orders",
      error: error.message,
    });
  }
};

exports.getSingleOrder = async (req, res) => {
  const _id = req.params.id;

  try {
    const order = await Order.findById(_id);
    if (!order) {
      return res.status(404).json({
        status: "fail",
        message: "Order not found",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Order fetched successfully",
      data: order,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch order",
      error: error.message,
    });
  }
};

exports.getDeliveredOrders = async (req, res) => {
  try {
    const deliveredOrders = await Order.find({ status: "completed" });
    res.status(200).json({
      status: "success",
      message: "Delivered orders fetched successfully",
      data: deliveredOrders,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch delivered orders",
      error: error.message,
    });
  }
};
