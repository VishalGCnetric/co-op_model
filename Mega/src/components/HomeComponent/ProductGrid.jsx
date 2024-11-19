import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Sample products data
const products = [
  {
    title: 'Belinda Shirt',
    price: '$220.00',
    image: 'https://palo-alto-theme-vibrant.myshopify.com/cdn/shop/files/ECOM-5-722_1296x_e9d97e2a-4991-485a-ae6e-5ee149e469c9.jpg?v=1712930862&width=240',
  },
  {
    title: 'Tonya Pants',
    price: '$195.00',
    image: 'https://palo-alto-theme-vibrant.myshopify.com/cdn/shop/files/ECOM-5-722_1296x_e9d97e2a-4991-485a-ae6e-5ee149e469c9.jpg?v=1712930862&width=240',
  },
  {
    title: 'Floral Dress',
    price: '$320.00',
    image: 'https://palo-alto-theme-vibrant.myshopify.com/cdn/shop/files/ECOM-5-730_900x_ec4ffa9a-2458-445e-b0e6-1bb8e70874ec.jpg?v=1712931017&width=240',
  },
  {
    title: 'Casual Hat',
    price: '$95.00',
    image: 'https://palo-alto-theme-vibrant.myshopify.com/cdn/shop/files/ECOM-5-730_900x_ec4ffa9a-2458-445e-b0e6-1bb8e70874ec.jpg?v=1712931017&width=240',
  },
];


const ShopTheLook = () => {
  // Controls for animation
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();

  // Intersection Observer hooks for each product
  const [ref1, inView1] = useInView({ threshold: 0.2 });
  const [ref2, inView2] = useInView({ threshold: 0.2 });
  const [ref3, inView3] = useInView({ threshold: 0.2 });
  const [ref4, inView4] = useInView({ threshold: 0.2 });

  // Trigger animations when in view
  useEffect(() => {
    if (inView1) controls1.start('visible');
    if (inView2) controls2.start('visible');
    if (inView3) controls3.start('visible');
    if (inView4) controls4.start('visible');
  }, [inView1, inView2, inView3, inView4]);

  // Variants for each effect
  const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  const slideInLeft = { hidden: { x: -100, opacity: 0 }, visible: { x: 0, opacity: 1 } };
  const slideInRight = { hidden: { x: 100, opacity: 0 }, visible: { x: 0, opacity: 1 } };
  const zoomIn = { hidden: { scale: 0.8, opacity: 0 }, visible: { scale: 1, opacity: 1 } };

  return (
    <div className="flex container mx-auto  mb-10 py-10 border">
      {/* Left Section - Big Image */}
      <motion.div className="w-1/2 pt-4 px-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <img
          className="rounded-lg object-cover"
          src="https://palo-alto-theme-vibrant.myshopify.com/cdn/shop/files/48eda30ae3edad0c44a9defd9ca8d1f862c6b09d.jpg?v=1712930559&width=900"
          alt="Main Look"
        />
      </motion.div>

      {/* Right Section - Products in 2-column grid */}
      <div className="w-1/2 pl-10">
        <h2 className="text-2xl font-bold mb-1 heading">Shop the Look</h2>
        <p className="text-gray-600 mb-1">Polished, go-to look for the season.</p>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-2">
          {/* Product 1 */}
          <motion.div
            ref={ref1}
            initial="hidden"
            animate={controls1}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <img src={products[0].image} alt={products[0].title} className="rounded-lg mb-2 " />
            <h3 className="font-bold">{products[0].title}</h3>
            <p>{products[0].price}</p>
          </motion.div>

          {/* Product 2 */}
          {/* <motion.div
            ref={ref2}
            initial="hidden"
            animate={controls2}
            variants={slideInLeft}
            transition={{ duration: 0.6 }}
          >
            <img src={products[1].image} alt={products[1].title} className="rounded-lg mb-2" />
            <h3 className="font-bold">{products[1].title}</h3>
            <p>{products[1].price}</p>
          </motion.div> */}

          {/* Product 3 */}
          {/* <motion.div
            ref={ref3}
            initial="hidden"
            animate={controls3}
            variants={slideInRight}
            transition={{ duration: 0.6 }}
          >
            <img src={products[2].image} alt={products[2].title} className="rounded-lg mb-2" />
            <h3 className="font-bold">{products[2].title}</h3>
            <p>{products[2].price}</p>
          </motion.div> */}

          {/* Product 4 */}
          <motion.div
            ref={ref4}
            initial="hidden"
            animate={controls4}
            variants={zoomIn}
            transition={{ duration: 0.6 }}
          >
            <img src={products[3].image} alt={products[3].title} className="rounded-lg mb-2" />
            <h3 className="font-bold">{products[3].title}</h3>
            <p>{products[3].price}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ShopTheLook;
