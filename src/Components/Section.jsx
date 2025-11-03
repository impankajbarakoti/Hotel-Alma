import React from "react";
import { Dumbbell, Waves, UtensilsCrossed } from "lucide-react";

const Section = () => {
  return (
    <section className="w-full bg-black/60 backdrop-blur-md py-10 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 text-white text-center">
          {/* Fitness Center */}
          <div className="flex flex-col items-center space-y-3 transition-transform duration-300 hover:scale-105">
            <Dumbbell className="h-10 w-10 sm:h-12 sm:w-12 text-yellow-400" />
            <span className="text-sm sm:text-base md:text-lg font-light">
              Fitness Center
            </span>
          </div>

          {/* Swimming Pool */}
          <div className="flex flex-col items-center space-y-3 transition-transform duration-300 hover:scale-105">
            <Waves className="h-10 w-10 sm:h-12 sm:w-12 text-yellow-400" />
            <span className="text-sm sm:text-base md:text-lg font-light">
              Swimming Pool
            </span>
          </div>

          {/* Restaurant Center */}
          <div className="flex flex-col items-center space-y-3 transition-transform duration-300 hover:scale-105">
            <UtensilsCrossed className="h-10 w-10 sm:h-12 sm:w-12 text-yellow-400" />
            <span className="text-sm sm:text-base md:text-lg font-light">
              Restaurant Center
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
