import React, { useState } from 'react';
import { motion } from 'framer-motion';

const OrderSummary = () => {
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [showDetails, setShowDetails] = useState(true);

  const subtotal = 498.00;
  const tax = 0.00;
  const shipping = 0.00;

  const applyCoupon = () => {
    // This is a placeholder function. In a real application, you would
    // validate the coupon code against a backend service.
    if (couponCode.toLowerCase() === 'discount10') {
      setDiscount(49.80); // 10% discount
    } else {
      setDiscount(0);
      alert('Invalid coupon code');
    }
  };

  const total = subtotal - discount + tax + shipping;

  return (
    <div className="max-w-md mx-auto p-6  shadow-md rounded-lg">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          className="w-2/3 px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={applyCoupon}
          className="w-1/3  bg-gradient-to-r from-indigo-400 to-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-orange-500 transition duration-200"
        >
          Apply
        </motion.button>
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">Order Summary</h2>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-blue-500 hover:text-blue-700"
          >
            {showDetails ? 'Hide Details' : 'Show Details'}
          </button>
        </div>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between mb-1">
              <span>Subtotal (2 items)</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between mb-1 text-green-600">
                <span>Discount</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between mb-1">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
          </motion.div>
        )}
        <div className="flex justify-between font-bold mt-2 pt-2 border-t">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;