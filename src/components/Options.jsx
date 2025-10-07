import React, { useState } from "react";

const Options = ({ planName, packages, onClose }) => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  // Your WhatsApp number (with country code, no +)
  const whatsappNumber = "9222220453";

  const handleBuyNow = () => {
    if (selectedPackage !== null) {
      const pkg = packages[selectedPackage];

      // Pre-filled message with plan, package, and prices
      const message = `Hi, I want to enquire about the ${planName} - ${pkg.name} package.
Plan price: ₹${pkg.planPrice}
Installation charges: ₹${pkg.installation}`

      // Detect mobile device
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

      // WhatsApp URL depending on device
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center pt-20 z-50">
      <div className="bg-white rounded-2xl p-8 w-11/12 md:w-3/4 lg:w-1/2 shadow-xl relative text-black">
        <button
          className="absolute top-4 right-4 text-black text-2xl font-bold hover:text-gray-900"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">{planName} Package Duration</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {packages.map((pkg, index) => (
            <div
              key={index}
              onClick={() => setSelectedPackage(index)}
              className={`border rounded-xl p-4 cursor-pointer transition-all ${
                selectedPackage === index ? "border-black bg-gray-400" : "border-black hover:bg-gray-50"
              }`}
            >
              <h3 className="font-bold text-xl mb-2">{pkg.name}</h3>
              <p>Plan price: ₹ {pkg.planPrice}</p>
              <p>Installation charges: ₹ {pkg.installation}</p>
            </div>
          ))}
        </div>

        {selectedPackage !== null && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleBuyNow}
              className="px-6 py-3 rounded-lg bg-green-600 text-white font-bold hover:bg-green-500 transition-all"
            >
              Buy Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Options;
