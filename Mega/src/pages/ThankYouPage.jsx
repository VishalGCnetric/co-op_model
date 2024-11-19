import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { CheckCircle } from 'lucide-react';

const ThankYouPage = () => {
  const navigate = useNavigate();

  const order = {
    id: 'SO-00014',
    date: '08/10/2024 05:58 PM',
    total: 4700.00,
    status: 'Pending',
    products: [
      { id: 1, name: "Women's Striped Crew Neck Sweater", price: 199.00, quantity: 1, image: 'https://levi.in/cdn/shop/files/299310044_01_Style_Shot_49675b35-19d6-4f43-9345-e78c7e54cc9d.jpg?v=1712743290&width=750' },
      { id: 2, name: "Women's Striped Crew Neck Sweater", price: 299.00, quantity: 1, image: 'https://levi.in/cdn/shop/files/A38810004_01_Style_Shot_a1d01ea9-f570-40ad-925b-de2f72e8b705.jpg?v=1712743392&width=750' },
    ],
    payment: {
      subtotal: 4500.00,
      shipping: 200.00,
      tax: 0.00,
      total: 4700.00,
      method: 'Credit Card',
    },
    shipping: {
      name: 'Vishal Giri',
      address: 'at post irla, dharashiv, Maharashtra - 413509, India.',
      phone: '09767176108',
      email: 'vishal@cnetric.com',
    },
  };

  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen  p-4"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="bg-white p-8 rounded-lg shadow-lg text-center w-full md:w-3/4 lg:w-1/2"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-4"
        >
          <CheckCircle className="w-16 h-16 text-green-500" />
        </motion.div>
        <h1 className="text-3xl font-bold mb-4 thankyou">Thank You for Your Order!</h1>
        <p className="text-xl mb-6 thankyou">Your payment was successful.</p>

        {/* Product Table */}
        <h2 className="text-xl font-bold py-4 text-left border-b">Order Items</h2>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2">Color</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Quantity</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {order.products.map((product, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 flex items-center gap-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <span>{product.name}</span>
                  </td>
                  <td className="px-4 py-2">{product.color}</td>
                  <td className="px-4 py-2">Rs.{product.price.toFixed(2)}</td>
                  <td className="px-4 py-2">{product.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Order Details */}
        <h2 className="text-xl font-bold py-4 text-left border-b">Order Details</h2>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-2 font-semibold">Order ID</td>
                <td className="px-4 py-2">{order.id}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold">Date</td>
                <td className="px-4 py-2">{order.date}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold">Total</td>
                <td className="px-4 py-2">Rs.{order.total.toFixed(2)}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold">Payment Method</td>
                <td className="px-4 py-2">{order.payment.method}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold">Shipping Address</td>
                <td className="px-4 py-2">{order.shipping.name}, {order.shipping.address}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold">Contact</td>
                <td className="px-4 py-2">{order.shipping.phone}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold">Email</td>
                <td className="px-4 py-2">{order.shipping.email}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-indigo-400 to-indigo-600 text-white px-6 py-2 rounded mt-6 shadow-md hover:shadow-lg transition-all heading"
          onClick={() => navigate('/account', { state: { tab: 'order' } })}
        >
          View Order History
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ThankYouPage;
