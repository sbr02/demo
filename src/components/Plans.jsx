// import React from "react";

// // Plan data
// const plans = [
//   {
//     speed: "20 Mbps",
//     description:
//       "Perfect for basic web browsing, checking emails, and light social media usage. Ideal for 1-2 devices with minimal streaming.",
//     price: 450,
//     image: "img20.png",
//   },
//   {
//     speed: "30 Mbps",
//     description:
//       "Great for web browsing, video calls, and streaming music or standard-definition videos. Supports 2-3 devices simultaneously.",
//     price: 500,
//     image: "img30.png",
//   },
//   {
//     speed: "50 Mbps",
//     description:
//       "This speed is perfect for basic web browsing, checking emails, and video calling. You can also stream music and standard definition videos with ease.",
//     price: 550,
//     image: "img50.png",
//   },
//   {
//     speed: "100 Mbps",
//     description:
//       "Ideal for HD video streaming, online gaming, and multiple devices connected simultaneously. Smooth and fast experience for small families or shared apartments.",
//     price: 600,
//     image: "img100.png",
//   },
//   {
//     speed: "200 Mbps",
//     description:
//       "Ultra-fast internet for heavy streaming, gaming, large file downloads, and multiple devices. Perfect for offices or homes with many users and smart devices.",
//     price: 650,
//     image: "img200.png",
//   },
// ];

// // Plan Card Component
// const PlanCard = ({ speed, description, price, image, dark }) => (
//   <div
//     className={`rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col justify-between w-72 sm:w-80 h-[420px] mx-auto ${
//       dark ? "bg-gray-800 text-white" : "bg-blue-50 text-black"
//     }`}
//   >
//     {/* Image and speed */}
//     {image && (
//       <img
//         src={image}
//         alt={`${speed} plan`}
//         className="w-24 h-24 object-cover rounded-full mb-4 mx-auto"
//       />
//     )}
//     <h2
//       className={`text-2xl font-bold mb-4 text-center ${
//         dark ? "text-blue-400" : "text-blue-600"
//       }`}
//     >
//       {speed}
//     </h2>

//     {/* Description */}
//     <p className="mb-6 flex-grow text-center">{description}</p>

//     {/* Bottom row: Price left, Button right */}
//     <div className="flex justify-between items-center mt-auto">
//       <div className="text-left">
//         <p className={`font-bold text-sm ${dark ? "text-white" : "text-black"}`}>
//           Monthly Plan
//         </p>
//         <p className={`text-xl font-bold ${dark ? "text-white" : "text-black"}`}>
//           ₹ {price}
//         </p>
//       </div>
//       <button
//         className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all duration-300 transform hover:scale-105"
//       >
//         View More
//       </button>
//     </div>
//   </div>
// );

// // Plans Section
// const Plans = ({ dark }) => (
//   <div
//     id="plans"
//     className={`py-20 px-6 pt-30 lg:px-16 transition-colors duration-300 ${
//       dark ? "bg-black text-white" : "bg-white text-black"
//     }`}
//   >
//     <h1 className="text-4xl font-bold text-center mb-12">Our Plans</h1>

//     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
//       {/* First 3 cards */}
//       {plans.slice(0, 3).map((plan, index) => (
//         <PlanCard
//           key={index}
//           speed={plan.speed}
//           description={plan.description}
//           price={plan.price}
//           image={plan.image}
//           dark={dark}
//         />
//       ))}

//       {/* Last 2 cards centered in second row */}
//       <div className="md:col-span-3 flex flex-col sm:flex-row justify-center gap-8">
//         {plans.slice(3).map((plan, index) => (
//           <PlanCard
//             key={index + 3}
//             speed={plan.speed}
//             description={plan.description}
//             price={plan.price}
//             image={plan.image}
//             dark={dark}
//           />
//         ))}
//       </div>
//     </div>
//   </div>
// );

// export default Plans;




// import React from "react";

// // Plan data
// const plans = [
//   { speed: "20 Mbps", description: "Perfect for basic web browsing, checking emails, and light social media usage. Ideal for 1-2 devices with minimal streaming.", price: 450, image: "img20.png" },
//   { speed: "30 Mbps", description: "Great for web browsing, video calls, and streaming music or standard-definition videos. Supports 2-3 devices simultaneously.", price: 500, image: "img30.png" },
//   { speed: "50 Mbps", description: "This speed is perfect for basic web browsing, checking emails, and video calling. You can also stream music and standard definition videos with ease.", price: 550, image: "img50.png" },
//   { speed: "100 Mbps", description: "Ideal for HD video streaming, online gaming, and multiple devices connected simultaneously. Smooth and fast experience for small families or shared apartments.", price: 600, image: "img100.png" },
//   { speed: "200 Mbps", description: "Ultra-fast internet for heavy streaming, gaming, large file downloads, and multiple devices. Perfect for offices or homes with many users and smart devices.", price: 650, image: "img200.png" },
// ];

