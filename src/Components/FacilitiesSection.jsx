import React from "react";
import { Tv, Briefcase, Wifi, Lock, Building2 } from "lucide-react"; // ✅ Removed 'City' (invalid export)

const MAIN_BEDROOM_IMAGE_URL =
  "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800";
const LIVING_ROOM_IMAGE_URL =
  "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=400";

// --- Facility Data ---
const facilities = [
  {
    name: "Cable TV",
    icon: Tv,
    description: "Access premium channels and entertainment anytime.",
  },
  {
    name: "Work Desk",
    icon: Briefcase,
    description: "Comfortable workspace designed for productivity.",
  },
  {
    name: "Free Wifi",
    icon: Wifi,
    description: "High-speed wireless internet access in all rooms.",
  },
  {
    name: "Safebox",
    icon: Lock,
    description: "Keep your valuables secure in our digital safe.",
  },
  {
    name: "Balcony",
    icon: Building2,
    description: "Enjoy fresh air and relaxing views from your balcony.",
  },
  {
    name: "City View",
    icon: Building2, // ✅ Fallback icon (City not available)
    description: "Marvel at breathtaking views of the city skyline.",
  },
];

const FacilitiesSection = () => {
  const ICON_COLOR = "#A3897B"; // Elegant tone matching your brand aesthetic

  return (
    <section className="bg-white py-16 sm:py-24 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-500 font-light">
            Discover
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800">
            Facilities
          </h2>
        </div>

        {/* --- Content Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Image Collage */}
          <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[550px]">
            {/* Bedroom Image (Top Right) */}
            <img
              src={MAIN_BEDROOM_IMAGE_URL}
              alt="Bedroom area"
              className="absolute top-0 right-10 w-3/4 h-3/4 object-cover rounded-lg shadow-xl transform translate-x-[10%] translate-y-[5%]"
            />
            {/* Living Room Image (Bottom Left) */}
            <img
              src={LIVING_ROOM_IMAGE_URL}
              alt="Living room chairs"
              className="absolute bottom-0 left-10 w-3/4 h-3/4 object-cover rounded-lg shadow-xl transform -translate-x-[10%] -translate-y-[5%]"
            />
            {/* Center Overlay Logo */}
            {/* <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/60 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-white text-3xl sm:text-4xl font-bold tracking-widest">
                ALMARIS
              </h3>
              <div className="flex justify-center mt-2 space-x-1">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <span
                      key={i}
                      className="text-yellow-500 text-sm sm:text-base"
                    >
                      ★
                    </span>
                  ))}
              </div>
            </div> */}
          </div>

          {/* Right: Facility List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 lg:pl-10">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 transition-transform duration-300 hover:scale-105"
              >
                <facility.icon
                  className="w-8 h-8 flex-shrink-0"
                  style={{ color: ICON_COLOR }}
                  strokeWidth={1.5}
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    {facility.name}
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
