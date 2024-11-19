import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useCart } from '../../contextApi/CartContext';


const AddToCartModal = ({ isOpen, onClose, cartItem, recommendedProducts }) => {
    const { isCartOpen, closeCart ,openCart} = useCart(); // Get state and action for cart modal

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">You've Got Great Taste <span role="img" aria-label="shopping cart">🛒</span></h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-4">Congrats! You get free standard shipping.</p>
          <div className="  flex items-center justify-between mb-6 border-t-2 pt-2">
          <div className="w-3/4 p-2 ">

          <div className="w-full flex items-center justify-start mb-6  ">
            <div className="flex w-2/3 items-center  p-2">
              <img src={cartItem.image} alt={cartItem.name} className="w-20 h-20 object-cover mr-4" />
              <div>
                <h3 className="font-semibold">{cartItem.name}</h3>
                <p className="text-sm text-gray-600">{cartItem.color}</p>
                <p className="text-sm text-gray-600">Size {cartItem.size}</p>
              </div>
            </div>
            <p className="font-semibold">Price: ${cartItem.price}</p>
          </div>
          
          {/* <div className="flex justify-start gap-[64%] items-center mb-6">
            <p className="font-semibold">Subtotal</p>
            <p className="font-semibold">${cartItem.price}</p>
          </div> */}
          </div>
          <div className="grid grid-cols-1 gap-4 mb-6">
            <button className="bg-black text-xs text-white py-2 px-4  font-semibold" onClick={()=>{
                openCart()
                onClose()
            }}>VIEW CART </button>
            <button className="border text-xs border-black text-black py-2 px-4 font-semibold" onClick={onClose}>CONTINUE SHOPPING</button>
          </div>
          </div>
          <div className='border-t-2 pt-2'>
            <h3 className="font-semibold mb-4">You Might Also Like</h3>
            <div className="grid grid-cols-4 gap-4 ">
              {recommendedProducts.map((product, index) => (
                <div key={index} className="text-center">
                  <img src={product.image} alt={product.name} className="w-full h-24 object-cover mb-2" />
                  <p className="text-sm font-semibold">{product.name}</p>
                  <p className="text-sm text-gray-600">${product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};



export default AddToCartModal;