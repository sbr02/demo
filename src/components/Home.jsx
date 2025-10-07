import React from "react";

const Home = ({ dark }) => {
  const scrollToPlans = () => {
    const plansSection = document.getElementById("plans");
    if (plansSection) plansSection.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContactus = () => {
    const contactusSection = document.getElementById("contactus");
    if (contactusSection) contactusSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="home"
      className={`flex flex-col lg:flex-row min-h-screen transition-colors duration-500 ${
        dark ? "bg-black" : "bg-white"
      }`}
    >
      {/* Left Side */}
      <div className="lg:w-1/2 flex flex-col justify-center px-6 lg:h-screen z-10">
        <div className="flex flex-col items-center lg:items-start space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent text-center lg:text-left">
            BE SCALABLE
          </h1>
          <h2
            className={`text-2xl lg:text-3xl mt-2 text-center lg:text-left ${
              dark ? "text-white" : "text-black"
            }`}
          >
            Reliable, fast internet so you can focus on work or relax at home.
          </h2>

          <div className="flex gap-4 mt-4 justify-center lg:justify-start">
            <button
              onClick={scrollToContactus}
              className={`px-4 py-3 rounded transition-colors duration-300 ${
                dark
                  ? "bg-blue-600 text-white hover:bg-blue-500"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              Contact Us
            </button>
            <button
              onClick={scrollToPlans}
              className={`px-6 py-3 rounded transition-colors duration-300 ${
                dark
                  ? "bg-gray-700 text-white hover:bg-gray-600"
                  : "bg-gray-300 text-black hover:bg-gray-400"
              }`}
            >
              View Plans
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Video */}
      <div className="lg:w-177 lg:h-177 relative overflow-hidden">
        {/* key={dark ? "dark" : "light"} forces reload on toggle */}
        <video
          key={dark ? "dark" : "light"}
          autoPlay
          loop
          muted
          playsInline
          className="w-auto h-auto object-cover transition-opacity duration-500"
        >
          <source src={dark ? "/photo1.mp4" : "/photo2.mp4"} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Home;
