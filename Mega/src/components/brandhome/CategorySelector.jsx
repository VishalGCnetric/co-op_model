import React from 'react';

function Categories({ categories }) {
  return (
    <div className="container mx-auto py-8">
              <h2 className="text-2xl font-bold text-center mb-6">Our favourite</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md"
          >
            {/* Category Image */}
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-96 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            {/* Overlay Text */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-white text-lg font-bold text-center px-4">
                {category.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Categories;