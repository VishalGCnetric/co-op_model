import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Hook for IntersectionObserver

const categories = [
  {
    title: 'New',
    subtitle: 'JUST ADDED',
    description: 'Shop the latest of the season',
    image: 'https://palo-alto-theme-vibrant.myshopify.com/cdn/shop/files/E-COM-5-727_3000x_8554d774-d118-402d-839f-1d2eaa901c6e.jpg?v=1692365604&width=460',
  },
  {
    title: 'Fall/Winter',
    subtitle: 'LAYERS TO LOVE',
    description: 'Stay warm & bundle up in style',
    image: 'https://palo-alto-theme-vibrant.myshopify.com/cdn/shop/files/E-COM-5-737_33bee712-31c0-47d2-857f-322e21638b72.jpg?v=1704210324&width=400',
  },
  {
    title: 'Dresses',
    subtitle: 'SLEEK STYLES',
    description: 'A look for every occasion',
    image: 'https://palo-alto-theme-vibrant.myshopify.com/cdn/shop/products/E-COM-5-75_3000x_e8aec072-e86b-4707-85f2-d5662c4e912b.jpg?v=1689095518&width=400',
  },
  {
    title: 'Bestselling',
    subtitle: 'MOST-WANTED',
    description: 'Your favorites, selling fast!',
    image: 'https://palo-alto-theme-vibrant.myshopify.com/cdn/shop/products/montpellier-camel-leather-pants-pants-alohas-661878_3000x_bb4ae076-57b3-456f-acfe-cacb7318587e.jpg?v=1679320324&width=400',
  },
];

const CategorySlider = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 }); // Track if the component is in view

  useEffect(() => {
    if (inView) {
      // Start the animation when the component is in view
      controls.start('visible');
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Start with opacity 0 and move down by 50px
    visible: { opacity: 1, y: 0 }, // Animate to opacity 1 and back to original position
  };

  return (
    <div ref={ref} className="container px-8   ">
      
      <motion.h2
        className="text-center heading text-black text-3xl
         font-bold mb-10"
        initial={{ opacity: 100 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        Shop by Category
      </motion.h2>
      <motion.div
        className="flex  space-x-8 pb-10 mx-auto"
        initial="hidden"
        animate={controls}
        variants={cardVariants}
        transition={{ duration: 0.8, staggerChildren: 0.2 }}
      >
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className="min-w-[280px] h-[400px] rounded-xl relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={cardVariants} // Apply motion variants
            style={{
              backgroundImage: `url(${category.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute bottom-5 left-5 text-white">
              <p className="text-sm">{category.subtitle}</p>
              <h3 className="text-2xl font-bold">{category.title}</h3>
              <p className="text-sm">{category.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CategorySlider;
