import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Minus, Plus } from 'lucide-react';
import ProductSlider from '../components/HomeComponent/ProductSlider';
import OrderSummary from '../components/Checkout/OrderSummary';
import { useNavigate } from 'react-router-dom';

const AnimatedShoppingCart = () => {
  const navigate=useNavigate();
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Women's Striped Crew Neck Sweater", price: 199.00, quantity: 1, image: 'https://levi.in/cdn/shop/files/299310044_01_Style_Shot_49675b35-19d6-4f43-9345-e78c7e54cc9d.jpg?v=1712743290&width=750' },
    { id: 2, name: "Women's Striped Crew Neck Sweater", price: 299.00, quantity: 1, image: 'https://levi.in/cdn/shop/files/A38810004_01_Style_Shot_a1d01ea9-f570-40ad-925b-de2f72e8b705.jpg?v=1712743392&width=750' },
  ]);

  const updateQuantity = (id, newQuantity) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
                <h1 className="text-4xl font-bold mb-4 heading">Welcome to Cart Page</h1>

      <div className="flex gap-4">
      <table className="w-[65%]">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">Items</th>
            <th className="text-center p-2">Quantity</th>
            <th className="text-right p-2">Amount</th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody>
          <AnimatePresence>
            {cartItems.map(item => (
              <motion.tr
                key={item.id}
                layout
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="border-b border-black"
              >
                <td className="p-2">
                  <div className="flex items-center">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover mr-4 rounded" />
                    <div>
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1"
                    >
                      <Minus size={20} />
                    </motion.button>
                    <motion.span
                      key={item.quantity}
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      className="mx-2 w-8 text-center"
                    >
                      {item.quantity}
                    </motion.span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1"
                    >
                      <Plus size={20} />
                    </motion.button>
                  </div>
                </td>
                <td className="p-2 text-right">${(item.price * item.quantity).toFixed(2)}</td>
                <td className="p-2">
                  <motion.button
                    whileHover={{ scale: 1.1, color: '#ef4444' }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => removeItem(item.id)}
                    className="text-gray-500 hover:text-red-500"
                  >
                    <Trash2 size={20} />
                  </motion.button>
                </td>
              </motion.tr>
            ))}
          </AnimatePresence>
        </tbody>
      </table>
      <div className="w-[35%]"><OrderSummary/>
      <div className="mt-4">
        {/* <p className="text-lg">Subtotal ({cartItems.length} Items): ${subtotal.toFixed(2)}</p> */}
        <p className="text-sm text-gray-600">Shipping and taxes will be calculated at checkout</p>
      </div>
      
      {cartItems.length === 0 && (
        <p className="text-center text-gray-500 mt-4">Your shopping cart is empty.</p>
      )}
      
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full  bg-gradient-to-r from-indigo-400 to-indigo-600 text-white py-3 rounded-lg font-semibold mt-4"
        disabled={cartItems.length === 0}
        onClick={()=>{navigate("/auth")}}
      >
        Checkout
      </motion.button>
      </div>
      </div>
      
    </div>
  );
};

export default AnimatedShoppingCart;