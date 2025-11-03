import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; // Import icons

// Data for the team members
const teamMembers = [
  {
    name: "Jeffery Mussman",
    title: "Founder & CEO",
    imageUrl:
      "https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/1-9.webp",
  },
  {
    name: "Sophia Jenkins",
    title: "Founder & CEO",
    imageUrl:
      "https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/2-9.webp",
  },
  {
    name: "Ethan Reynolds",
    title: "Founder & CEO",
    imageUrl:
      "https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/3-6.webp",
  },
  {
    name: "Noah Anderson",
    title: "Founder & CEO",
    imageUrl:
      "https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/4-6.webp",
  },
];

// Updated SocialLink Component
const SocialLink = ({ icon: Icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="mx-2 text-gray-500 hover:text-amber-700 transition duration-300 text-xl"
  >
    <Icon />
  </a>
);

const TeamSection = () => {
  return (
    <section className="bg-amber-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
          Behind The Scene
        </p>
        <h2 className="text-4xl md:text-5xl font-serif text-gray-800 leading-tight mb-12">
          Our Team
        </h2>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Image */}
              <div className="w-full relative overflow-hidden rounded-md shadow-lg aspect-[4/5]">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{member.title}</p>

                {/* Social Icons */}
                <div className="flex justify-center">
                  <SocialLink icon={FaFacebookF} href="#" />
                  <SocialLink icon={FaTwitter} href="#" />
                  <SocialLink icon={FaInstagram} href="#" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
