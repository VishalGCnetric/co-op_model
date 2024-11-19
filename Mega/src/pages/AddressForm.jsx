import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AddressForm = ({ onSave }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address1: '',
    city: '',
    state: '',
    country: 'United States',
    postalCode: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    localStorage.setItem('address', JSON.stringify(formData));
    onSave();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="min-h-screen bg-[#f8f2ec] flex flex-col items-center py-10"
    >
      <div className="w-full max-w-md bg-white shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Add a New Address</h1>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="p-2 border"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="p-2 border"
          />
          <input
            type="text"
            name="address1"
            placeholder="Address1"
            value={formData.address1}
            onChange={handleChange}
            className="p-2 border col-span-2"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="p-2 border"
          />
          <input
            type="text"
            name="state"
            placeholder="State/Province"
            value={formData.state}
            onChange={handleChange}
            className="p-2 border"
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Postal/ZIP Code"
            value={formData.postalCode}
            onChange={handleChange}
            className="p-2 border"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="p-2 border col-span-2"
          />
        </div>

        <button
          onClick={handleSave}
          className="bg-black text-white w-full py-2 mt-4"
        >
          Add Address
        </button>
      </div>
    </motion.div>
  );
};

export default AddressForm;
