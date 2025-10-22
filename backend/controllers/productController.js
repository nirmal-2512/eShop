import Product from "../models/productModel.js";

// Add a product
export const addProduct = async (req, res) => {
  try {
    const { name, description, specification, price, discount, category, brandName, sellerId, sellerName } = req.body;
    const images = req.files ? req.files.map(file => `/uploads/${file.filename}`) : [];
    const product = await Product.create({
      name, description, specification, price, discount, category, images, sellerId, sellerName, brandName
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single product
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update product
export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    Object.assign(product, req.body);

    if (req.files && req.files.length > 0) {
      const images = req.files.map(file => `/uploads/${file.filename}`);
      product.images = [...product.images, ...images];
    }

    await product.save();
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete product
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    await product.remove();
    res.json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add review
export const addReview = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    const { userId, userName, rating, comment } = req.body;
    product.reviews.push({ userId, userName, rating, comment });
    await product.save();
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add comment
export const addComment = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    const { userId, userName, comment } = req.body;
    product.comments.push({ userId, userName, comment });
    await product.save();
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};