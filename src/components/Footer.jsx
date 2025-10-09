import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mb-6">
        <a
          href="https://www.facebook.com/specificnetISP/"
          target="_blank"
          rel="noreferrer"
          className="text-xl hover:text-blue-500"
        >
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/specificnet_internet_broadband/?hl=en"
          target="_blank"
          rel="noreferrer"
          className="text-xl hover:text-pink-500"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/specificnet-dombivli-2b4671183/"
          target="_blank"
          rel="noreferrer"
          className="text-xl hover:text-blue-400"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="mailto:specificnetconnect@gmail.com?subject=Inquiry&body=Hello, I would like to know more about..."
          className="text-xl hover:text-yellow-400"
        >
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a
          href="https://wa.me/9222220453"
          target="_blank"
          rel="noreferrer"
          className="text-xl hover:text-green-500"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>

      {/* Rights */}
      <div className="text-center text-sm text-gray-400">
        <p>© 2025 SpecificNet, All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;


