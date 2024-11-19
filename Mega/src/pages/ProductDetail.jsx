import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProductPage = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedColor, setSelectedColor] = useState("Pink");
    const [selectedSize, setSelectedSize] = useState("M");
    const [quantity, setQuantity] = useState(1);
    const [pincode, setPincode] = useState('');
    const [showCartModal, setShowCartModal] = useState(false);

    const images = [
        "https://levi.in/cdn/shop/files/299310044_01_Style_Shot_49675b35-19d6-4f43-9345-e78c7e54cc9d.jpg?v=1712743290&width=750", 
        "https://levi.in/cdn/shop/files/A50980000_01_Front_949448b4-535b-462f-8fda-181f3920d5e3.jpg?v=1712742434&width=750", 
        "https://levi.in/cdn/shop/files/A38810004_01_Style_Shot_a1d01ea9-f570-40ad-925b-de2f72e8b705.jpg?v=1712743392&width=750"
    ];
    const colors = ["Pink", "Blue", "Green"];
    const sizes = ["XS", "S", "M", "L", "XL"];

    const productDetails = {
        title: "Women's Striped Crew Neck Sweater",
        price: "₹1,249.00",
        discount: "50% OFF",
        code: "FESTIVE10",
        description: "A stylish crew neck sweater with a timeless striped pattern, perfect for casual outings.",
        fitAndSizing: "This sweater has a relaxed fit and is available in sizes XS to XL. The model is wearing a size M.",
        compositionAndCare: "Made from 100% cotton. Machine wash cold with similar colors, tumble dry low, do not bleach.",
        additionalDetails: "This product is crafted sustainably with eco-friendly dyes. The fabric is breathable and comfortable for all-day wear."
    };

    const handleColorChange = (color) => {
        setSelectedColor(color);
        setSelectedImage(0);
    };
    
    const handleQuantityChange = (amount) => {
        setQuantity(prev => Math.max(1, prev + amount));
    };

    const checkDelivery = () => {
        alert(`Delivery available at ${pincode}`);
    };

    const handleAddToCart = () => {
        setShowCartModal(true);
    };

    return (
        <div className="product-page w-full p-4 md:flex md:gap-20 md:space-x-20">
            {/* Image Gallery */}
            <div className="image-gallery flex gap-6">
                <div className="thumbnails flex md:flex-col space-x-2 md:space-x-0 md:space-y-2">
                    {images.map((img, index) => (
                        <img 
                            key={index} 
                            src={img} 
                            alt={`Thumbnail ${index + 1}`} 
                            className={`w-20 h-20 cursor-pointer ${index === selectedImage ? 'border-2 border-gray-800' : 'border'}`}
                            onClick={() => setSelectedImage(index)} 
                        />
                    ))}
                </div>
                <img src={images[selectedImage]} alt="Main Product" className="main-image w-full mt-4 md:mt-0 md:w-96" />
            </div>
            
            {/* Product Information */}
            <div className="product-info space-y-4">
                <h1 className="text-2xl font-bold">{productDetails.title}</h1>
                <div className="text-xl text-red-600">{productDetails.price} <span className="line-through text-gray-500">₹2,499.00</span> <span className="text-green-500">{productDetails.discount}</span></div>
                <div className="text-sm text-gray-600">Use code: <span className="font-semibold">{productDetails.code}</span> for an extra 10% off all orders</div>
                
                {/* Color Selector */}
                <div className="color-selector space-x-2">
                    <h3 className="text-lg font-semibold">Color: {selectedColor}</h3>
                    {colors.map(color => (
                        <button 
                            key={color} 
                            onClick={() => handleColorChange(color)}
                            className={`w-8 h-8 rounded-full ${color === selectedColor ? 'ring-2 ring-gray-800' : ''}`} 
                            style={{ backgroundColor: color.toLowerCase() }}
                        />
                    ))}
                </div>
                
                {/* Size Selector */}
                <div className="size-selector space-x-2">
                    <h3 className="text-lg font-semibold">Size</h3>
                    {sizes.map(size => (
                        <button 
                            key={size} 
                            disabled={size === "XL"} 
                            onClick={() => setSelectedSize(size)}
                            className={`px-4 py-2 border rounded ${size === selectedSize ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} ${size === "XL" ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {size}
                        </button>
                    ))}
                </div>
                
                {/* Quantity Selector */}
                <div className="quantity-selector flex items-center space-x-4">
                    <h3 className="text-lg font-semibold">Quantity</h3>
                    <button onClick={() => handleQuantityChange(-1)} className="px-2 border">-</button>
                    <span>{quantity}</span>
                    <button onClick={() => handleQuantityChange(1)} className="px-2 border">+</button>
                </div>

                {/* Delivery Eligibility */}
                <div className="delivery-check mt-4">
                    <h3 className="text-lg font-semibold">Delivery Eligibility</h3>
                    <input 
                        type="text" 
                        value={pincode} 
                        onChange={(e) => setPincode(e.target.value)} 
                        placeholder="Enter Pincode" 
                        className="border px-4 py-2 rounded mr-2"
                    />
                    <button onClick={checkDelivery} className="px-4 py-2 bg-gradient-to-r from-indigo-400 to-indigo-600 text-white rounded">Check</button>
                </div>

                {/* Add to Cart Button */}
                <div className="action-buttons space-x-4 mt-4">
                    <button 
                        onClick={handleAddToCart} 
                        className="px-4 py-2 w-full bg-gradient-to-r from-indigo-400 to-indigo-600 text-white rounded">
                        Add to Bag
                    </button>
                </div>

                {/* Additional Information */}
                <div className="additional-info mt-6 space-y-4">
                    <details>
                        <summary className="text-lg font-semibold">Description</summary>
                        <p className="mt-2 text-gray-700">{productDetails.description}</p>
                    </details>
                    <details>
                        <summary className="text-lg font-semibold">Fit and Sizing</summary>
                        <p className="mt-2 text-gray-700">{productDetails.fitAndSizing}</p>
                    </details>
                    <details>
                        <summary className="text-lg font-semibold">Composition and Care</summary>
                        <p className="mt-2 text-gray-700">{productDetails.compositionAndCare}</p>
                    </details>
                    <details>
                        <summary className="text-lg font-semibold">Additional Details</summary>
                        <p className="mt-2 text-gray-700">{productDetails.additionalDetails}</p>
                    </details>
                </div>
            </div>

            {/* Add to Cart Modal */}
            <AnimatePresence>
                {showCartModal && (
                    <motion.div
                        className="fixed right-0 top-1/2 bottom-20 flex items-center justify-center border-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div 
                            className="bg-white p-6 rounded-lg w-80 space-y-4 text-center shadow-lg z-99"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                        >
                            <h2 className="text-xl font-bold">Added to Cart</h2>
                            <div className="flex gap-2 p-2">
                            <img src={images[selectedImage]} alt="Selected Product" className="w-16 h-16 mx-auto" />
                            <div>
                            <p className="text-md">{productDetails.title}</p>
                            <p className="text-gray-700">Color: {selectedColor}, Size: {selectedSize}, Quantity: {quantity}</p>
                            </div>
                            </div>
                            <Link to="/cart">
                            <button
                                // onClick={() => setShowCartModal(false)}
                                className="px-4 py-2 bg-gradient-to-r from-indigo-400 to-indigo-600 text-white rounded w-full mt-2"
                            >
                                View Cart
                            </button>
                            </Link>
                            <button
                                onClick={() => setShowCartModal(false)}
                                className="px-4 py-2 bg-gradient-to-r from-white to-gray-200 text-black rounded w-full mt-2"
                            >Continue Shopping
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProductPage;
