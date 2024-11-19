import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AboutUsSection = () => {
  return (
    <div className="container mx-auto  px-4 py-12 ">
      <div className="flex flex-col md:flex-row items-center ">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
        >
          <h2 className="text-3xl logofont font-bold mb-4 ">Who We Are</h2>
          <h3 className="text-xl text-gray-600 mb-4">There Are Many Variations</h3>
          <p className="text-gray-700 mb-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur.
          </p>
          <h3 className="text-2xl logofont font-semibold mb-4">Why Choose Us</h3>
          <ul className="space-y-2 text-gray-600">
            {['Lorem ipsum dolor sit amet', 'Sed ut perspiciatis unde', 'Nemo enim ipsam voluptatem'].map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center"
              >
                <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <AnimatePresence>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
             <motion.div
                className=" "
                whileHover={{ scale: 1.05, rotate: 4 }}
                whileTap={{ scale: 0.95 }}
              >
            <img 
              src="https://www.4damstheme.com/html/Dreamon/images/about/1.jpg" 
              alt="Team working together" 
              className="rounded-lg shadow-lg"
            />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AboutUsSection;