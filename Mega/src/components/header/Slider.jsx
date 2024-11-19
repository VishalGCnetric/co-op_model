import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const brandImages = [
  { name: 'Levis', logo: 'https://via.placeholder.com/400?text=Levis' },
  { name: 'Nike', logo: 'https://via.placeholder.com/400?text=Nike' },
  { name: 'Adidas', logo: 'https://via.placeholder.com/400?text=Adidas' },
  { name: 'Zara', logo: 'https://via.placeholder.com/400?text=Zara' },
  { name: 'Uniqlo', logo: 'https://via.placeholder.com/400?text=Uniqlo' },
];

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Slider = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const imageIndex = Math.abs(page % brandImages.length);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      paginate(1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  return (
    <div className="relative w-full h-[60vh] overflow-hidden bg-gray-100">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute w-full h-full flex items-center justify-center bg-white"
        >
          <img
            src={brandImages[imageIndex].logo}
            alt={brandImages[imageIndex].name}
            className="max-w-full max-h-full object-contain"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {brandImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === imageIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            onClick={() => setPage([index, index > imageIndex ? 1 : -1])}
          />
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 flex items-center">
        <motion.button
          className="bg-black bg-opacity-50 text-white p-2 rounded-r-lg"
          onClick={() => paginate(-1)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft size={24} />
        </motion.button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <motion.button
          className="bg-black bg-opacity-50 text-white p-2 rounded-l-lg"
          onClick={() => paginate(1)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight size={24} />
        </motion.button>
      </div>
      <motion.button
        className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded"
        onClick={() => setIsAutoPlay(!isAutoPlay)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isAutoPlay ? 'Pause' : 'Play'}
      </motion.button>
    </div>
  );
};

export default Slider;