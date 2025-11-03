

import React from "react";
const rooms = [
  {
    id: 1,
    name: "Skyline Retreat",
    capacity: "2 Adults • 1 Bed",
    imageUrl:
      "https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/3-5.webp", // Replace with your image
  },
  {
    id: 2,
    name: "Urban Loft",
    capacity: "2 Adults • 1 Bed",
    imageUrl:
      "https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/4-4.webp", // Replace with your image
  },
  {
    id: 3,
    name: "Studio Sanctuary",
    capacity: "2 Adults • 1 Bed",
    imageUrl:
      "https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/2-8.webp", // Replace with your image
  },
  {
    id: 4,
    name: "Grand Suite",
    capacity: "4 Adults • 2 Beds",
    imageUrl:
      "https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/2-8.webp", // Replace with your image
  },
  {
    id: 5,
    name: "Deluxe Corner",
    capacity: "2 Adults • 1 Bed",
    imageUrl:
      "https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/1-8.webp", // Replace with your image
  },
  {
    id: 6,
    name: "Executive Room",
    capacity: "2 Adults • 1 Bed",
    imageUrl:
      "https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/4-4.webp", // Replace with your image
  },
];

const RoomsSection = () => {
  // In a real slider, you'd manage visible items with state.
  // For this static grid, we'll just map all of them.

  return (
    <section className="bg-gradient-to-br from-gray-50 to-amber-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-sm uppercase tracking-widest text-amber-700 opacity-70 mb-2">
          Indulge & Relax
        </p>
        <h2 className="text-4xl md:text-5xl font-serif text-gray-800 leading-tight">
          Our Rooms
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Navigation arrows for a potential slider functionality */}
        {/* These are just placeholders and would require actual slider logic */}
       
        {/* Rooms Grid / Carousel Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow-lg
                         group hover:shadow-xl transition-all duration-300"
            >
              <img
                src={room.imageUrl}
                alt={room.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0    flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl  font-semibold mb-1">{room.name}</h3>
                <p className="text-sm opacity-80">{room.capacity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
