import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Breadcrumb from '../components/Checkout/Breadcrumb';
import Tracker from '../components/Checkout/Tracker';
import { useNavigate } from 'react-router-dom';
import OrderSummary from '../components/Checkout/OrderSummary';

const orderData = {
  products:[
    { id: 1, name: "Women's Striped Crew Neck Sweater", price: 199.00, quantity: 1, image: 'https://levi.in/cdn/shop/files/299310044_01_Style_Shot_49675b35-19d6-4f43-9345-e78c7e54cc9d.jpg?v=1712743290&width=750' },
    { id: 2, name: "Women's Striped Crew Neck Sweater", price: 299.00, quantity: 1, image: 'https://levi.in/cdn/shop/files/A38810004_01_Style_Shot_a1d01ea9-f570-40ad-925b-de2f72e8b705.jpg?v=1712743392&width=750' },
  ],
  summary: {
    subtotal: 799.98,
    tax: 79.99,
    shipping: 15.00,
    total: 894.97
  }
};

const CelebrationModal = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <h2 className="text-xl font-bold text-green-600 mb-4">🎉 Payment Successful! 🎉</h2>
            <p>Redirecting you to the order success page...</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const CheckoutComponent = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [address, setAddress] = useState({
    firstName: '',
    lastName: '',
    street: '',
    city: '',
    postalCode: '',
    state: '',
    country: '',
    phone: ''
  });
  const [shippingMethod, setShippingMethod] = useState('standard');

  const navigate = useNavigate();

  const nextStep = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePayment = () => {
    setShowCelebration(true);
    setTimeout(() => {
      setShowCelebration(false);
      navigate(`/checkout/success/${12345}`);
    }, 2000);
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -100, transition: { duration: 0.5 } }
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Breadcrumb />
      <Tracker currentStep={currentStep} />
      <CelebrationModal isVisible={showCelebration} />

      <div className="mt-8 flex justify-around items-start gap-4">
        <AnimatePresence mode="wait">
          {/* Step 1: Shipping Address */}
          {currentStep === 0 && (
            <motion.div key="address" variants={stepVariants} initial="hidden" animate="visible" exit="exit">
              <h2 className="text-2xl font-bold mb-6 heading">Shipping Address</h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold mb-2 ml-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    className="w-full p-3 border border-gray-300 rounded-full"
                    placeholder="Enter your first name"
                    value={address.firstName}
                    onChange={handleAddressChange}
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2 ml-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    className="w-full p-3 border border-gray-300 rounded-full"
                    placeholder="Enter your last name"
                    value={address.lastName}
                    onChange={handleAddressChange}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block font-semibold mb-2 ml-2">Street Address</label>
                  <input
                    type="text"
                    name="street"
                    className="w-full p-3 border border-gray-300 rounded-full"
                    placeholder="Enter your address"
                    value={address.street}
                    onChange={handleAddressChange}
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2 ml-2">City</label>
                  <input
                    type="text"
                    name="city"
                    className="w-full p-3 border border-gray-300 rounded-full"
                    placeholder="Enter your city"
                    value={address.city}
                    onChange={handleAddressChange}
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2 ml-2">Postal Code</label>
                  <input
                    type="text"
                    name="postalCode"
                    className="w-full p-3 border border-gray-300 rounded-full"
                    placeholder="Enter your postal code"
                    value={address.postalCode}
                    onChange={handleAddressChange}
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2 ml-2">State</label>
                  <input
                    type="text"
                    name="state"
                    className="w-full p-3 border border-gray-300 rounded-full"
                    placeholder="Enter your state"
                    value={address.state}
                    onChange={handleAddressChange}
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2 ml-2">Country</label>
                  <input
                    type="text"
                    name="country"
                    className="w-full p-3 border border-gray-300 rounded-full"
                    placeholder="Enter your country"
                    value={address.country}
                    onChange={handleAddressChange}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block font-semibold mb-2 ml-2">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    className="w-full p-3 border border-gray-300 rounded-full"
                    placeholder="Enter your phone number"
                    value={address.phone}
                    onChange={handleAddressChange}
                  />
                </div>
                <div className="md:col-span-2 flex justify-between mt-6">
                  <button type="button" className="bg-gradient-to-r from-gray-500 to-zinc-500 text-white py-2 px-4 rounded-md" onClick={prevStep}>Back</button>
                  <button type="button" className=" bg-gradient-to-r from-indigo-400 to-indigo-600 text-white py-2 px-4 rounded-md" onClick={nextStep}>Continue</button>
                </div>
              </form>
            </motion.div>
          )}

          {/* Step 2: Shipping Methods */}
          {currentStep === 1 && (
            <motion.div key="shipping" variants={stepVariants} initial="hidden" animate="visible" exit="exit">
                <div className="space-y-4">
                <h2 className="text-2xl font-bold heading">Address Summary</h2>
                <div className="p-4 border rounded-md">
                  <h3 className="font-semibold">Shipping Address</h3>
                  <p>{`${address.firstName} ${address.lastName}`}</p>
                  <p>{address.street}</p>
                  <p>{`${address.city}, ${address.state}, ${address.postalCode}`}</p>
                  <p>{address.country}</p>
                  <p>Phone: {address.phone}</p>
                </div>
              </div>
              <h2 className="text-2xl font-bold my-6 heading">Shipping Method</h2>
              <div className="space-y-4">
                <div className="border p-4 rounded-lg">
                  <label className="flex items-center space-x-4">
                  <input
                    type="radio"
                    id="standard"
                    name="shipping"
                    value="standard"
                    checked={shippingMethod === 'standard'}
                    onChange={(e) => setShippingMethod(e.target.value)}
                    className="form-radio h-4 w-4"
                  />                    <span>Standard Shipping (3-7 business days) - Free</span>
                  </label>
                </div>
                <div className="border p-4 rounded-lg">
                  <label className="flex items-center space-x-4">
                  <input
                    type="radio"
                    id="express"
                    name="shipping"
                    value="express"
                    checked={shippingMethod === 'express'}
                    onChange={(e) => setShippingMethod(e.target.value)}
                    className="form-radio h-4 w-4"
                  />                    <span>Express Shipping (1-2 business days) - $9.99</span>
                  </label>
                </div>
              </div>
              <div className="flex justify-between mt-6">
                <button type="button" className="bg-gradient-to-r from-gray-500 to-zinc-500 text-white py-2 px-4 rounded-md" onClick={prevStep}>Back</button>
                <button type="button" className=" bg-gradient-to-r from-indigo-400 to-indigo-600 text-white py-2 px-4 rounded-md" onClick={nextStep}>Continue</button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Address and Order Summary */}
          {currentStep === 2 && (
            <motion.div key="summary" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className=" w-2/3">
              
              {/* Address Summary */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold heading">Address Summary</h2>
                <div className="p-4 border rounded-md">
                  <h3 className="font-semibold">Shipping Address</h3>
                  <p>{`${address.firstName} ${address.lastName}`}</p>
                  <p>{address.street}</p>
                  <p>{`${address.city}, ${address.state}, ${address.postalCode}`}</p>
                  <p>{address.country}</p>
                  <p>Phone: {address.phone}</p>
                </div>
              </div>
              <div className="space-y-4 my-4">
                <h2 className="text-2xl font-bold heading">Chosen Shipping Method</h2>
                <div className="p-4 border rounded-md">
                  <h3 className="font-semibold">{shippingMethod === 'standard' ? 'Standard Shipping' : 'Express Shipping'}</h3>
                  <p>{shippingMethod === 'standard' ? 'Free' : '$9.99'}</p>
                </div>
                </div>
              {/* Order Summary */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold heading">Review Order & Make Payment</h2>
                <div className="space-y-4 p-4 border">
                  {orderData.products.map((product) => (
                    <div key={product.id} className="flex justify-between items-center border-b pb-4">
                      <div className="flex items-center space-x-4">
                        <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-md" />
                        <div>
                          <h3 className="font-semibold">{product.name}</h3>
                          <p className="text-gray-600">Qty: {product.quantity}</p>
                        </div>
                      </div>
                      <span className="text-lg font-semibold">${product.price.toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                {/* <div className="mt-6 border-t pt-6">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Subtotal</span>
                    <span>${orderData.summary.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Tax</span>
                    <span>${orderData.summary.tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Shipping</span>
                    <span>${orderData.summary.shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total</span>
                    <span>${orderData.summary.total.toFixed(2)}</span>
                  </div>
                </div> */}
              </div>

              <div className="md:col-span-2 flex justify-between mt-6">
                <button type="button" className="bg-gradient-to-r from-gray-500 to-zinc-500 text-white py-2 px-4 rounded-md" onClick={prevStep}>Back</button>
                <button type="button" className="bg-gradient-to-r from-indigo-400 to-indigo-600 text-white py-2 px-4 rounded-md" onClick={handlePayment}>Place Order</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
<div className="h-auto">
      <OrderSummary/>
      </div>
      </div>
    </div>
  );
};

export default CheckoutComponent;
