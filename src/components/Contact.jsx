import React from "react";

const Contact = ({ dark }) => {
  // Smooth scroll function
  const scrollToPlans = () => {
    const plansSection = document.getElementById("plans");
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="contactus"
      className={`flex flex-col py-20 px-6 pt-30 lg:px-12 gap-8 transition-colors duration-300 ${
        dark ? "bg-black" : "bg-white"
      }`}
    >
      {/* Heading */}
      <h1
        className={`text-4xl font-bold w-full text-center mb-8 transition-colors duration-300 ${
          dark ? "text-white" : "text-black"
        }`}
      >
        Contact Us
      </h1>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-8 w-full mx-auto">
        {/* Left Side - Details */}
        <div
          className={`lg:w-1/2 flex flex-col gap-6 p-8 rounded-lg justify-between shadow-lg transition-colors duration-300 ${
            dark ? "bg-blue-900 text-white border border-gray-700" : "bg-blue-600 text-white border border-gray-300"
          }`}
        >
          <div className="space-y-4">
            <p>
              <strong>Address:</strong> 008, Nilesh Bhuvan, Gograswadi, Near
              Hotel Amantran, Dombivli East, Maharashtra 421201
            </p>
            <p>
              <strong>Phone Number:</strong> 09222220453
            </p>
            <p>
              <strong>Open Timings:</strong> Mon-Sun, 10 AM - 8 PM
            </p>
          </div>

          {/* Centered Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <a
              href="https://wa.me/9222220453"
              target="_blank"
              rel="noreferrer"
              className="text-xl hover:text-green-500"
            >
              <button className="px-6 py-3 rounded bg-white text-blue-600 font-semibold hover:bg-gray-100 transition-colors">
                Get Connected
              </button>
            </a>
            
            <button
              onClick={scrollToPlans}
              className="px-6 py-3 rounded bg-white text-blue-600 font-semibold hover:bg-gray-100 transition-colors"
            >
              View Plans
            </button>
          </div>
        </div>

        {/* Right Side - Map */}
        <div
          className={`lg:w-1/2 border rounded-lg overflow-hidden shadow-lg transition-colors duration-300 ${
            dark ? "border-gray-700" : "border-gray-300"
          }`}
        >
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7535.193196840595!2d73.097011!3d19.212814!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795ee00fab0e1%3A0xaddccebc9366c98c!2sSPECIFIC%20NET%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1758790045732!5m2!1sen!2sin"
            className="w-full h-[350px] lg:h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
