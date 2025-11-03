import React, { useState } from "react";

const testimonials = [
  {
    quote:
      "Experience unparalleled luxury and personalized service at Almaris Hotel, where every stay is a journey into sophistication, comfort, and unforgettable memories.",
    author: "Donette Fondren",
  },
  {
    quote:
      "Absolutely exceptional! The attention to detail and the warmth of the staff made our anniversary trip truly special. We can't wait to return.",
    author: "Sophia & Liam Miller",
  },
  {
    quote:
      "A perfect blend of modern amenities and classic elegance. Almaris Hotel provided a tranquil escape that exceeded all our expectations.",
    author: "Dr. Evelyn Reed",
  },
  {
    quote:
      "From the stunning views to the exquisite dining, every moment at Almaris was a delight. Highly recommend for anyone seeking true luxury.",
    author: "Marcus Chen",
  },
];

const TestimonialSection2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 font-sans text-gray-800">
      <div className="w-full max-w-3xl text-center px-4 md:px-8 py-12 rounded-lg">
        {/* Quotation mark icon */}
        <span
          className="inline-block text-6xl text-amber-700 opacity-75 mb-6 leading-none select-none"
          style={{ fontFamily: "Georgia, serif" }}
        >
          &ldquo;
        </span>

        {/* Testimonial Quote */}
        <p className="text-xl md:text-3xl font-serif leading-relaxed mb-8 text-gray-700">
          {testimonials[currentIndex].quote}
        </p>

        {/* Author */}
        <p className="text-sm md:text-base font-medium text-gray-600 tracking-wide uppercase">
          {testimonials[currentIndex].author}
        </p>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-10 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300
                ${
                  currentIndex === index
                    ? "bg-amber-700 opacity-75"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection2;
