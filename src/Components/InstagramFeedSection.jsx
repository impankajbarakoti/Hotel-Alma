import React from "react";

// --- Instagram Feed Images (Replace with real ones) ---
const instagramImages = [
  "https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/g_3.webp", // Dining
  "https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/g_1.webp", // Lobby
  "https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/g_2.webp", // Candles
  "https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/g_4.webp", // Bedroom
  "https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/g_5.webp", // Bathroom
  "https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/g_6.webp", // Bed
  "https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/g_8.webp", // Boy
  "https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/g_7.webp", // Bar/Lounge
];

// --- Instagram Icon Component ---
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8 text-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.5 3h9a4.5 4.5 0 014.5 4.5v9a4.5 4.5 0 01-4.5 4.5h-9A4.5 4.5 0 013 16.5v-9A4.5 4.5 0 017.5 3z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 7.5h.008v.008H16.5V7.5zM12 9.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
    />
  </svg>
);

const InstagramFeedSection = () => {
  return (
    <section className="bg-amber-50 py-16 font-sans">
      {/* --- Header --- */}
      <div className="text-center mb-12 px-4">
        <p className="text-xs uppercase tracking-widest text-gray-500 font-light mb-1">
          Our Instagram
        </p>
        <h2 className="text-2xl md:text-4xl font-serif text-gray-800 tracking-wide">
          @almaris_hotel_theme
        </h2>
      </div>

      {/* --- Image Feed --- */}
      <div
        className="
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 
          gap-0.5 sm:gap-0 p-1 
          overflow-hidden
        "
      >
        {instagramImages.map((imageUrl, index) => (
          <div
            key={index}
            className="relative group  overflow-hidden aspect-square cursor-pointer"
          >
            {/* Image */}
            <img
              src={imageUrl}
              alt={`Instagram Feed ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Hover Overlay */}
            <div
              className="
                absolute inset-0 bg-black/40 flex items-center justify-center 
                opacity-0 group-hover:opacity-100 
                transition-opacity duration-300
              "
            >
              <InstagramIcon />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstagramFeedSection;
