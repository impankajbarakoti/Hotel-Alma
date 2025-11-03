import React from "react";

// This component recreates the visual section from the image using Tailwind CSS and a React structure.
// It features a large, responsive container designed to hold a background image.

const VL = () => {
  // NOTE: Since this environment cannot access local files, a placeholder URL is used.
  // If you are hosting your file ('image_cd90c2.jpg'), replace the URL below with its hosted path
  // to display the actual living room image.
  const imageUrl =
    "https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/2-3.webp";

  return (
    // Main Section Container: Ensures the component takes up the full viewport height on small screens
    // and centers the content.
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-8 ">
      {/* Visual Component Card/Area */}
      <div
        className="w-full max-w-7xl h-[400px] md:h-[600px] rounded-2xl shadow-2xl overflow-hidden relative transition-all duration-300"
        style={{
          // Apply the background image using the URL
          backgroundImage: `url('${imageUrl}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/*
          Content Overlay: Used for a slight visual effect, matching the soft, natural lighting 
          in the original image.
        */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-gray-500/5">
          {/* Placeholder for any text content, placed at the bottom left for a sleek look.
            This area is intentionally left empty otherwise, as you requested no play button.
          */}
          <div className="absolute bottom-8 left-8 text-white">
            <h1 className="text-3xl font-extrabold drop-shadow-lg hidden md:block">
              Modern Home Aesthetics
            </h1>
            <p className="text-sm mt-1 font-light drop-shadow-md hidden md:block">
              Tour our latest interior design projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VL;
