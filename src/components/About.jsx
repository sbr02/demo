import React from "react";

const About = ({ dark }) => {
  return (
    <div
      id="aboutus"
      className={`flex flex-col py-16 px-6 pt-30 lg:px-24 gap-6 items-center transition-colors duration-300 ${
        dark ? "bg-black" : "bg-white"
      }`}
    >
      {/* Heading */}
      <h1
        className={`text-3xl md:text-4xl font-bold text-center transition-colors duration-300 ${
          dark ? "text-white" : "text-black"
        }`}
      >
        About Us
      </h1>

      {/* Image + Text */}
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 w-full max-w-6xl">
        {/* Circle Image */}
        <div className="flex justify-center lg:w-1/2 mb-4 lg:mb-0">
          <img
            src="/img2.jpg"
            alt="About"
            className="w-64 h-64 md:w-200 md:h-100 object-fill"
          />
        </div>

        {/* Paragraph Text */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-3 md:space-y-4">
          <p
            className={`text-lg md:text-xl transition-colors duration-300 ${
              dark ? "text-white" : "text-black"
            }`}
          >
            At Specific Net, we aim to provide internet that is ⚡ Fast , 🌐 Reliable, and 💰 Affordable, keeping homes and businesses connected 24/7.
          </p>

          <p
            className={`text-lg md:text-xl transition-colors duration-300 ${
              dark ? "text-white" : "text-black"
            }`}
          >
            With our advanced Fiber-to-the-Home (FTTH) technology, customers enjoy:
          </p>
          <ul className={`space-y-2 transition-colors text-lg md:text-xl ${
              dark ? "text-white" : "text-black"
            }`}>
            <li className="flex items-start">
              <span className="w-6">📺</span>
              <span>Seamless streaming and entertainment.</span>
            </li>
            <li className="flex items-start">
              <span className="w-6">🎮</span>
              <span>Lag-free gaming.</span>
            </li>
            <li className="flex items-start">
              <span className="w-6">💼</span>
              <span>Smooth work-from-home experience.</span>
            </li>
          </ul>

          <p
            className={`text-lg md:text-xl transition-colors duration-300 ${
              dark ? "text-white" : "text-black"
            }`}
          >
            Our dedicated support team is available round the clock to ensure uninterrupted connectivity and fast service whenever needed.
          </p>

          <p
            className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
              dark ? "text-white" : "text-black"
            }`}
          >
            Specific Net is Fast, Reliable, Affordable and Always Connected.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
