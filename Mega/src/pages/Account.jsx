import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Dummy data for orders
const dummyOrders = [
  { id: 1, date: '2023-10-15', total: 125.99, status: 'Delivered' },
  { id: 2, date: '2023-11-02', total: 79.50, status: 'Processing' },
  { id: 3, date: '2023-11-20', total: 199.99, status: 'Shipped' },
];

// Dummy data for addresses
const dummyAddresses = [
  { id: 1, name: 'John Doe', country: 'Vietnam', isDefault: true },
];

const AccountDashboard = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const navigate=useNavigate()

  const handleViewOrderDetails = (order) => {
    navigate(`/order/${order.id}`)
    // setSelectedOrder(order);
    // setCurrentView('orderDetails');
  };

  const Navigation = () => (
    <nav className="space-y-2">
      <button 
        className={`w-full text-left py-2 px-4 ${currentView === 'dashboard' ? 'bg-gradient-to-r from-indigo-400 to-indigo-600 text-white' : 'hover:bg-gray-100'}`}
        onClick={() => setCurrentView('dashboard')}
      >
        Dashboard
      </button>
      <button 
        className={`w-full text-left py-2 px-4 ${currentView === 'addresses' ? 'bg-gradient-to-r from-indigo-400 to-indigo-600 text-white' : 'hover:bg-gray-100'}`}
        onClick={() => setCurrentView('addresses')}
      >
        Addresses ({dummyAddresses.length})
      </button>
      <button className="w-full text-left py-2 px-4 hover:bg-gray-100">Log out</button>
    </nav>
  );

  const Dashboard = () => (
    <div>
      <div className="mb-6">
        <p className="text-gray-600">Hello John Doe (not John Doe? <a href="#" className="text-blue-500 hover:underline">Log Out</a>)</p>
        <p className="text-gray-600">Email: d@mail.com</p>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Order History</h2>
      {dummyOrders.length > 0 ? (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Order</th>
              <th className="border p-2 text-left">Date</th>
              <th className="border p-2 text-left">Total</th>
              <th className="border p-2 text-left">Status</th>
              <th className="border p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dummyOrders.map((order) => (
              <tr key={order.id}>
                <td className="border p-2">#{order.id}</td>
                <td className="border p-2">{order.date}</td>
                <td className="border p-2">${order.total.toFixed(2)}</td>
                <td className="border p-2">{order.status}</td>
                <td className="border p-2">
                  <button
                    onClick={() => handleViewOrderDetails(order)}
                    className="text-blue-500 hover:underline"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="bg-gray-100 p-4 rounded">
          <p className="text-gray-600">You haven't placed any orders yet.</p>
          <a href="#" className="text-blue-500 hover:underline">CREATE YOUR FIRST ORDER</a>
        </div>
      )}
    </div>
  );

  const Addresses = () => (
    <div>
      <div className="mb-6">
        <p className="text-gray-600">
          You want to create a new address? <a href="#" className="text-green-500 hover:underline">ADD A NEW ADDRESS</a>
        </p>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Your Addresses</h2>
      {dummyAddresses.map((address) => (
        <div key={address.id} className="border p-4 mb-4">
          {address.isDefault && (
            <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
              DEFAULT
            </span>
          )}
          <p>{address.name}</p>
          <p>{address.country}</p>
          <div className="mt-2">
            <button className="text-green-500 hover:underline mr-4">EDIT</button>
            <button className="text-red-500 hover:underline">DELETE</button>
          </div>
        </div>
      ))}
    </div>
  );



  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 heading">My Account</h1>
      <div className="flex">
        <div className="w-1/4 pr-6">
          <Navigation />
        </div>
        <div className="w-3/4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentView}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {currentView === 'dashboard' && <Dashboard />}
              {currentView === 'addresses' && <Addresses />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AccountDashboard;