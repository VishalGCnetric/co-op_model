import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
// Dummy product data
const productsData = [
  {
    id: 1,
    name: "Women's Mid Rise 7/8 Skinny Jeans",
    price: 1499,
    url:"https://levi.in/cdn/shop/files/213060630_01_Style_Shot_99a781a5-800f-475e-8dd0-16c703bc279a.jpg?v=1712743379&width=360",
    discount: "50% OFF",
    finalPrice: 749,
    image: "url_to_image",
    gender: "Women",
    productType: "Jeans",
    size: ["S", "M", "L"],
    color: "White",
    fit: "Skinny",
    style: "Casual"
  },
  {
    id: 2,
    name: "Women's High Rise Straight Fit Jeans",
    price: 2499,
    url:"https://levi.in/cdn/shop/files/676670071_02_StyleShot.jpg?v=1719986047&width=360",
    discount: "20% OFF",
    finalPrice: 1999,
    image: "url_to_image",
    gender: "Women",
    productType: "Jeans",
    size: ["S", "M"],
    color: "Blue",
    fit: "Straight",
    style: "Casual"
  },
  {
    id: 3,
    name: "Men's Regular Fit Joggers",
    price: 999,
    url:"https://levi.in/cdn/shop/files/729110022-Side.jpg?v=1719850363&width=360",
    discount: "30% OFF",
    finalPrice: 699,
    image: "url_to_image",
    gender: "Men",
    productType: "Joggers",
    size: ["M", "L"],
    color: "Black",
    fit: "Regular",
    style: "Athleisure"
  },
  {
    id: 4,
    name: "Women's High Rise Relaxed Jeans",
    price: 2999,
    url:"https://levi.in/cdn/shop/files/A39510018_01_Style_Shot_ae0f7b25-8f32-43e7-abdd-d5529b9ab3f5.jpg?v=1712743110&width=360",
    discount: "40% OFF",
    finalPrice: 1799,
    image: "url_to_image",
    gender: "Women",
    productType: "Jeans",
    size: ["S", "L"],
    color: "Gray",
    fit: "Relaxed",
    style: "Casual"
  },
  {
    id: 5,
    name: "Men's Slim Fit Jeans",
    price: 1999,
    url:"https://levi.in/cdn/shop/files/219420027_01_Style_Shot_447e9807-5b7c-4d98-b1c5-46c80cf74698.jpg?v=1712743020&width=360",
    discount: "25% OFF",
    finalPrice: 1499,
    image: "url_to_image",
    gender: "Men",
    productType: "Jeans",
    size: ["M", "L"],
    color: "Blue",
    fit: "Slim",
    style: "Casual"
  },
  {
    id: 6,
    name: "Women's High Rise Mom Jeans",
    price: 1899,
    url:"https://levi.in/cdn/shop/files/213060630_01_Style_Shot_99a781a5-800f-475e-8dd0-16c703bc279a.jpg?v=1712743379&width=360",
    discount: "35% OFF",
    finalPrice: 1234,
    image: "url_to_image",
    gender: "Women",
    productType: "Jeans",
    size: ["M", "L"],
    color: "Pink",
    fit: "Mom",
    style: "Trendy"
  },
  {
    id: 7,
    name: "Men's Straight Fit Chinos",
    price: 1499,
    url:"https://levi.in/cdn/shop/files/213060630_01_Style_Shot_99a781a5-800f-475e-8dd0-16c703bc279a.jpg?v=1712743379&width=360",
    discount: "10% OFF",
    finalPrice: 1349,
    image: "url_to_image",
    gender: "Men",
    productType: "Chinos",
    size: ["S", "M", "L"],
    color: "Beige",
    fit: "Straight",
    style: "Business Casual"
  },
  {
    id: 8,
    name: "Women's Relaxed Fit Joggers",
    price: 1399,
    url:"https://levi.in/cdn/shop/files/213060630_01_Style_Shot_99a781a5-800f-475e-8dd0-16c703bc279a.jpg?v=1712743379&width=360",
    discount: "20% OFF",
    finalPrice: 1119,
    image: "url_to_image",
    gender: "Women",
    productType: "Joggers",
    size: ["M", "L"],
    color: "Green",
    fit: "Relaxed",
    style: "Athleisure"
  },
  {
    id: 9,
    name: "Men's Slim Fit Cargo Pants",
    price: 1799,
    url:"https://levi.in/cdn/shop/files/213060630_01_Style_Shot_99a781a5-800f-475e-8dd0-16c703bc279a.jpg?v=1712743379&width=360",
    discount: "15% OFF",
    finalPrice: 1529,
    image: "url_to_image",
    gender: "Men",
    productType: "Cargo Pants",
    size: ["M", "L", "XL"],
    color: "Olive",
    fit: "Slim",
    style: "Outdoor"
  },
  {
    id: 10,
    name: "Women's Wide Leg Jeans",
    price: 2099,
    url:"https://levi.in/cdn/shop/files/213060630_01_Style_Shot_99a781a5-800f-475e-8dd0-16c703bc279a.jpg?v=1712743379&width=360",
    discount: "30% OFF",
    finalPrice: 1469,
    image: "url_to_image",
    gender: "Women",
    productType: "Jeans",
    size: ["S", "M"],
    color: "Blue",
    fit: "Wide Leg",
    style: "Vintage"
  },
  {
    id: 11,
    name: "Men's Regular Fit Track Pants",
    price: 999,
    url:"https://levi.in/cdn/shop/files/213060630_01_Style_Shot_99a781a5-800f-475e-8dd0-16c703bc279a.jpg?v=1712743379&width=360",
    discount: "20% OFF",
    finalPrice: 799,
    image: "url_to_image",
    gender: "Men",
    productType: "Track Pants",
    size: ["S", "M", "L"],
    color: "Gray",
    fit: "Regular",
    style: "Athleisure"
  },
  {
    id: 12,
    name: "Women's Bootcut Jeans",
    price: 1799,
    url:"https://levi.in/cdn/shop/files/213060630_01_Style_Shot_99a781a5-800f-475e-8dd0-16c703bc279a.jpg?v=1712743379&width=360",
    discount: "25% OFF",
    finalPrice: 1349,
    image: "url_to_image",
    gender: "Women",
    productType: "Jeans",
    size: ["M", "L"],
    color: "Black",
    fit: "Bootcut",
    style: "Vintage"
  }
];




const ProductListingPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [filters, setFilters] = useState({ gender: "", productType: "", color: "", size: "", fit: "" });
  const navigate = useNavigate();

  const applyFilters = () => {
    setFilteredProducts(
      productsData.filter((product) =>
        (filters.gender ? product.gender === filters.gender : true) &&
        (filters.productType ? product.productType === filters.productType : true) &&
        (filters.color ? product.color === filters.color : true) &&
        (filters.size ? product.size.includes(filters.size) : true) &&
        (filters.fit ? product.fit === filters.fit : true)
      )
    );
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-4">
      {/* Filters */}
      <motion.div 
        className="flex gap-4 mb-6 flex-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <select name="gender" onChange={handleFilterChange} className="p-2 border rounded-md bg-white shadow">
          <option value="">Gender</option>
          <option value="Women">Women</option>
          <option value="Men">Men</option>
        </select>
        <select name="productType" onChange={handleFilterChange} className="p-2 border rounded-md bg-white shadow">
          <option value="">Product Type</option>
          <option value="Jeans">Jeans</option>
          <option value="Joggers">Joggers</option>
          <option value="Chinos">Chinos</option>
          <option value="Cargo Pants">Cargo Pants</option>
          <option value="Track Pants">Track Pants</option>
        </select>
        <select name="color" onChange={handleFilterChange} className="p-2 border rounded-md bg-white shadow">
          <option value="">Color</option>
          <option value="White">White</option>
          <option value="Blue">Blue</option>
          <option value="Black">Black</option>
          <option value="Gray">Gray</option>
          <option value="Pink">Pink</option>
        </select>
        <select name="size" onChange={handleFilterChange} className="p-2 border rounded-md bg-white shadow">
          <option value="">Size</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>
        <select name="fit" onChange={handleFilterChange} className="p-2 border rounded-md bg-white shadow">
          <option value="">Fit</option>
          <option value="Skinny">Skinny</option>
          <option value="Straight">Straight</option>
          <option value="Regular">Regular</option>
          <option value="Relaxed">Relaxed</option>
          <option value="Slim">Slim</option>
        </select>
        <button 
          onClick={applyFilters} 
          className="px-4 py-2 bg-gradient-to-r from-indigo-400 to-indigo-600 text-white rounded-md shadow"
        >
          Apply Filters
        </button>
      </motion.div>
 {/* Conditional Rendering for No Products Found */}
 {filteredProducts.length === 0 ? (
        <motion.div
          className="text-center text-gray-500 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold">No products found</h2>
          <p className="mt-2">Try adjusting your filters to find what you’re looking for.</p>
        </motion.div>
      ) : (
        // Product Grid
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          {filteredProducts.map((product) => (
            <motion.div 
              key={product.id} 
              className="border rounded-lg overflow-hidden shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate(`/products/${product.id}`)}
            >
              <img src={product.url} alt={product.name} className="w-60 h-60 object-content mx-auto" />
              <div className="p-4">
                <h3 className="font-bold text-lg">{product.name}</h3>
                <p className="text-gray-500 text-sm">₹{product.finalPrice} <span className="line-through ml-2 text-red-500">{product.price}</span></p>
                <p className="text-green-500">{product.discount}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default ProductListingPage;