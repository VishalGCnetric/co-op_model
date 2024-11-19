import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const footerData = {
  categories: [
    { name: 'Fashion', brands: ['Levis', 'Justjeans', 'H&M', 'Zara', 'Uniqlo'] },
    { name: 'Sports', brands: ['Cosco', 'Nike', 'Adidas', 'Puma', 'Under Armour'] },
    { name: 'Beauty', brands: ['Maybelline', 'L\'Oréal', 'Sephora', 'MAC Cosmetics', 'Clinique'] },
    { name: 'Pharma', brands: ['Dr Reddy', 'Pfizer', 'Sun Pharma', 'Cipla', 'Glenmark'] },
    { name: 'Grocery', brands: ['Whole Foods', 'Trader Joe\'s', 'BigBasket', 'Walmart', 'Costco'] },
  ],
  ourbrand:['Fashion', 'Sports','Beauty','Pharma','Grocery'],
  contact: ['Corporate Gift Cards', 'Corporate Enquiries', 'Brand Enquiries'],
  About:['Our Mission','Our History','Our People',"Board of Directors",'Senior Leaders','Our Investors'],
  Careers:['Retail Stores','Support Office','Distribution Centre','Job Search','Existing Applicants'],
  OurCommitment: ['People', 'Partners',"Planet", 'Product','Press Releases', 'Affiliate Program'],
  paymentMethods: [
    { name: 'Visa', icon: <FaCcVisa className="text-3xl" /> },
    { name: 'MasterCard', icon: <FaCcMastercard className="text-3xl" /> },
    { name: 'PayPal', icon: <FaCcPaypal className="text-3xl" /> },
  ],
  socialMedia: [
    { platform: 'Facebook', url: 'https://facebook.com' },
    { platform: 'Instagram', url: 'https://instagram.com' },
    { platform: 'Twitter', url: 'https://twitter.com' },
  ],
};

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <footer ref={ref} className="bg-[#36454F] text-gray-100 py-1">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h1 className="text-4xl my-2 font-bold thankyou">Mega Services</h1>
        {/* Upper Section: Categories and Contact Info */}
        <hr className="border-white mb-2" />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 my-8">
          {/* Categories Section */}
          {/* {footerData.categories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h4 className="font-bold mb-2 text-lg">{category.name}</h4>
              <ul className="space-y-1">
                {category.brands.map((brand, idx) => (
                  <li key={idx}>
                    <a href={`/${category.name.toLowerCase()}/${brand.toLowerCase()}`} className="hover:text-gray-400">
                      {brand}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))} */}

        
 {/* Our Brand Section */}
 <div className="space-y-4">
            <h4 className="font-bold mb-2 text-lg">Our featured Category</h4>
            <ul className="space-y-1">
              {footerData.ourbrand.map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-gray-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Our Brand Section */}
          <div className="space-y-4">
            <h4 className="font-bold mb-2 text-lg">About Us</h4>
            <ul className="space-y-1">
              {footerData.About.map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-gray-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
           {/* Our Brand Section */}
           <div className="space-y-4">
            <h4 className="font-bold mb-2 text-lg">Careers</h4>
            <ul className="space-y-1">
              {footerData.Careers.map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-gray-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold mb-2 text-lg">Our Commitment</h4>
            <ul className="space-y-1">
              {footerData.OurCommitment.map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-gray-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
            {/* Contact Section */}
            <div className="space-y-4">
            <h4 className="font-bold mb-2 text-lg">Contact</h4>
            <ul className="space-y-1">
              {footerData.contact.map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-gray-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white mb-2" />

        {/* Lower Section: Social Media and Payment Methods */}
        <div className="mb-8 text-center flex justify-between items-center">
          {/* Social Media */}
          {/* <h1 className="py-2 ">Social Media</h1> */}
          <div className="flex justify-center space-x-8 ">
            {footerData.socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-400"
              >
                {social.platform === 'Facebook' && <FaFacebookF className="text-2xl" />}
                {social.platform === 'Instagram' && <FaInstagram className="text-2xl" />}
                {social.platform === 'Twitter' && <FaTwitter className="text-2xl" />}
              </a>
            ))}
          </div>
          <p className="text-sm text-center">© 2024 Mega Website. All Rights Reserved.
            <br />
            Terms and Condition
          </p>

          {/* Payment Methods */}
          {/* <h1 className="py-2 ">Payment Methods</h1> */}

          <div className="flex justify-center space-x-6">
            {footerData.paymentMethods.map((method, index) => (
              <div key={index} className="text-3xl">
                {method.icon}
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
      </motion.div>
    </footer>
  );
};

export default Footer;
