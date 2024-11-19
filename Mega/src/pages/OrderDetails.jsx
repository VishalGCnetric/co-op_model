import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const OrderDetails = () => {
  const navigate = useNavigate();
  
  // Define the order statuses and current status index
  const orderStatuses = ['Pending', 'Processing', 'Shipped', 'Delivered'];
  const [currentStatus, setCurrentStatus] = useState(0);

  const order = {
    id: 'SO-00014',
    date: '08/10/2024 05:58 PM',
    total: 2700.00,
    status: 'Shipped',
    products: [
      { id: 1, name: "Women's Striped Crew Neck Sweater", price: 199.00, quantity: 1, image: 'https://levi.in/cdn/shop/files/299310044_01_Style_Shot_49675b35-19d6-4f43-9345-e78c7e54cc9d.jpg?v=1712743290&width=750' },
      { id: 2, name: "Women's Striped Crew Neck Sweater", price: 299.00, quantity: 1, image: 'https://levi.in/cdn/shop/files/A38810004_01_Style_Shot_a1d01ea9-f570-40ad-925b-de2f72e8b705.jpg?v=1712743392&width=750' },
    ],
    payment: {
      subtotal: 2500.00,
      shipping: 200.00,
      tax: 0.00,
      total: 2700.00,
      method: 'test',
    },
    shipping: {
      name: 'Vishal Giri',
      address: 'at post irla, dharashiv, Maharashtra - 413509, India.',
      phone: '09767176108',
      email: 'vishal@cnetric.com',
    },
  };

  // Map order.status to a corresponding index for the tracker
  useEffect(() => {
    const statusIndex = orderStatuses.indexOf(order.status);
    if (statusIndex !== -1) setCurrentStatus(statusIndex);
  }, [order.status]);

  // Tracker Animation Settings
  const progressVariants = {
    initial: { width: '0%' },
    animate: { width: `${(currentStatus + 1) * (100 / orderStatuses.length)}%`, transition: { duration: 1.5, ease: 'easeInOut' } },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mt-4 p-4 px-8"
    >
      {/* Header Section */}
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold">Order Details</h2>
       
      </div>

      {/* Animated Progress Tracker */}
      <div className="mb-4">
        {/* <h3 className="text-lg font-bold mb-2">Order Status</h3> */}
        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-4">
          <motion.div
            className="bg-gradient-to-r from-indigo-500 to-green-500 h-2"
            variants={progressVariants}
            initial="initial"
            animate="animate"
          />
        </div>
        <div className="flex justify-around text-sm">
          {orderStatuses.map((status, index) => (
            <motion.span key={index} className={`text-${index <= currentStatus ? 'orange-600' : 'gray-400'} text-right`}>
              {status}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Order Summary */}
      <div className="border p-4 mb-4 flex justify-between">
        <p>
          Order ID: {order.id} <br /> Placed on: {order.date} <br /> Total: Rs.{order.total.toFixed(2)}
        </p>
        <p className="mt-2">
          Order Status: <span className="text-green-500">{order.status}</span>
        </p>
      </div>

      {/* Product Information */}
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
            <tbody className="border-2 divide-y divide-gray-200">
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


      {/* Payment, Shipping, and Order Data */}
      <motion.div className="grid grid-cols-2 gap-4">
        {/* Payment Information */}
        <motion.div className="border p-4 mb-4">
          <h3 className="font-semibold mb-2">Payment Information</h3>
          <hr />
          <table className="table-auto w-full">
            <tbody>
              <tr>
                <td className="py-2">Subtotal:</td>
                <td className="text-right">Rs.{order.payment.subtotal.toFixed(2)}</td>
              </tr>
              <tr>
                <td className="py-2">Shipping:</td>
                <td className="text-right">Rs.{order.payment.shipping.toFixed(2)}</td>
              </tr>
              <tr>
                <td className="py-2">Tax:</td>
                <td className="text-right">Rs.{order.payment.tax.toFixed(2)}</td>
              </tr>
              <tr className="border-y">
                <td className="font-semibold py-2">Total:</td>
                <td className="text-right font-semibold">Rs.{order.payment.total.toFixed(2)}</td>
              </tr>
              <tr>
                <td className="py-2">Payment Method:</td>
                <td className="text-right">{order.payment.method}</td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        {/* Shipping Information */}
        <motion.div className="border p-4 mb-4">
          <h3 className="font-semibold mb-2">Shipping Address</h3>
          <hr />
          <table className="table-auto w-full">
            <tbody>
              <tr>
                <td className="py-2">Name:</td>
                <td className="text-right">{order.shipping.name}</td>
              </tr>
              <tr>
                <td className="py-2">Address:</td>
                <td className="text-right py-2">{order.shipping.address}</td>
              </tr>
              <tr>
                <td className="py-2">Phone:</td>
                <td className="text-right">{order.shipping.phone}</td>
              </tr>
              <tr>
                <td className="py-2">Email:</td>
                <td className="text-right">{order.shipping.email}</td>
              </tr>
            </tbody>
          </table>
        </motion.div>

       
      </motion.div>
      <div className="text-center mb-8">
      <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-indigo-400 to-indigo-600 text-white px-6 py-2 rounded mt-6 shadow-md hover:shadow-lg transition-all"
          onClick={() => navigate('/account', { state: { tab: 'order' } })}
        >
          Back to Orders
        </motion.button>
          {/* <button className="bg-black text-white px-4 py-2">Request Cancellation</button> */}
        </div>
    </motion.div>
  );
};

export default OrderDetails;
