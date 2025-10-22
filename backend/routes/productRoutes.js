import express from "express";
import {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  addReview,
  addComment,
} from "../controllers/productController.js";
import upload from "../middleware/upload.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

/**
 * Public routes
 */
router.get("/", getAllProducts);        // Anyone can view products
router.get("/:id", getProductById);     // Anyone can view a single product

/**
 * Seller-protected routes (require JWT)
 */
router.post("/", protect, upload.array("images", 5), addProduct); // Only logged-in sellers
router.put("/:id", protect, upload.array("images", 5), updateProduct);
router.delete("/:id", protect, deleteProduct);

/**
 * User-protected routes
 */
router.post("/:id/review", protect, addReview);   // Only logged-in users can review
router.post("/:id/comment", protect, addComment); // Only logged-in users can comment

export default router;