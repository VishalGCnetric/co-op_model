import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';

const partners = [
  { name: 'TechCorp',category: 'Technology', img: 'https://img.freepik.com/free-vector/gradient-technology-logo_52683-8565.jpg?ga=GA1.1.1334190548.1711972000&semt=ais_hybrid'},
  { name: 'EcoGreen', category: 'Environment' ,img:"https://img.freepik.com/free-vector/logo-with-four-leaves_1071-144.jpg?size=626&ext=jpg&ga=GA1.1.1334190548.1711972000&semt=ais_hybrid"},
  { name: 'HealthPlus', category: 'Healthcare',img:"https://img.freepik.com/free-vector/heart-icon-healthcare-symbol-flat-design-vector-illustration_53876-140627.jpg?ga=GA1.1.1334190548.1711972000&semt=ais_hybrid" },
  { name: 'EduLearn', category: 'Education',img:"https://img.freepik.com/free-vector/school-logo-template_23-2149713033.jpg?ga=GA1.1.1334190548.1711972000&semt=ais_hybrid" },
  { name: 'FinanceHub', category: 'Finance',img:"https://img.freepik.com/free-vector/gradient-hub-design-template_23-2149837176.jpg?ga=GA1.1.1334190548.1711972000&semt=ais_hybrid" },
  { name: 'FoodDelight', category: 'Food & Beverage',img:"https://img.freepik.com/premium-photo/bright-yellow-orange-food-banner-with-circles_1070876-29163.jpg?ga=GA1.1.1334190548.1711972000&semt=ais_hybrid" },
];

const PartnerCard = ({ name, category,img, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-60">
        <img 
          src={img} 
          alt={`${name} logo`} 
          className="w-full h-full object-content"
        />
        {isHovered && (
          <motion.div 
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <ExternalLink className="text-white" size={24} />
          </motion.div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{name}</h3>
        <p className="text-sm text-gray-600 mb-2">{category}</p>
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className={i < 4 ? "text-yellow-400" : "text-gray-300"} />
          ))}
          <span className="ml-2 text-sm text-gray-600">4.0</span>
        </div>
      </div>
    </motion.div>
  );
};

const PartnerShowcase = () => {
  return (
    <div className=" py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 logofont ">Our Trusted Partners</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <PartnerCard key={index} {...partner} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerShowcase;