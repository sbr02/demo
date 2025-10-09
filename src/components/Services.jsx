import React from "react";

const Services = ({ dark }) => {
  const services = [
    {
      title: "Wide Coverage & Reliable Connectivity",
      description:
        "SpecificNet ensures seamless internet connectivity with expanding network coverage across your city and nearby areas.",
      icon: "🌐",
    },
    {
      title: "Fast Installation & Quick Setup",
      description:
        "Get connected in no time! Our professional team ensures your internet is up and running swiftly, with minimal wait.",
      icon: "⚡",
    },
    {
      title: "Affordable & Transparent Plans",
      description:
        "Enjoy high-speed internet without burning a hole in your pocket. SpecificNet offers versatile plans with transparent pricing.",
      icon: "💰",
    },
    {
      title: "Customer-Centric Support",
      description:
        "Our dedicated support team is always ready to assist you, ensuring smooth online experiences for homes and offices alike.",
      icon: "🤝",
    },
    {
      title: "Cutting-Edge Technology",
      description:
        "Stay ahead with the latest broadband technology. Experience uninterrupted streaming, gaming, and work-from-home productivity.",
      icon: "🚀",
    },
    {
      title: "Secure & Stable Connection",
      description:
        "Surf, stream, and work with peace of mind. SpecificNet provides stable and secure connections for your daily online needs.",
      icon: "🔒",
    },
  ];

  return (
    <div
      id="services"
      className={`py-20 px-6 pt-30 lg:px-16 transition-colors duration-300 ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-4">Services</h1>
      <h2
        className={`text-xl text-center mb-12 ${
          dark ? "text-white" : "text-black"
        }`}
      >
        Why SpecificNet is the best choice for your internet needs
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h2 className="text-xl font-bold mb-2 text-blue-600">{service.title}</h2>
            <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

