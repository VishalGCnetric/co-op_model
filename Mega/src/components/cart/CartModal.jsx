import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../../contextApi/CartContext';
import CartItem from './CartItem'; // CartItem component
import { ShoppingBag, X } from 'lucide-react'; // Icons for bag and close
import { useNavigate } from 'react-router-dom';

const CartModal = () => {
  const { isCartOpen, closeCart } = useCart(); // Get state and action for cart modal
  const navigate = useNavigate();
  // Example cart items data
  const cartItems = [
    {
      id: 1,
      name: "Men's Wool Piper Go",
      size: "9",
      price: "$120",
      image: "path/to/image1.jpg",
      quantity: 1,
    },
    {
      id: 2,
      name: "Women's Wool Runner",
      size: "7",
      price: "$140",
      image: "path/to/image2.jpg",
      quantity: 2,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: isCartOpen ? 1 : 0, x: isCartOpen ? 0 : '100%' }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 right-0 w-full sm:w-96 h-full bg-white shadow-xl z-50 ${isCartOpen ? '' : 'pointer-events-none'}`}
    >
      <div className="relative h-full flex flex-col">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <button
            onClick={closeCart}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <X size={24} />
          </button>
          <div className="flex items-center space-x-2">
            <ShoppingBag size={24} />
            <span className="font-bold text-sm">{cartItems.length}</span> {/* Number of items */}
          </div>
        </div>

        {/* Free Shipping Message */}
        <div className="text-center p-4 border-b border-gray-200 bg-gray-50">
          <h2 className="text-sm font-semibold">Congrats! You get free standard shipping.</h2>
        </div>

        {/* Cart Items Section */}
        <div className="flex-1 p-4 overflow-y-auto">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              size={item.size}
              price={item.price}
              image={item.image}
              quantity={item.quantity}
            />
          ))}
        </div>

        {/* Gifting Section */}
        <div className="p-4 border-t">
          <p className="text-sm">
            <span className="inline-block mr-1">🎁</span>
            Gifting? <a href="#" className="text-blue-600">Add logo-free packaging and more.</a>
          </p>
        </div>

        {/* Footer */}
        <div className="p-2 border-t">
          {/* Subtotal and Shipping */}
          <div className="flex justify-between mb-2">
            <p className="font-semibold text-sm">Subtotal</p>
            <p className="font-semibold text-sm">$240</p> {/* Update subtotal dynamically */}
          </div>
          <div className="flex justify-between mb-6">
            <p className="font-semibold text-sm">Shipping</p>
            <p className="font-semibold text-sm text-green-600">FREE</p>
          </div>

          {/* Proceed to Checkout */}
          <button  className="w-full h-[50px] bg-black text-white hover:text-black py-2 font-bold transition-colors duration-300 ease-in-out hover:bg-white hover:border-2 hover:border-black"
          onClick={()=>{navigate("/checkout") 
            closeCart()
          }}
          >
            PROCEED TO CHECKOUT
          </button>

          {/* Payment Methods */}
          <div className="flex justify-around items-center py-2 space-x-2 ">
            <img src="https://images.ctfassets.net/9uo1qvvet3xa/6z90ekdLBJdFRPh7vo2wLh/2d4a0a4e96f3d7a19cea75f09cdc59ad/ShopPay_-_White.svg" alt="Shop Pay" className=" w-24  bg-purple-600 p-2 rounded" />
            <img src="https://images.ctfassets.net/9uo1qvvet3xa/33RudJxATBd104HGRLDee7/b2c410059d5ba3cdef8fcbd4f8a5803c/Amazon_Pay_-_Black.svg" alt="Amazon Pay" className="w-24  bg-yellow-400 p-2 rounded" />
            <img src="https://images.ctfassets.net/9uo1qvvet3xa/4dooJgkFpDR0AeMb4MKw8u/954fd7930cbc82523b57ef6e724be215/PayPal_-_Color.svg" alt="PayPal" className="w-24 bg-yellow-500 p-2 rounded" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CartModal;
