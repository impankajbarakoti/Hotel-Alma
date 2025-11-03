import React from "react";

const ContactFormSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Form submitted! (In a real application, this would send data to a server.)"
    );
  };

  const inputClasses =
    "w-full p-4 border border-gray-300 focus:border-amber-700 focus:ring-1 focus:ring-amber-700 outline-none transition duration-300 bg-white text-gray-800 placeholder-gray-500 text-base rounded-md";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-2";

  return (
    <section className="bg-white  -mt-30 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto py-16">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-serif text-gray-800 text-center mb-12">
          Write a Message
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name and Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className={labelClasses}>
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                className={inputClasses}
                required
              />
            </div>

            <div>
              <label htmlFor="lastName" className={labelClasses}>
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                className={inputClasses}
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className={labelClasses}>
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              className={inputClasses}
              required
            />
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className={labelClasses}>
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              className={inputClasses}
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className={labelClasses}>
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Your Message"
              className={`${inputClasses} resize-y`}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-amber-700 text-white font-medium uppercase tracking-wider text-sm 
                         shadow-md hover:bg-amber-800 transition duration-300 rounded-md"
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;
