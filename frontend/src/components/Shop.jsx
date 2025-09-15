import { useState, useEffect } from "react";
import productsData from "./../data/products";
import ProductList from "./../components/ProductList";
import ProductSidebar from "./../components/ProductSidebar";

const Shop = () => {
  const [allProducts] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [filters, setFilters] = useState({
    brand: "",
    priceRange: { min: 500, max: 5000 },
    size: [],
    storageType: [],
    processorGeneration: [],
  });

  useEffect(() => {
    let filtered = allProducts.filter((product) => {
      const brandMatch = product.brand
        .toLowerCase()
        .includes(filters.brand.toLowerCase());
      const priceMatch =
        product.price >= filters.priceRange.min &&
        product.price <= filters.priceRange.max;
      const sizeMatch =
        filters.size.length === 0 ||
        filters.size.some((s) => product.size.includes(s));
      const storageTypeMatch =
        filters.storageType.length === 0 ||
        filters.storageType.includes(product.storageType);
      const processorGenerationMatch =
        filters.processorGeneration.length === 0 ||
        filters.processorGeneration.includes(product.processorGeneration);

      return (
        brandMatch &&
        priceMatch &&
        sizeMatch &&
        storageTypeMatch &&
        processorGenerationMatch
      );
    });

    setFilteredProducts(filtered);
  }, [filters, allProducts]);

  return (
    <div className="flex min-h-screen">
      <ProductSidebar setFilters={setFilters} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default Shop;
