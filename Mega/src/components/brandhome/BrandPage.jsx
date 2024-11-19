import { useState } from 'react';
import { motion } from 'framer-motion';
import BannerSlider from './BannerSlider';
import CategorySelector from './CategorySelector';
import TrendingSlider from './TrendingSlider';

export default function BrandPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const brandData = {
    bannerImages: [
      { id: 1, url: 'https://levi.in/cdn/shop/files/Desktop-ADSB.jpg?v=1728110122', alt: 'Banner 1' },
      { id: 2, url: 'https://levi.in/cdn/shop/files/Desktop_4.jpg?v=1729874562', alt: 'Banner 2' },
      { id: 3, url: 'https://levi.in/cdn/shop/files/Desktop_1440x510_259b4a07-fb54-401e-a11b-3185ed8615a0.jpg?v=1731148293', alt: 'Banner 3' }, { id: 4, url: 'https://levi.in/cdn/shop/files/Desktop_1440x510_259b4a07-fb54-401e-a11b-3185ed8615a0.jpg?v=1731148293', alt: 'Banner 4' },
    ],
    categories:[
      {
        title: "CARGOS, CHINOS & TROUSERS",
        image: "https://levi.in/cdn/shop/files/4_DoorCargosChinosTrousers_Desktop_1.jpg?v=1728465084",
      },
      {
        title: "SKIRTS, DRESSES & JUMPSUITS",
        image: "https://levi.in/cdn/shop/files/4_DoorSkirtsDressesJumpsuits_Desktop.jpg?v=1728465085",
      },
      {
        title: "SHORTS FOR EVERYDAY",
        image: "https://levi.in/cdn/shop/files/4_DoorShorts_Desktop.jpg?v=1728465085",
      },
      {
        title: "GRAPHIC TEES FOR DAYS",
        image: "https://levi.in/cdn/shop/files/4_DoorGraphic_Tees.jpg?v=1728465085",
      },
    ],
    trendingProducts : [
      {
        id: 1,
        name: "Women's Solid Yellow V-Neck Top",
        image: 'https://levi.in/cdn/shop/files/A79680000_01_Style_shot_7c1f6e4d-0cf8-4fef-a75e-f9324337b2af.jpg?v=1702029360&width=750',
        price: '₹1,149',
        originalPrice: '₹2,299',
        discount: '50% OFF',
      },
      {
        id: 2,
        name: "Levi's X Deepika Padukone Moon Rib Turtleneck",
        image: 'https://levi.in/cdn/shop/files/A63780001_01_Front_513f2e8a-3f5b-43c6-8f2a-2a1618830ac4.jpg?v=1699257181&width=750',
        price: '₹813',
        originalPrice: '₹2,199',
        discount: '63% OFF',
      },
      {
        id: 3,
        name: "Women's Solid Crew Neck Sweater",
        image: 'https://levi.in/cdn/shop/files/A63780001_01_Front_513f2e8a-3f5b-43c6-8f2a-2a1618830ac4.jpg?v=1699257181&width=750',
        price: '₹949',
        originalPrice: '₹1,899',
        discount: '50% OFF',
      },
      {
        id: 4,
        name: "Women's Floral Print Round Neck Top",
        image: 'https://levi.in/cdn/shop/files/A39060001_01_Style_Shot_2a018d03-7aba-40c4-98fb-f3b4d51cf4d6.jpg?v=1695738379&width=750',
        price: '₹1,149',
        originalPrice: '₹2,299',
        discount: '50% OFF',
      },
      {
        id: 5,
        name: "Women's Striped Crew Neck Sweater",
        image: 'https://levi.in/cdn/shop/files/A39060001_01_Style_Shot_2a018d03-7aba-40c4-98fb-f3b4d51cf4d6.jpg?v=1695738379&width=750',
        price: '₹1,249',
        originalPrice: '₹2,499',
        discount: '50% OFF',
      },
      {
        id: 6,
        name: "Women's Floral Print Round Neck Top",
        image: 'https://levi.in/cdn/shop/files/A39060001_01_Style_Shot_2a018d03-7aba-40c4-98fb-f3b4d51cf4d6.jpg?v=1695738379&width=750',
        price: '₹1,149',
        originalPrice: '₹2,299',
        discount: '50% OFF',
      },
      {
        id: 7,
        name: "Women's Striped Crew Neck Sweater",
        image: 'https://levi.in/cdn/shop/files/A39060001_01_Style_Shot_2a018d03-7aba-40c4-98fb-f3b4d51cf4d6.jpg?v=1695738379&width=750',
        price: '₹1,249',
        originalPrice: '₹2,499',
        discount: '50% OFF',
      },
    ]
  };
  
  const handleProductClick = (productId) => {
    // Logic to navigate to PLP or PDP with the product ID
    console.log(`Navigate to product with ID: ${productId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-6"
      >
Brand Name     </motion.h1>

      {/* Banner Slider */}
      <BannerSlider banners={brandData.bannerImages} />

      {/* Category Selector */}
      <CategorySelector
        categories={brandData.categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Trending Products Slider */}
      <TrendingSlider products={brandData.trendingProducts} onProductClick={handleProductClick} />
    </div>
  );
}
