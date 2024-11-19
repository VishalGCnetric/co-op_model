import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

function BannerSlider({ banners }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set up interval for automatic rotation every 500ms
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [banners.length]);

  // Slice the banners array to display only one banner at a time
  const visibleBanners = banners.slice(currentIndex, currentIndex + 1);

  return (
    <div className="relative w-full h-64 overflow-hidden">
      <div className="flex space-x-4 p-4">
        {visibleBanners.map((banner) => (
          <motion.div
            key={banner.id}
            className="flex-shrink-0 w-full h-64 rounded-lg overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }} // 500ms transition duration
          >
            <img src={banner.url} alt={banner.alt} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default BannerSlider;