// // Plan Card Component
// const PlanCard = ({ speed, description, price, image, dark }) => (
//   <div
//     className={`rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-5 flex flex-col justify-between w-64 sm:w-60 h-[420px] mx-auto ${
//       dark ? "bg-gray-800 text-white" : "bg-blue-50 text-black"
//     }`}
//   >
//     {image && (
//       <img
//         src={image}
//         alt={`${speed} plan`}
//         className="w-20 h-20 object-cover rounded-full mb-4 mx-auto"
//       />
//     )}
//     <h2
//       className={`text-2xl font-bold mb-4 text-center ${
//         dark ? "text-blue-400" : "text-blue-600"
//       }`}
//     >
//       {speed}
//     </h2>
//     <p className="mb-6 flex-grow text-center text-sm sm:text-base">{description}</p>
//     <div className="flex justify-between items-center mt-auto">
//       <div className="text-left">
//         <p className={`font-bold text-sm ${dark ? "text-white" : "text-black"}`}>
//           Monthly Plan
//         </p>
//         <p className={`text-xl font-bold ${dark ? "text-white" : "text-black"}`}>
//           ₹ {price}
//         </p>
//       </div>
//       <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all duration-300 transform hover:scale-105">
//         View More
//       </button>
//     </div>
//   </div>
// );

// // Plans Section
// const Plans = ({ dark }) => (
//   <div
//     id="plans"
//     className={`py-28 px-6 lg:px-16 transition-colors duration-300 ${
//       dark ? "bg-black text-white" : "bg-white text-black"
//     }`}
//   >
//     <h1 className="text-4xl font-bold text-center mb-5">Our Plans</h1>
//     <p className="text-center text-xl mb-12">
//       From browsing to gaming - speed for all
//     </p>
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 w-full max-w-7xl mx-auto justify-items-center">
//       {plans.map((plan, index) => (
//         <PlanCard
//           key={index}
//           speed={plan.speed}
//           description={plan.description}
//           price={plan.price}
//           image={plan.image}
//           dark={dark}
//         />
//       ))}
//     </div>
//   </div>
// );

// export default Plans;



// import React from "react";


// // Plan data
// const plans = [
//   {
//     name: "Starter Plan",
//     icon: "📱",
//     speed: "20 Mbps",
//     description: "Best for light browsing, emails, and social media on 1–2 devices.",
//     price: 450,
//     image: "starter.png",
//   },
//   {
//     name: "Everyday Plan",
//     icon: "💻",
//     speed: "30 Mbps",
//     description: "Perfect for video calls, music, and standard streaming on 2–3 devices.",
//     price: 500,
//     image: "everyday.png",
//   },
//   {
//     name: "Family Plan",
//     icon: "👨‍👩‍👧‍👦",
//     speed: "50 Mbps",
//     description: "Reliable speed for browsing, video calls, and streaming in small families.",
//     price: 550,
//     image: "family.png",
//   },
//   {
//     name: "Prime Plan",
//     icon: "🎮",
//     speed: "100 Mbps",
//     description: "Great for HD streaming, gaming, and multiple devices at once.",
//     price: 600,
//     image: "prime.png",
//   },
//   {
//     name: "Power Plan",
//     icon: "🚀",
//     speed: "200 Mbps",
//     description: "Ultra-fast speeds for 4K streaming, gaming, downloads, and smart devices.",
//     price: 650,
//     image: "power.png",
//   },
// ];

// // Plan Card Component
// const PlanCard = ({ name, icon, speed, description, price, image, dark }) => (
//   <div
//     className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-5 flex flex-col justify-between w-64 sm:w-60 min-h-[360px] mx-auto bg-white"
//     style={{ backgroundColor: "#ffffff" }} // single pastel background
//   >
//     {image && (
//       <img
//         src={image}
//         alt={`${speed} plan`}
//         className="w-50 h-50 object-cover square-full mb-5 mx-auto"
//       />
//     )}
//     <h2
//       className={`text-xl text-black sm:text-xl lg:text-2xl font-bold mb-3 text-center flex items-center justify-center gap-2`}>
//       <span>{icon}</span> {name}  ({speed})
//     </h2>
//     <p className="mb-2 text-black text-center text-sm sm:text-base">{description}</p>
//     <div className="flex justify-between items-center pt-1">
//       <div className="text-left text-black">
//         <p className={`font-bold text-black text-l `}>
//           Monthly Plan
//         </p>
//         <p className={`text-lg font-bold text-black`}>
//           ₹ {price}
//         </p>
//       </div>
//       <button className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500 transition-all duration-300 transform hover:scale-105">
//         View More
//       </button>
//     </div>
//   </div>
// );


