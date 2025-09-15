import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg p-4 transition-transform transform hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="mt-4 text-center">
        <div className="text-gray-400 font-semibold text-sm">
          {product.brand}
        </div>
        <div className="text-gray-200 font-medium text-lg mt-1">
          {product.name}
        </div>
        <div className="text-gray-100 font-bold mt-2 text-xl">
          Rs. {product.price}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
