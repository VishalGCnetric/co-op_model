import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';

const CompanyBanner = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        <img
          src="https://media.istockphoto.com/id/1446934118/photo/happy-business-man-listening-to-a-discussion-in-an-office.jpg?b=1&s=612x612&w=0&k=20&c=6CGz0oF0bra0Yiyn0PR2Sy31cA3CidlbsZlYZJx1nxg="
          alt="Company background"
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      {/* Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-start justify-center text-white px-10 md:px-20 lg:px-32">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Welcome To Our <span className="text-indigo-400">Company</span>
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We Are Professional
        </motion.p>
        
        {/* Social Media Icons */}
        <motion.div 
          className="flex space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn, FaPinterestP].map((Icon, index) => (
            <motion.a
              key={index}
              href="#"
              className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CompanyBanner;