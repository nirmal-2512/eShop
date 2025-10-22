import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import Seller from "../models/sellerModel.js";

export const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET || "eshopsecret");

      // Attach either user or seller to request
      req.user = await User.findById(decoded.id).select("-password") ||
                 await Seller.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: "Not authorized, invalid token" });
    }
  }

  if (!token) {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};