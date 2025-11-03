import React from "react";

// You might want to use actual SVG icons instead of simple characters for better styling
const ReceptionIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const SpecialOffersSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Section: Text and Offer Cards */}
        <div className="lg:w-1/2 w-full pr-0 lg:pr-12">
          {/* Header */}
          <p className="text-sm uppercase tracking-widest text-amber-700 opacity-70 mb-2">
            Hurry Up
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 leading-tight mb-12">
            Special Offers
          </h2>

          {/* Offer Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Reception Card */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center p-4 bg-amber-700 opacity-80 rounded-full mb-4">
                <ReceptionIcon />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Reception 24h / 7 Days
              </h3>
              <p className="text-gray-600 leading-relaxed">
                occaecat id ullamco consectetur labore officia eiusmod culpa
                dolore sit ullamco enim veniam nulla laboris id nisi.
              </p>
            </div>

            {/* Reservation Card */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center p-4 bg-amber-700 opacity-80 rounded-full mb-4">
                <PhoneIcon />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Reservation Online
              </h3>
              <p className="text-gray-600 leading-relaxed">
                occaecat id ullamco consectetur labore officia eiusmod culpa
                dolore sit ullamco enim veniam nulla laboris id nisi.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section: Images */}
        <div className="lg:w-1/2 w-full flex flex-col md:flex-row gap-8 lg:gap-12 justify-center items-center mt-12 lg:mt-0">
          {/* Image 1: Customer Service Rep */}
          <div className="relative w-full md:w-1/2 lg:w-[45%] h-80 bg-gray-200 rounded-lg overflow-hidden shadow-lg flex-shrink-0">
            <img
              src="https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/4-1.webp" // Replace with your actual image URL
              alt="Customer Service Representative"
              className="w- h-full object-contain"
            />
          </div>

          {/* Image 2: Reception Bell */}
          <div className="relative w-full md:w-1/2 lg:w-[45%] h-80 bg-gray-200 rounded-lg overflow-hidden shadow-lg flex-shrink-0">
            <img
              src="https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/5-1.webp" // Replace with your actual image URL
              alt="Reception Bell"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffersSection;
