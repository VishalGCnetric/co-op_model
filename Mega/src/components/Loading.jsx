import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <motion.div
      className="flex justify-center items-center min-h-screen "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex space-x-4">
        {/* Animated Shape */}
        <motion.div
          className="w-16 h-16 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg"
          animate={{
            borderRadius: ['20%', '50%', '0%', '20%'], // Morph between square, circle, and rotated shape
            rotate: [0, 360],  // Full rotation
            scale: [1, 1.5, 1],  // Pulsing effect
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />
      </div>
    </motion.div>
  );
};

export default Loading;
