import React from 'react';
import { motion } from 'framer-motion';

// Dropdown component to handle both subcategories and simple items
const Dropdown = ({ isOpen, dropdownData }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="absolute mt-2 bg-white w-auto rounded-lg shadow-lg"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
    >
      {dropdownData.subcategories ? (
        <div className="grid grid-cols-5 gap-6 px-8 py-4">
          {dropdownData.subcategories.map((subcategory, index) => (
            <div key={index}>
              <h4 className="font-bold mb-2 text-gray-900 hover:text-red-400">{subcategory.subheading}</h4>
              <ul className="space-y-1 text-gray-600 ">
                {subcategory.brands.map((brand, idx) => (
                  <li key={idx}>
                    <a
                      href={brand.link}
                      className="hover:text-red-400"
                    >
                      {brand.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-2 px-4 w-60">
          <ul className="space-y-1 text-gray-600 ">
            {dropdownData.items.map((item, idx) => (
              <li key={idx}>
                <a href={item.link} className="hover:text-red-400">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default Dropdown;
