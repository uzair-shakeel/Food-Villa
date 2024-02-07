const Order = require("../models/orderSchema");

exports.createOrder = async (req, res) => {
  const { user, products } = req.body;

  try {
    // Check if there is an existing pending order for the same user and product
    const existingOrder = await Order.findOne({
      user,
      status: "pending",
      "products.product": { $in: products.map((p) => p.product) },
    });

    if (existingOrder) {
      // If order exists, update the quantity for the existing product
      products.forEach(async (product) => {
        const existingProduct = existingOrder.products.find((p) =>
          p.product.equals(product.product)
        );
        if (existingProduct) {
          existingProduct.qty += product.qty;
        } else {
          existingOrder.products.push(product);
        }
      });

      await existingOrder.save();

      res.status(200).json({
        status: "success",
        message: "Quantity updated for existing order",
        data: existingOrder,
      });
    } else {
      // If no existing order, create a new order
      const order = new Order(req.body);
      await order.save();

      res.status(201).json({
        status: "success",
        message: "Order created successfully",
        data: order,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Failed to create or update order",
      error: error.message,
    });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user");
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
