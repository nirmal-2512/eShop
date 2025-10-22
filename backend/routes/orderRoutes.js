import express from "express";
import {
  placeOrder,
  getUserOrders,
  getAllOrders,
  updateOrderStatus
} from "../controllers/orderController.js";

const router = express.Router();

// Place an order
router.post("/", placeOrder);

// Get orders of a user
router.get("/user/:userId", getUserOrders);

// Get all orders (admin/seller)
router.get("/", getAllOrders);

// Update order status
router.put("/:id", updateOrderStatus);

export default router;