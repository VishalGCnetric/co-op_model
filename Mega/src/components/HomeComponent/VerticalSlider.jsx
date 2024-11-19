import React, { useState, useEffect } from 'react';

const banners = [
  {
    imageSrc: 'https://palo-alto-theme-vibrant.myshopify.com/cdn/shop/files/icon-cardigan-nutmeg-brown-cardigans-alohas-931543_1_ca97e4c4-fddb-46df-866c-363aea5fff94.jpg?v=1727708169&width=1950',
  },
  {
    imageSrc: 'https://palo-alto-theme-vibrant.myshopify.com/cdn/shop/files/wer_66bedac6-cee9-4ee6-bf1b-56223e861b2d.jpg?v=1700231422&width=1950',
  },
  {
    imageSrc: 'https://essence-theme-bold.myshopify.com/cdn/shop/files/AdobeStock_313314948.jpg?v=1693913088&width=2048',
  }
];

const ShoeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + banners.length) % banners.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
  };

  return (
    <div className="relative h-[80vh] overflow-hidden mb-10">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity h-[80vh]  duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${banner.imageSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'cover',
          }}
        >
          {/* <div className="absolute inset-0 flex items-center justify-end">
            <div className="text-white text-right max-w-lg pr-16 h-full"></div>
          </div> */}
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-600 bg-opacity-50 text-white p-3 rounded-full hover:bg-gray-700"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-600 bg-opacity-50 text-white p-3 rounded-full hover:bg-gray-700"
      >
        &#8594;
      </button>

      {/* Dots */}
      <div className="absolute right-1/2 bottom-8 transform translate-x-1/2 flex flex-row space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full ${
              index === currentSlide
                ? 'w-2 h-2 bg-gray-400 scale-110'
                : 'w-2 h-2 bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ShoeSlider;