// // Plans Section
// const Plans = ({ dark }) => (
//   <div
//     id="plans"
//     className={`py-28 px-6 lg:px-16 transition-colors duration-300 ${
//       dark ? "bg-black text-white" : "bg-white text-black"
//     }`}
//   >
//     <h1 className="text-4xl font-bold text-center mb-5">Our Plans</h1>
//     <p className="text-center text-xl mb-12">
//       From browsing to gaming — speed for all
//     </p>
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 w-full max-w-7xl mx-auto justify-items-center">
//       {plans.map((plan, index) => (
//         <PlanCard
//           key={index}
//           name={plan.name}
//           icon={plan.icon}
//           speed={plan.speed}
//           description={plan.description}
//           price={plan.price}
//           image={plan.image}
//           dark={dark}
//         />
//       ))}
//     </div>
//   </div>
// );

// export default Plans;





import React, { useState } from "react";
import Options from "./Options";

const plans = [
  {
    name: "Family Plan",
    icon: "👨‍👩‍👧‍👦",
    speed: "50 Mbps",
    description: "Reliable speed for browsing, video calls, and streaming in small families.",
    price: 450,
    image: "family.png",
    packages: [
      { name: "1 Month", planPrice: 450, installation: 1500 },
      { name: "3 Months", planPrice: 1100, installation: 1500 },
      { name: "6 Months", planPrice: 1800, installation: 1500 },
      { name: "12 Months", planPrice: 3000, installation: 1500 },
    ],
  },
  {
    name: "Prime Plan",
    icon: "🎮",
    speed: "100 Mbps",
    description: "Great for HD streaming, gaming, and multiple devices at once.",
    price: 500,
    image: "prime.png",
    packages: [
      { name: "1 Month", planPrice: 500, installation: 1500 },
      { name: "3 Months", planPrice: 1200, installation: 1500 },
      { name: "6 Months", planPrice: 2000, installation: 1500 },
      { name: "12 Months", planPrice: 3500, installation: 1500 },
    ],
  },
  {
    name: "Power Plan",
    icon: "🚀",
    speed: "200 Mbps",
    description: "Ultra-fast speeds for 4K streaming, gaming, downloads, and smart devices.",
    price: 550,
    image: "power.png",
    packages: [
      { name: "1 Month", planPrice: 550, installation: 1500 },
      { name: "3 Months", planPrice: 1350, installation: 1500 },
      { name: "6 Months", planPrice: 2300, installation: 1500 },
      { name: "12 Months", planPrice: 4000, installation: 1500 },
    ],
  },
];

// Plan Card Component
const PlanCard = ({ plan, onViewMore }) => (
  <div className="rounded-2xl shadow-lg hover:shadow-2xl transition-all gap-0 duration-300 p-5 flex flex-col justify-between w-64 sm:w-90 min-h-[360px] mx-auto bg-white">
    {plan.image && (
      <img src={plan.image} alt={`${plan.speed} plan`} className="w-80 h-80 object-cover square-full mb-5 mx-auto" />
    )}
    <h2 className="text-xl text-black sm:text-xl lg:text-2xl font-bold mb-3 text-center flex items-center justify-center gap-2">
      <span>{plan.icon}</span> {plan.name} ({plan.speed})
    </h2>
    <p className="mb-2 text-black text-center text-sm sm:text-base">{plan.description}</p>
    <div className="flex justify-between items-center pt-1">
      <div className="text-left text-black">
        <p className="font-bold text-black text-l">Monthly Plan</p>
        <p className="text-lg font-bold text-black">₹ {plan.price}</p>
      </div>
      <button
        onClick={() => onViewMore(plan)}
        className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500 transition-all duration-300 transform hover:scale-105"
      >
        View More
      </button>
    </div>
  </div>
);

// Plans Section
const Plans = ({ dark }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <div id="plans" className={`py-28 px-6 lg:px-16 transition-colors duration-300 ${dark ? "bg-black text-white" : "bg-white text-black"}`}>
      <h1 className="text-4xl font-bold text-center mb-5">Our Plans</h1>
      <p className="text-center text-xl mb-12">From browsing to gaming — speed for all</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl mx-auto place-items-center">

        {plans.map((plan, index) => (
          <PlanCard key={index} plan={plan} onViewMore={setSelectedPlan} />
        ))}
      </div>

      {selectedPlan && (
        <Options planName={selectedPlan.name} packages={selectedPlan.packages} onClose={() => setSelectedPlan(null)} />
      )}
    </div>
  );
};

export default Plans;


