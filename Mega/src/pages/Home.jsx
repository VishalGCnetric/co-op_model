import React from 'react';

import LogoList from '../components/header/LogoList';
import Footer from '../components/footer/Footer';
import Slider from 'react-slick';
import BrandGrid from '../components/header/BrandGrid';
import Navbar from '../components/header/Navbar';
import AboutUsSection from '../components/header/AboutUs';
import CompanyBanner from '../components/header/CompanyBanner';
import NewsletterForm from '../components/header/NewsLetter';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
     

      <main className="flex-grow">
        {/* Slider Section */}
        <section>
          <CompanyBanner />
        </section>
        <section>

<AboutUsSection/>
        </section>
        {/* Brand Grid Section */}
        <section id="store">
          <BrandGrid />
        </section>

        {/* Logo List Section */}
        {/* <section>
          <LogoList />
        </section> */}
        <section>
          <NewsletterForm />
        </section>
      </main>

     
    </div>
  );
};

export default App;
