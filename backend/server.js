import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import sellerRoutes from "./routes/sellerRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

import path from "path";
import { fileURLToPath } from "url";




dotenv.config();
connectDB();

const app = express();

app.use("/uploads", express.static("uploads"));

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static folder for uploads
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));


// Routes
app.use("/api/orders", orderRoutes);
app.use("/api/products", productRoutes);
app.use("/api/sellers", sellerRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("eShop backend is running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));