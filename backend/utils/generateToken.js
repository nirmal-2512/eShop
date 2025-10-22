import jwt from "jsonwebtoken";

const generateToken = (id, role) => {
  return jwt.sign(
    { id, role },
    process.env.JWT_SECRET || "eshopsecret",
    { expiresIn: "30d" } // token valid for 30 days
  );
};

export default generateToken;