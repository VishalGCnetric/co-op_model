import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const subcategories = [
  {
    subheading: 'Fashion',
    brands: [
      { 
        name: 'Levis', 
        logo: 'https://levi.in/cdn/shop/files/logo_his_res.png?v=1697785388&width=120', 
        website: 'https://www.levi.in/' 
      },
      { 
        name: 'Justjeans', 
        logo: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Just_Jeans_brand_logo.jpg?20160617115740', 
        website: 'https://www.justjeans.com.au/' 
      },
      { 
        name: 'H&M', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/188px-H%26M-Logo.svg.png', 
        website: 'https://www.hm.com/' 
      },
      { 
        name: 'Zara', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/225px-Zara_Logo.svg.png', 
        website: 'https://www.zara.com/' 
      },
      { 
        name: 'Uniqlo', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Uniqlo_logo_Japanese.svg/330px-Uniqlo_logo_Japanese.svg.png', 
        website: 'https://www.uniqlo.com/' 
      },
    ],
  },
  {
    subheading: 'Sports',
    brands: [
      { 
        name: 'Cosco', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/COSCO_logo.svg/330px-COSCO_logo.svg.png', 
        website: 'https://www.cosco.in/' 
      },
      { 
        name: 'Nike', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/330px-Logo_NIKE.svg.png', 
        website: 'https://www.nike.com/' 
      },
      { 
        name: 'Adidas', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Original_Adidas_logo.svg/180px-Original_Adidas_logo.svg.png', 
        website: 'https://www.adidas.com/' 
      },
      { 
        name: 'Puma', 
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/da/Puma_complete_logo.svg/330px-Puma_complete_logo.svg.png', 
        website: 'https://in.puma.com/' 
      },
      { 
        name: 'Under Armour', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Under_armour_logo.svg/225px-Under_armour_logo.svg.png', 
        website: 'https://www.underarmour.com/' 
      },
    ],
  },
  {
    subheading: 'Beauty',
    brands: [
      { 
        name: 'Maybelline', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Maybelline-Logo.svg/330px-Maybelline-Logo.svg.png', 
        website: 'https://www.maybelline.com/' 
      },
      { 
        name: 'L\'Oréal', 
        logo: 'https://www.lorealparis.co.in/-/media/project/loreal/brand-sites/oap/shared/baseline/navigationext/loreal-paris-black-logo.svg?rev=043a5893295a412fb46ec561cbd31147', 
        website: 'https://www.loreal.com/' 
      },
      { 
        name: 'Sephora', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Sephora_logo.svg/270px-Sephora_logo.svg.png', 
        website: 'https://www.sephora.com/' 
      },
      { 
        name: 'MAC Cosmetics', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/MAC_Cosmetics_logo.png/330px-MAC_Cosmetics_logo.png', 
        website: 'https://www.maccosmetics.com/' 
      },
      { 
        name: 'Clinique', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Clinique_logo.svg/330px-Clinique_logo.svg.png', 
        website: 'https://www.clinique.com/' 
      },
    ],
  },
  {
    subheading: 'Pharma',
    brands: [
      { 
        name: 'Dr Reddy', 
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Dr._Reddy%27s_Laboratories_logo.svg/375px-Dr._Reddy%27s_Laboratories_logo.svg.png', 
        website: 'https://www.drreddys.com/' 
      },
      { 
        name: 'Pfizer', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Pfizer_%282021%29.svg/375px-Pfizer_%282021%29.svg.png', 
        website: 'https://www.pfizer.com/' 
      },
      { 
        name: 'Sun Pharma', 
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Sun_Pharma_logo.svg/180px-Sun_Pharma_logo.svg.png', 
        website: 'https://www.sunpharma.com/' 
      },
      { 
        name: 'Cipla', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Cipla_logo.svg/375px-Cipla_logo.svg.png', 
        website: 'https://www.cipla.com/' 
      },
      { 
        name: 'Glenmark', 
        logo: 'https://glenmark.b-cdn.net/wp-content/uploads/2021/11/glenmark-logo.jpg', 
        website: 'https://www.glenmarkpharma.com/' 
      },
    ],
  },
  {
    subheading: 'Grocery',
    brands: [
      { 
        name: 'Whole Foods', 
        logo: 'https://images.squarespace-cdn.com/content/v1/630492b401e7102ee99cc184/cb0c98e1-1cf6-405d-a8c9-2eb5253e855c/wflogo.png?format=1500w', 
        website: 'https://www.wholefoodsmarket.com/' 
      },
      { 
        name: 'Trader Joe\'s', 
        logo: 'https://www.traderjoes.com/content/dam/trjo/pictures/logo.svg', 
        website: 'https://www.traderjoes.com/' 
      },
      { 
        name: 'BigBasket', 
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/BigBasket_Logo.svg/330px-BigBasket_Logo.svg.png', 
        website: 'https://www.bigbasket.com/' 
      },
      { 
        name: 'Walmart', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/330px-Walmart_logo.svg.png', 
        website: 'https://www.walmart.com/' 
      },
      { 
        name: 'Costco', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Costco_Wholesale_logo_2010-10-26.svg/375px-Costco_Wholesale_logo_2010-10-26.svg.png', 
        website: 'https://www.costco.com/' 
      },
    ],
  },
];


const BrandTabs = () => {
  const [selectedCategory, setSelectedCategory] = useState(subcategories[0]);
const navigate=useNavigate()
  return (
    <div className="container mx-auto px-4 py-16 ">
      <motion.h2 
        className="text-4xl logofont font-bold text-center mb-12 "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Featured Categories  
      </motion.h2>
      
      <motion.div 
        className="flex flex-wrap justify-center gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {subcategories.map((subcategory, index) => (
          <motion.button
            key={index}
            onClick={() => setSelectedCategory(subcategory)}
            className={`text-lg font-semibold py-2 px-6 rounded-full transition-all duration-300 ${
              selectedCategory.subheading === subcategory.subheading
                ? 'bg-gradient-to-r from-indigo-600 to-indigo-400 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-indigo-100'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {subcategory.subheading}
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={selectedCategory.subheading}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {selectedCategory.brands.map((brand, index) => (
            <motion.div 
              key={index} 
              
              className="flex flex-col items-center cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to="/brand">
              <motion.div
                className="bg-white p-4 rounded-lg shadow-lg mb-4"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-32 w-32 object-contain"
                />
              </motion.div>
              <motion.p 
                className="text-center font-bold text-gray-600 "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {brand.name}
              </motion.p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default BrandTabs;