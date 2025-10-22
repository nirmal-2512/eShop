import Order from "../models/orderModel.js";
import Product from "../models/productModel.js";

// Place an order
export const placeOrder = async (req, res) => {
  try {
    const { userId, products } = req.body;

    // Calculate total price
    let totalPrice = 0;
    for (let item of products) {
      const product = await Product.findById(item.productId);
      if (!product) return res.status(404).json({ message: "Product not found" });
      totalPrice += product.price * item.quantity;
    }

    const order = await Order.create({ userId, products, totalPrice });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get orders for a specific user
export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId }).populate("products.productId", "name price");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all orders (for admin/seller)
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("products.productId", "name price").populate("userId", "name email");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update order status
export const updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });

    const { status } = req.body;
    if (status) order.status = status;

    await order.save();
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};