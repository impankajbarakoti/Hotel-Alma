import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const HistorySection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // only run once
    threshold: 0.2, // triggers when 20% is visible
  });

  return (
    <section className="bg-white -mt-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* --- Left Column: Text Content --- */}
        <div className="lg:pr-8">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
            Welcome
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 leading-tight mb-8">
            History of Our Hotel
          </h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            Est deserunt sed enim reprehenderit pariatur id reprehenderit in
            cupidatat in culpa sunt tempor pariatur nostrud minim irure culpa do
            magna. Nisi aute do ut elit esse dolor amet cupidatat amet
            voluptatem laboris cillum mollit elit anim amet enim ut veniam anim
            ut nostrud. Esse et dolor nisi laboris aliquip et irure et ad ut
            voluptate adipisicing sint ut est deserunt irure do do id laborum
            pariatur ut enim labore labore occaecat dolore laboris quis veniam
            magna laborum nulla dolor officia aliqua sunt.
          </p>
        </div>

        {/* --- Right Column: Image + Stats Grid --- */}
        <div
          ref={ref}
          className="grid grid-cols-2 grid-rows-2 gap-6 items-stretch"
        >
          {/* --- Top Left Image --- */}
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/7-768x511.webp"
              alt="Luxurious hotel room"
              className="w-full h-full object-cover"
            />
          </div>

          {/* --- Top Right Stat Card --- */}
          <div className="bg-amber-700 text-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <p className="text-4xl md:text-5xl font-bold font-serif mb-2">
              {inView && <CountUp end={105} duration={2.5} />}+
            </p>
            <p className="text-lg text-center opacity-90">Menu Selection</p>
          </div>

          {/* --- Bottom Left Stat Card --- */}
          <div className="bg-amber-700 text-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <p className="text-4xl md:text-5xl font-bold font-serif mb-2">
              {inView && <CountUp end={120} duration={2.5} />}+
            </p>
            <p className="text-lg text-center opacity-90">Rooms Available</p>
          </div>

          {/* --- Bottom Right Image --- */}
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/8-768x511.webp"
              alt="Variety of delicious food"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
