import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const ProductSlider = ({heading}) => {
  const products = [
    { id: 1, name: 'Beatle Bands', price: 189, img: 'https://palo-alto-theme-vibrant.myshopify.com/cdn/shop/files/E-COM-5-727_3000x_8554d774-d118-402d-839f-1d2eaa901c6e.jpg?v=1692365604&width=460' },
    { id: 2, name: 'Black Bearded Beast', price: 259, img: 'https://palo-alto-theme-vibrant.myshopify.com/cdn/shop/products/E-COM-5-75_3000x_e8aec072-e86b-4707-85f2-d5662c4e912b.jpg?v=1689095518&width=400' },
    { id: 3, name: 'Black Buds', price: 210, img: 'https://palo-alto-theme-vibrant.myshopify.com/cdn/shop/files/E-COM-5-737_33bee712-31c0-47d2-857f-322e21638b72.jpg?v=1704210324&width=400' },
    { id: 4, name: 'Blue ninja headphone', price: 289, img: 'https://palo-alto-theme-vibrant.myshopify.com/cdn/shop/files/E-COM-5-727_3000x_8554d774-d118-402d-839f-1d2eaa901c6e.jpg?v=1692365604&width=460' },
    { id: 1, name: 'Beatle Bands', price: 189, img: 'https://palo-alto-theme-vibrant.myshopify.com/cdn/shop/files/E-COM-5-727_3000x_8554d774-d118-402d-839f-1d2eaa901c6e.jpg?v=1692365604&width=460' },
    { id: 2, name: 'Black Bearded Beast', price: 259, img: 'https://palo-alto-theme-vibrant.myshopify.com/cdn/shop/products/E-COM-5-75_3000x_e8aec072-e86b-4707-85f2-d5662c4e912b.jpg?v=1689095518&width=400' },
    { id: 3, name: 'Black Buds', price: 210, img: 'https://palo-alto-theme-vibrant.myshopify.com/cdn/shop/files/E-COM-5-737_33bee712-31c0-47d2-857f-322e21638b72.jpg?v=1704210324&width=400' },
    { id: 4, name: 'Blue ninja headphone', price: 289, img: 'https://palo-alto-theme-vibrant.myshopify.com/cdn/shop/files/E-COM-5-727_3000x_8554d774-d118-402d-839f-1d2eaa901c6e.jpg?v=1692365604&width=460' },
  ];

  // Slider settings with custom arrows
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Variants for motion
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto pb-20  ">
      <motion.h1 className="my-4 text-3xl text-center font-bold heading">{heading ||"Trending this Season"}</motion.h1>
      <Slider {...settings}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} cardVariants={cardVariants} />
        ))}
      </Slider>
    </div>
  );
};

// Custom next arrow component
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gradient-to-r from-orange-500 to-pink-500 z-10"
  >
    &#9654;
  </button>
);

// Custom prev arrow component
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gradient-to-r from-orange-500 to-pink-500 z-10"
  >
    &#9664;
  </button>
);

// Product card component with intersection observer and framer motion
const ProductCard = ({ product, cardVariants }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% of the card is visible
  });

  return (
    <motion.div
      ref={ref}
      className="px-4"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={cardVariants}
      transition={{ duration: 0.5 }}
    >
      <div className="relative group ">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-gray-800 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-lg mb-4">${product.price.toFixed(2)}</p>
          <Link to="/products/1">
          <button className="bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-2 rounded " >
            Quick View
          </button>
          </Link>
        </div>
      
      <div className="mt-4 text-center">
        <h3 className="text-md font-medium text-gray-900">{product.name}</h3>
        <p className="text-lg font-semibold text-indigo-900">
          ${product.price.toFixed(2)}
        </p>
      </div>
      </div>
    </motion.div>
  );
};

export default ProductSlider;
