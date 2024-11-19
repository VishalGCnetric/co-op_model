import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

function TrendingProductSlider({ products }) {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleViewAllClick = () => {
    navigate('/products');
  };

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className="relative py-8">
      {/* Heading and View All button */}
      <div className="flex justify-between items-center mb-6 mx-8">
      <h2 className="text-lg font-bold text-white"></h2>

        <h2 className="text-2xl font-bold ">Trending Products</h2>
        <button
          onClick={handleViewAllClick}
          className="text-blue-600 hover:underline font-semibold"
        >
          <Link to="/products"></Link>
          View All
        </button>
      </div>

      {/* Slider Container */}
      <div className="flex items-center">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="text-gray-600 hover:text-gray-900 p-2 rounded-full bg-white shadow-lg absolute left-0 z-10"
          aria-label="Previous"
        >
          <FaChevronLeft size={24} />
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto scrollbar-hide space-x-4 mx-8"
        >
          {products?.map((product) => (
            <motion.div
              key={product.id}
              className="w-56 flex-shrink-0 bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => handleProductClick(product.id)}
            >
              <img src={product.image} alt={product.name} className="w-full h-72 object-cover" />
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-800">{product.name}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-lg font-bold text-gray-900">{product.price}</span>
                  <span className="text-sm line-through text-gray-500">{product.originalPrice}</span>
                </div>
                <div className="text-green-600 font-semibold mt-1">{product.discount}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="text-gray-600 hover:text-gray-900 p-2 rounded-full bg-white shadow-lg absolute right-0 z-10"
          aria-label="Next"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

export default TrendingProductSlider;
