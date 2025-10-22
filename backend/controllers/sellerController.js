import Seller from "../models/sellerModel.js";
import generateToken from "../utils/generateToken.js";

export const registerSeller = async (req, res) => {
  try {
    const { name, email, password, shopName } = req.body;

    const sellerExists = await Seller.findOne({ email });
    if (sellerExists) return res.status(400).json({ message: "Seller already exists" });

    const seller = await Seller.create({ name, email, password, shopName });

    res.status(201).json({
      _id: seller._id,
      name: seller.name,
      email: seller.email,
      shopName: seller.shopName,
      token: generateToken(seller._id, "seller"),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const loginSeller = async (req, res) => {
  try {
    const { email, password } = req.body;
    const seller = await Seller.findOne({ email });

    if (seller && (await seller.matchPassword(password))) {
      res.json({
        _id: seller._id,
        name: seller.name,
        email: seller.email,
        shopName: seller.shopName,
        token: generateToken(seller._id, "seller"),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};