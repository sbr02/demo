import React from "react";

const testimonials = [
  { name: "Amogh Kaushik", text: "Good internet service provider. Rarely face any connection issues but prompt resolution is provided in such cases." },
  { name: "Angad Raut", text: "Best service I have ever got in wifi from so many year's ... Happy with specific net services 😊 …" },
  { name: "Chaitanya Bal", text: "Regarding Wifi Speed: It is always consistent as per plan taken, with very minimal downtime. Tariff: Reasonable tariff. Service: Service / assistance for issues is very good." },
  { name: "Amit Vele", text: "Using their service from past 12 years. No issue so far. Prompt response within 1-2hours if internet is down Recommended from my end." },
  { name: "Sachin Naik", text: "Prompt Service. Always help and sort out the issues if any. I appreciate and say keep up the good work. I am using the specific net more than 2 years now and am happy." },
];

const Testimonials = ({ dark }) => {
  const cardPositions = [
    { top: "0rem", left: "24%" },
    { top: "0rem", left: "76%" },
    { top: "14rem", left: "50%" },
    { top: "28rem", left: "24%" },
    { top: "28rem", left: "76%" },
  ];

  return (
    <section id="testimonials" className={`py-24 transition-colors duration-300 ${dark ? "bg-black text-white" : "bg-white text-black"}`}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12">

        {/* Left Side - Heading */}
        <div className="lg:w-1/3 flex flex-col justify-center mb-12 lg:mb-0 text-center lg:text-left">
          <h2 className="text-4xl font-bold mb-2">TESTIMONIALS</h2>
          <h3 className={`text-xl mb-1 ${dark ? "text-white" : "text-black"}`}>Customers Review in last 3 months</h3>
        </div>

        {/* Right Side - Scattered Cards */}
        <div className="lg:w-2/3 relative h-auto lg:h-[500px]">
          {/* Mobile wrapper: flex-col stack */}
          <div className="flex flex-col items-center gap-6 lg:hidden">
            {testimonials.map((testimonial, index) => (
              <ReviewCard key={index} dark={dark} data={testimonial} />
            ))}
          </div>

          {/* Desktop scattered cards */}
          <div className="hidden lg:block relative h-[500px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="absolute transition-all duration-300"
                style={{
                  top: cardPositions[index].top,
                  left: cardPositions[index].left,
                  transform: "translateX(-50%)",
                  zIndex: 10,
                }}
              >
                <ReviewCard dark={dark} data={testimonial} />
              </div>
          ))}
          </div>
          

        </div>
      </div>
    </section>
  );
};

const ReviewCard = ({ dark, data }) => (
  <div className={`w-60 h-50 rounded-2xl shadow-md p-3 text-center transform transition-all duration-300 cursor-pointer ${dark ? "bg-gray-900 text-white" : "bg-blue-50 text-black"} hover:-translate-y-5 hover:shadow-2xl flex flex-col justify-between`}>
    <div className="text-4xl mb-2">👤</div>
    <p className="italic mb-2 text-sm overflow-hidden">{data.text}</p>
    <p className="font-semibold text-base">{data.name}</p>
  </div>
);

export default Testimonials;

