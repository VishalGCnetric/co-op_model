import React from 'react';
import navigationData from "../../json/NavigationData.json";

const BackGroundBanner = () => {
  return (
    <div
      className="relative text-white bg-cover bg-center bg-no-repeat h-[340px] flex items-center justify-center text-center p-8"
      style={{
        backgroundImage: `url('https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_1867/cms/3gaucwAUA2KXTW2QeloccX/02d479630932580eb29bc1329e0ec6fd/24Q3_AugustCore_Statement_Module_Site_Desktop_IMG_2880x720.jpg')`,
      }}
    >
      <div className="relative z-20">
        <h1 className="text-3xl font-bold text-foreground">
          WE MAKE BETTER THINGS IN A BETTER WAY
        </h1>
        <p className="mt-4 text-base text-muted-foreground">
          By looking to the world’s greatest innovator—Nature—we create shoes
          <br/>
          that deliver unrivaled comfort that you feel good in and feel good about.
        </p>
        <h2 className="mt-4 text-xl font-semibold text-secondary">
          {navigationData.navbar.logo.text}
        </h2>
        <span className="text-base text-muted-foreground">by NATURE</span>
      </div>

      {/* Overlay to add opacity to the background image */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
    </div>
  );
};

export default BackGroundBanner;
