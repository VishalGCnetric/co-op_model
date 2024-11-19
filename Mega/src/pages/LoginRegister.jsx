import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const AuthForm = () => {
  const [activeTab, setActiveTab] = useState('signin');

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="w-full max-w-5xl grid grid-cols-2 bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Section - Tabs and Forms */}
        <div className="p-8 border-r border-gray-200">
          {/* Tabs */}
          <div className="flex mb-6">
            <button
              className={`flex-1 py-2 text-lg font-semibold text-center border-b-2 ${
                activeTab === 'signin' ? 'text-green-600 border-green-600' : 'text-gray-500 border-transparent'
              }`}
              onClick={() => setActiveTab('signin')}
            >
              Sign In
            </button>
            <button
              className={`flex-1 py-2 text-lg font-semibold text-center border-b-2 ${
                activeTab === 'create' ? 'text-green-600 border-green-600' : 'text-gray-500 border-transparent'
              }`}
              onClick={() => setActiveTab('create')}
            >
              Create Account
            </button>
          </div>

          {/* Animated Forms */}
          <AnimatePresence mode="wait">
            {activeTab === 'signin' && (
              <motion.div
                key="signin"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="mb-4 text-2xl font-bold text-green-700">Sign In To Your Account</h2>
                <p className="mb-4 text-sm text-gray-600">
                  Please sign in with your MENARDS.COM account or create an account to continue.
                </p>
                <form>
                  <div className="mb-4">
                    <label className="block mb-1 text-sm font-semibold text-gray-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring focus:ring-green-300"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1 text-sm font-semibold text-gray-700">
                      Password <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring focus:ring-green-300"
                      required
                    />
                  </div>
                  <div className="flex items-center justify-between mb-6">
                    <a href="#" className="text-sm text-green-600 hover:underline">
                      Forgot your password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 font-bold  bg-gradient-to-r from-indigo-400 to-indigo-600 text-white rounded-lg "
                  >
                    Sign In
                  </button>
                </form>
              </motion.div>
            )}

            {activeTab === 'create' && (
              <motion.div
                key="create"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="mb-4 text-2xl font-bold text-green-700">Create Your Account</h2>
                <p className="mb-4 text-sm text-gray-600">
                  Fill in your details to create an account and enjoy seamless shopping.
                </p>
                <form>
                  <div className="mb-4">
                    <label className="block mb-1 text-sm font-semibold text-gray-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring focus:ring-green-300"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1 text-sm font-semibold text-gray-700">
                      Password <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring focus:ring-green-300"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1 text-sm font-semibold text-gray-700">
                      Confirm Password <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring focus:ring-green-300"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 font-bold  bg-gradient-to-r from-indigo-400 to-indigo-600 text-white rounded-lg "
                  >
                    Create Account
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Section - Guest Checkout */}
        <div className="p-8 bg-gray-100">
          <h2 className="mb-4 text-2xl font-bold text-green-700">Checkout as a Guest</h2>
          <p className="mb-4 text-sm text-gray-600">
            Complete your order as a guest! Once processed, you will have the opportunity to create an account.
          </p>
          <form>
            <div className="mb-4">
              <label className="block mb-1 text-sm font-semibold text-gray-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring focus:ring-green-300"
                required
              />
            </div>
            <Link to="/checkout">
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold  bg-gradient-to-r from-indigo-400 to-indigo-600 text-white rounded-lg hover:bg-blue-600"
            >
              Continue
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
