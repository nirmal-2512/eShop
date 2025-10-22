import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    userName: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String },
  },
  { timestamps: true }
);

const commentSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    userName: { type: String, required: true },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    specification: { type: String },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    category: { type: String },
    images: [{ type: String }],
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "Seller", required: true },
    sellerName: { type: String, required: true },
    brandName: { type: String },
    reviews: [reviewSchema],
    comments: [commentSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);