import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { AiOutlineUser } from "react-icons/ai";

// Dropdown Data with Subheadings for "Our Brand"
const dropdownData = {
  brand: {
    heading: 'Our Brand',
    subcategories: [
      {
        subheading: 'Fashion',
        brands: [
          { label: 'Levis', link: '/fashion/levis' },
          { label: 'Justjeans', link: '/fashion/justjeans' },
          { label: 'H&M', link: '/fashion/h&m' },
          { label: 'Zara', link: '/fashion/zara' },
          { label: 'Uniqlo', link: '/fashion/uniqlo' },
        ],
      },
      {
        subheading: 'Sports',
        brands: [
          { label: 'Cosco', link: '/sports/cosco' },
          { label: 'Nike', link: '/sports/nike' },
          { label: 'Adidas', link: '/sports/adidas' },
          { label: 'Puma', link: '/sports/puma' },
          { label: 'Under Armour', link: '/sports/under-armour' },
        ],
      },
      {
        subheading: 'Beauty',
        brands: [
          { label: 'Maybelline', link: '/beauty/maybelline' },
          { label: 'L\'Oréal', link: '/beauty/loreal' },
          { label: 'Sephora', link: '/beauty/sephora' },
          { label: 'MAC Cosmetics', link: '/beauty/mac' },
          { label: 'Clinique', link: '/beauty/clinique' },
        ],
      },
      {
        subheading: 'Pharma',
        brands: [
          { label: 'Dr Reddy', link: '/pharma/dr-reddy' },
          { label: 'Pfizer', link: '/pharma/pfizer' },
          { label: 'Sun Pharma', link: '/pharma/sun-pharma' },
          { label: 'Cipla', link: '/pharma/cipla' },
          { label: 'Glenmark', link: '/pharma/glenmark' },
        ],
      },
      {
        subheading: 'Grocery',
        brands: [
          { label: 'Whole Foods', link: '/grocery/whole-foods' },
          { label: 'Trader Joe\'s', link: '/grocery/trader-joes' },
          { label: 'BigBasket', link: '/grocery/bigbasket' },
          { label: 'Walmart', link: '/grocery/walmart' },
          { label: 'Costco', link: '/grocery/costco' },
        ],
      },
    ],
  },
  commitment: {
    heading: 'Our Commitment',
    items: [
      { label: 'People', link: '/commitment/people' },
      { label: 'Partners', link: '/commitment/partners' },
      { label: 'Planet', link: '/commitment/planet' },
      { label: 'Product', link: '/commitment/product' },
    ],
  },
  about: {
    heading: 'About Us',
    items: [
      { label: 'Our History', link: '/about/history' },
      { label: 'Our People', link: '/about/people' },
      { label: 'Board of Directors', link: '/about/board' },
      { label: 'Senior Leaders', link: '/about/leaders' },
      { label: 'Our Investors', link: '/about/investors' },
      { label: 'PMV', link: '/about/pmv' },
    ],
  },
  careers: {
    heading: 'Careers',
    items: [
      { label: 'Retail Stores', link: '/careers/retail-stores' },
      { label: 'Support Office', link: '/careers/support-office' },
      { label: 'Distribution Centre', link: '/careers/distribution' },
      { label: 'Job Search', link: '/careers/job-search' },
      { label: 'Existing Applicants', link: '/careers/applicants' },
    ],
  },
  contact: {
    heading: 'Contact',
    items: [
      { label: 'Corporate Gift Cards', link: '/contact/gift-cards' },
      { label: 'Just Group Enquiries', link: '/contact/group-enquiries' },
      { label: 'Brand Enquiries', link: '/contact/brand-enquiries' },
    ],
  },
};


const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [profileDropdown, setProfileDropdown] = useState(false);

  const handleMouseEnter = (dropdownName) => setActiveDropdown(dropdownName);
  const handleMouseLeave = () => setActiveDropdown(null);

  const toggleProfileDropdown = () => setProfileDropdown(!profileDropdown);

  // Function to scroll to the 'store' section
  const scrollToStore = () => {
    const storeSection = document.getElementById('store');
    if (storeSection) {
      storeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <div className="text-4xl font-bold thankyou text-indigo-400">
          <Link to="/">Mega Services</Link>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8 relative">
          <div
            className=""
            onClick={scrollToStore}
          >
            <div className="hover:text-gray-700 px-2 font-medium text-lg cursor-pointer">
              Go to Store
            </div>
          </div>

          <div
            onMouseEnter={() => handleMouseEnter('commitment')}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <a href="#" className="hover:text-gray-700 px-2 py-2 font-medium text-lg">
              Our Commitment
            </a>
            {activeDropdown === 'commitment' && (
              <Dropdown isOpen={activeDropdown === 'commitment'} dropdownData={dropdownData.commitment} />
            )}
          </div>
 

          {/* About Us Dropdown */}
          <div
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <a href="#" className="hover:text-gray-700 px-2 py-2 font-medium text-lg">
              About Us
            </a>
            {activeDropdown === 'about' && (
              <Dropdown isOpen={activeDropdown === 'about'} dropdownData={dropdownData.about} />
            )}
          </div>
         

          {/* Careers Dropdown */}
          <div
            onMouseEnter={() => handleMouseEnter('careers')}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <a href="#" className="hover:text-gray-700 px-2 py-2 font-medium text-lg">
              Careers
            </a>
            {activeDropdown === 'careers' && (
              <Dropdown isOpen={activeDropdown === 'careers'} dropdownData={dropdownData.careers} />
            )}
          </div>

          {/* Contact Dropdown */}
          <div
            onMouseEnter={() => handleMouseEnter('contact')}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <a href="#" className="hover:text-gray-700 px-2 py-2 font-medium text-lg">
              Contact
            </a>
            {activeDropdown === 'contact' && (
              <Dropdown isOpen={activeDropdown === 'contact'} dropdownData={dropdownData.contact} />
            )}
          </div>
          </div>

         
       
        <div className="flex space-x-4 items-center">
          {/* Profile Icon with Dropdown */}
          {/* <div className="relative">
            <AiOutlineUser
              className="text-2xl cursor-pointer hover:text-gray-700"
              onClick={toggleProfileDropdown}
            />
            {profileDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-40"
              >
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/account">Account</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <button>Logout</button>
                  </li>
                </ul>
              </motion.div>
            )}
          </div> */}

          {/* Cart Icon */}
          {/* <Link to="/cart" className="relative">
            <MdOutlineShoppingCart className="text-2xl cursor-pointer hover:text-gray-700" />
          </Link> */}
        </div>
        </div>
    </nav>
  );
};

export default Navbar;