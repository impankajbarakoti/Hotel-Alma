import React from "react";

// Placeholder image URL for the dogs


// --- Icon SVGs ---
// Yellow "Swoosh" Accent (Top Right of About Us title)
const YellowSwoosh = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="absolute top-0 right-0 w-8 h-8 md:w-10 md:h-10 text-yellow-400 transform translate-x-1/4 -translate-y-1/4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2l3 3 7 0 0 7-3 3M2 12l3-3 0-7 7 0 3 3" />
  </svg>
);

// Blue Arrow Accent (on the image)
const BlueArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="absolute bottom-[-20px] left-[-30px] w-20 h-20 text-blue-600 rotate-[20deg] opacity-90"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 12H3" />
    <path d="M10 5L3 12L10 19" />
  </svg>
);

// Main Component (rafce style)
const ContactHeader = () => {
  return (
    <section className="py-16 sm:py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Section Title --- */}
        <div className="text-center mb-6 bg-black p-3 relative">
          <h2 className="text-4xl sm:text-5xl   font-extrabold  text-white tracking-tight relative inline-block">
            Contact us
          </h2>
        </div>

        {/* --- Content Grid: Text Left, Image Right --- */}
      </div>
    </section>
  );
};

export default ContactHeader;
