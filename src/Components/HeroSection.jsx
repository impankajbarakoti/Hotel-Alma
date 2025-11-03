import React from "react";

const BACKGROUND_IMAGE_URL =
  "https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/1-2.webp";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen md:bg-contain bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: `url(${BACKGROUND_IMAGE_URL})`,
      }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/60"></div> */}

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col items-center justify-center">
        <p className="text-xs sm:text-sm tracking-[0.25em] uppercase mb-3 text-gray-200 font-light">
          Exceptional Stay
        </p>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold mb-6 leading-tight drop-shadow-lg">
          Dream Apartment
        </h1>

        <button className="px-5 sm:px-8 py-3 sm:py-4 bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 text-xs sm:text-sm md:text-base uppercase tracking-wider rounded-md font-semibold text-gray-900 shadow-lg">
          Explore Your New Home
        </button>
      </div>

      
      
    </section>
  );
};

export default HeroSection;
