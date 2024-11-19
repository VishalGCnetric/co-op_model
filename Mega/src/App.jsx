import React, { useEffect, useState, Suspense } from 'react';
import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';
import CartModal from './components/cart/CartModal';
import { CartProvider } from './contextApi/CartContext';
import Loading from './components/Loading';  // New loading component
import QuoteDetails from './pages/QuoteDetails';
import BrandPage from './components/brandhome/BrandPage';
import ProductListingPage from './pages/Products';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const Products = React.lazy(() => import('./pages/Products'));
const ProductDetail = React.lazy(() => import('./pages/ProductDetail'));
const Cart = React.lazy(() => import('./pages/Cart'));
const LoginRegister = React.lazy(() => import('./pages/LoginRegister'));
const Account = React.lazy(() => import('./pages/Account'));
const AddressForm = React.lazy(() => import('./pages/AddressForm'));
const OrderDetails = React.lazy(() => import('./pages/OrderDetails'));
const ThankYouPage = React.lazy(() => import('./pages/ThankYouPage'));
const NotFound = React.lazy(() => import('./pages/NotFound'));  // Custom 404 page
const Checkout =React.lazy(()=> import("./pages/Checkout"))

const App = () => {
  const [scrolled, setScrolled] = useState(false);  
  const location = useLocation();
  const [navbarHighlight, setNavbarHighlight] = useState(false);

  // Handle scroll for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to the top of the page
    setNavbarHighlight(true);
    const timer = setTimeout(() => setNavbarHighlight(false), 1000); // Remove highlight after 1 second

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, [location]);

  return (
    <CartProvider>
      <header className={`w-full ${
          scrolled ? 'fixed top-0 backdrop-blur-md bg-opacity-10 shadow-md hover:bg-white' : 'bg-opacity-100'
        } transition-all duration-300 z-50 ${navbarHighlight ? 'border-b-4 border-red-400' : ''}`}>
        <Navbar />
      </header>
      <CartModal /> 

      <Suspense fallback={<Loading />}> {/* Suspense wrapper with Loading fallback */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/brand" element={<BrandPage />} /> */}
          <Route path="/brand" element={<BrandPage />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<ProductListingPage />} />

          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/auth" element={<LoginRegister />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/add-address" element={<AddressForm />} />
          <Route path="/order/:orderId" element={<OrderDetails />} />
          <Route path="/quote/:quoteId" element={<QuoteDetails />} />

          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/success/:orderId" element={<ThankYouPage />} />
          <Route path="*" element={<NotFound />} />  {/* 404 page route */}
        </Routes>
        <div className='bg-gradient-to-r from-purple-100 via-pink-100 to-red-100'>

      <Footer />
        </div>
      </Suspense>

    </CartProvider>
  );
};

export default App;
