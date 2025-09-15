import { useState, useEffect } from "react";

const ProductSidebar = ({ setFilters }) => {
  const [brand, setBrand] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 500, max: 5000 });
  const [size, setSize] = useState([]);
  const [storageType, setStorageType] = useState([]);
  const [processorGeneration, setProcessorGeneration] = useState([]);

  useEffect(() => {
    setFilters({ brand, priceRange, size, storageType, processorGeneration });
  }, [brand, priceRange, size, storageType, processorGeneration, setFilters]);

  const handleCheckboxChange = (e, state, setState) => {
    const { value, checked } = e.target;
    if (checked) {
      setState([...state, value]);
    } else {
      setState(state.filter((item) => item !== value));
    }
  };

  return (
    <div className="w-72 p-5 bg-gray-800 shadow-md">
      <div className="text-lg font-bold mb-5 text-gray-200">Filter</div>

      <div className="mb-5">
        <label className="block text-gray-400 mb-2">Brand</label>
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 rounded bg-gray-700 text-gray-100 border border-gray-600"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
      </div>

      <div className="mb-5">
        <label className="block text-gray-400 mb-2">Price</label>
        <div className="flex space-x-2">
          <input
            type="number"
            value={priceRange.min}
            onChange={(e) =>
              setPriceRange({ ...priceRange, min: parseInt(e.target.value) })
            }
            className="w-1/2 p-2 rounded bg-gray-700 text-gray-100 border border-gray-600"
          />
          <input
            type="number"
            value={priceRange.max}
            onChange={(e) =>
              setPriceRange({ ...priceRange, max: parseInt(e.target.value) })
            }
            className="w-1/2 p-2 rounded bg-gray-700 text-gray-100 border border-gray-600"
          />
        </div>
      </div>

      <div className="mb-5">
        <label className="block text-gray-400 mb-2">Size</label>
        <div className="flex flex-wrap gap-2">
          {["S", "M", "L", "XL", "XXL"].map((s) => (
            <label
              key={s}
              className="bg-gray-700 hover:bg-gray-600 text-gray-200 py-1 px-3 rounded cursor-pointer"
            >
              <input
                type="checkbox"
                value={s}
                checked={size.includes(s)}
                onChange={(e) => handleCheckboxChange(e, size, setSize)}
                className="hidden"
              />
              {s}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <label className="block text-gray-400 mb-2">Storage type</label>
        <div className="flex flex-wrap gap-2">
          {["SSD", "HDD"].map((s) => (
            <label
              key={s}
              className="bg-gray-700 hover:bg-gray-600 text-gray-200 py-1 px-3 rounded cursor-pointer"
            >
              <input
                type="checkbox"
                value={s}
                checked={storageType.includes(s)}
                onChange={(e) =>
                  handleCheckboxChange(e, storageType, setStorageType)
                }
                className="hidden"
              />
              {s}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <label className="block text-gray-400 mb-2">Processor Generation</label>
        <div className="flex flex-wrap gap-2">
          {["11th", "12th", "13th"].map((p) => (
            <label
              key={p}
              className="bg-gray-700 hover:bg-gray-600 text-gray-200 py-1 px-3 rounded cursor-pointer"
            >
              <input
                type="checkbox"
                value={p}
                checked={processorGeneration.includes(p)}
                onChange={(e) =>
                  handleCheckboxChange(
                    e,
                    processorGeneration,
                    setProcessorGeneration
                  )
                }
                className="hidden"
              />
              {p}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSidebar;
