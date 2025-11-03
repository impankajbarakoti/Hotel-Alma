import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"; // ✅ Using Lucide icons

// --- Star Rating Component ---
const StarRating = () => (
  <div className="flex justify-center space-x-1 my-2">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className="w-4 h-4 text-amber-500 fill-current"
        viewBox="0 0 24 24"
      >
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.917 1.48-8.279L.001 9.306l8.332-1.151L12 .587z" />
      </svg>
    ))}
  </div>
);

// --- Scroll to Top Button ---
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white font-sans">
      {/* --- Top Section --- */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center md:text-left gap-12">
          {/* --- Address --- */}
          <div>
            <h3 className="uppercase tracking-widest text-sm text-gray-400 mb-3">
              Address
            </h3>
            <p className="text-base text-gray-200">742 Evergreen Terrace</p>
            <p className="text-base text-gray-200">Brooklyn, NY 11201</p>
          </div>

          {/* --- Logo & Socials --- */}
          <div className="flex flex-col items-center">
            <img
              src="https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/logo-white.webp"
              alt="Almaris Hotel Logo"
              className="h-8 w-auto mb-2"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <StarRating />

            {/* --- Social Icons --- */}
            <div className="flex mt-4 space-x-5">
              <a
                href="/"
                aria-label="Facebook"
                className="text-white hover:text-amber-500 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="/"
                aria-label="Instagram"
                className="text-white hover:text-amber-500 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="/"
                aria-label="Twitter"
                className="text-white hover:text-amber-500 transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="/"
                aria-label="YouTube"
                className="text-white hover:text-amber-500 transition-colors duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* --- Contact Info --- */}
          <div className="md:text-right">
            <h3 className="uppercase tracking-widest text-sm text-gray-400 mb-3">
              Contact Us
            </h3>
            <p className="text-base text-gray-200">T. +929 333 9296</p>
            <p className="text-base text-gray-200">M. contact@almaris.com</p>
          </div>
        </div>
      </div>

      {/* --- Divider --- */}
      <hr className="border-t border-gray-800" />

      {/* --- Bottom Section --- */}
      <div className="relative max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Almaris Hotel — All Rights Reserved</p>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute right-4 bottom-1/2 translate-y-1/2 p-2 w-10 h-10 bg-amber-700 hover:bg-amber-600 transition duration-300 shadow-lg rounded flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default FooterSection;
