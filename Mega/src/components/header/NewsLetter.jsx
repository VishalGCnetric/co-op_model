import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RippleButton = ({ children, onClick }) => {
  const [ripples, setRipples] = useState([]);

  const createRipple = (event) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const ripple = { x, y, id: Date.now() };
    setRipples((prevRipples) => [...prevRipples, ripple]);

    setTimeout(() => {
      setRipples((prevRipples) => prevRipples.filter((r) => r.id !== ripple.id));
    }, 1000);
  };

  return (
    <motion.button
      className="relative overflow-hidden px-6 py-2 bg-gradient-to-r from-indigo-400 to-indigo-600 text-white font-semibold rounded-r-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-300 ease-in-out"
      onClick={(e) => {
        createRipple(e);
        onClick && onClick(e);
      }}
    >
      {children}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute bg-white rounded-full opacity-30"
          initial={{ scale: 0, x: ripple.x, y: ripple.y }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            width: 20,
            height: 20,
            left: -10,
            top: -10,
          }}
        />
      ))}
    </motion.button>
  );
};

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Submitted email:', email);
    setIsSubmitted(true);
  };

  return (
    <div className="bg-[#36454F]  flex items-center justify-center">
      <div className="w-full  p-8 bg-[#36454F] rounded-lg shadow-lg">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-center text-white logofont">
                SUBSCRIBE OUR NEWSLETTER
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 mx-auto">
                <div className="flex w-1/2 mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email"
                    className="flex-grow px-4 py-2 bg-gray-100 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    required
                  />
                  <RippleButton type="submit">
                    SUBSCRIBE
                  </RippleButton>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-2xl font-bold mb-4 text-white">Thank you for subscribing!</h2>
              <p className="text-cyan-400">Check your email for confirmation.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NewsletterForm;