import React from "react";

const MapSection = () => {
  return (
    <section className=" px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-serif text-gray-800 text-center mb-8">
          Find Us Here
        </h2>

        {/* Responsive Map */}
        <div
          className="relative w-full overflow-hidden rounded-lg shadow-lg"
          style={{ paddingTop: "56.25%" }}
        >
          <iframe
            title="Hotel Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9363727390413!2d-74.00711968459347!3d40.71277597933075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3160f1f3f1%3A0x1a2b3c4d5e6f7!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1696357681234!5m2!1sen!2sin"
            width="600"
            height="450"
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
