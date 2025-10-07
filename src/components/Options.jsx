import React, { useState } from "react";

const Options = ({ planName, packages, onClose }) => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const whatsappNumber = "9222220453";

  const handleBuyNow = () => {
    if (selectedPackage !== null) {
      const pkg = packages[selectedPackage];
      const message = `Hi, I want to enquire about the ${planName} - ${pkg.name} package.
Plan price: ₹${pkg.planPrice}
Installation charges: ₹${pkg.installation}`;

      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 overflow-auto p-4">
      {/* Modal container */}
      <div className="bg-white rounded-2xl shadow-xl relative max-w-3xl mx-auto my-8 p-6 md:p-8 max-h-[90vh] flex flex-col">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-black text-2xl font-bold hover:text-gray-900"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Modal heading */}
        <h2 className="text-2xl font-bold mb-6 text-center">{planName} Package Duration</h2>

        {/* Packages list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow overflow-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              onClick={() => setSelectedPackage(index)}
              className={`border rounded-xl p-4 cursor-pointer transition-all flex flex-col justify-between ${
                selectedPackage === index ? "border-black bg-gray-200" : "border-black hover:bg-gray-50"
              }`}
            >
              <div>
                <h3 className="font-bold text-xl mb-2">{pkg.name}</h3>
                <p>Plan price: ₹ {pkg.planPrice}</p>
                <p>Installation charges: ₹ {pkg.installation}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Buy Now button at the bottom */}
        {selectedPackage !== null && (
          <div className="mt-4 md:mt-6 flex justify-center">
            <button
              onClick={handleBuyNow}
              className="px-6 py-3 rounded-lg bg-green-600 text-white font-bold hover:bg-green-500 transition-all w-full md:w-auto"
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
