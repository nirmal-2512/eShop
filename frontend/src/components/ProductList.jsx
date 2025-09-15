import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  const [sortType, setSortType] = useState("relevance");
  const [sortedProducts, setSortedProducts] = useState(products);

  useEffect(() => {
    let sorted = [...products];
    if (sortType === "price-low-to-high") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortType === "price-high-to-low") {
      sorted.sort((a, b) => b.price - a.price);
    }
    setSortedProducts(sorted);
  }, [sortType, products]);

  return (
    <div className="flex-grow p-5">
      <div className="flex justify-between items-center mb-5 text-gray-400">
        <span className="text-sm">
          Showing 1-40 of 1000 results for "Tshirt"
        </span>
        <div className="flex items-center space-x-2">
          <span>Sort by:</span>
          <select
            className="p-2 rounded bg-gray-700 text-gray-100 border border-gray-600"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="relevance">Relevance</option>
            <option value="price-low-to-high">Price--low to high</option>
            <option value="price-high-to-low">Price--high to low</option>
            <option value="newest-first">Newest first</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="text-center text-gray-500 col-span-full">
            No products found.
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
