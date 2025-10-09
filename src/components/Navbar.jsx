// // import React, { useState } from "react";
// // import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
// // import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// // const Navbar = ({ dark, toggleTheme }) => {
// //   const [mobileOpen, setMobileOpen] = useState(false);
// //   const links = [
// //     { name: "Home", href: "#home" },
// //     { name: "About Us", href: "#aboutus" },
// //     { name: "Services", href: "#services" },
// //     { name: "Plans", href: "#plans" },
// //     { name: "Testimonials", href: "#testimonials" },
// //     { name: "Contact Us", href: "#contactus" },
// //   ];

// //   return (
// //     <nav className={`flex justify-between items-center px-4 sm:px-2 lg:px-4 xl:px-40 py-4 sticky top-0 z-50 font-medium transition-colors duration-300 ${dark ? "bg-black/90 text-white" : "bg-white/90 text-black"}`}>
// //       {/* Logo */}
// //       <img src="/specificnet.png" alt="logo" className="w-30 sm:w-30" />

// //       {/* Desktop Links + Button */}
// //       <div className="hidden sm:flex gap-8 items-center">
// //         {links.map((link) => (
// //           <a key={link.name} href={link.href} className="hover:underline">
// //             {link.name}
// //           </a>
// //         ))}

// //         <a href="https://fast.com/" target="_blank" rel="noopener noreferrer" className=" bg-gray-900 text-white text-l font-bold flex items-center bg-primary px-2 py-1 rounded-full cursor-pointer hover:scale-105 transition-all">
// //           Speed Test
// //         </a>
// //       </div>

// //       {/* Right Section */}
// //       <div className="flex items-center gap-4">
// //         {/* Theme Toggle */}
// //         <div
// //           onClick={toggleTheme}
// //           className={`w-14 h-7 flex items-center rounded-full cursor-pointer p-1 transition-colors duration-300 ${
// //             dark ? "bg-gray-700" : "bg-gray-200"
// //           }`}
// //         >
// //           <div
// //             className={`bg-white w-5 h-5 rounded-full shadow-md flex items-center justify-center transition-transform duration-300 ${
// //               dark ? "translate-x-7" : "translate-x-0"
// //             }`}
// //           >
// //             {dark ? (
// //               <SunIcon className="w-4 h-4 text-yellow-400" />
// //             ) : (
// //               <MoonIcon className="w-4 h-4 text-gray-800" />
// //             )}
// //           </div>
// //         </div>

// //         {/* Hamburger (Mobile) */}
// //         <button
// //           className="sm:hidden focus:outline-none"
// //           onClick={() => setMobileOpen(!mobileOpen)}
// //         >
// //           {mobileOpen ? <XMarkIcon className="w-7 h-7" /> : <Bars3Icon className="w-7 h-7" />}
// //         </button>
// //       </div>

// //       {/* Mobile Backdrop */}
// //       {mobileOpen && (
// //         <div
// //           className="sm:hidden fixed inset-0 bg-black/30 z-40"
// //           onClick={() => setMobileOpen(false)}
// //         />
// //       )}

// //       {/* Mobile Menu */}
// //       <div className={`sm:hidden fixed top-0 right-0 h-full w-64 transition-transform duration-300 flex flex-col z-50 shadow-lg ${mobileOpen ? "translate-x-0" : "translate-x-full" } ${dark ? "bg-black text-white" : "bg-white text-black"}`} >
// //         {links.map((link) => (
// //           <a key={link.name} href={link.href} className="hover:underline py-4 px-4 w-full text-left" onClick={() => setMobileOpen(false)} >
// //             {link.name}
// //           </a>
// //         ))}

// //         <a href="https://fast.com/" target="_blank" rel="noopener noreferrer" className="hover:underline py-4 px-4 w-full text-left" onClick={() => setMobileOpen(false)}>
// //           Speed Test
// //         </a>

// //       </div>


// //     </nav>
// //   );
// // };

// // export default Navbar;

// import React, { useState, useEffect } from "react";
// import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// const Navbar = ({ dark, toggleTheme }) => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 970);

//   const links = [
//     { name: "Home", href: "#home" },
//     { name: "About Us", href: "#aboutus" },
//     { name: "Services", href: "#services" },
//     { name: "Plans", href: "#plans" },
//     { name: "Testimonials", href: "#testimonials" },
//     { name: "Contact Us", href: "#contactus" },
//   ];

//   const handleGbpsPlan = () => {
//     const whatsappNumber = "9222220453";
//     const message =
//       "Hello, I am interested in the 1Gbps + OTT @ ₹1499* plan for 1 month. Please share the details and installation process.";
//     const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
//       message
//     )}`;
//     window.open(url, "_blank");
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 970);
//       if (window.innerWidth > 970) setMobileOpen(false);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <nav
//       className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
//         dark ? "bg-black/90 text-white" : "bg-white/90 text-black"
//       }`}
//     >
//       <div className="max-w-[1280px] mx-auto flex justify-between items-center px-6 py-4">
//         {/* Logo */}
//         <img src="/specificnet.png" alt="logo" className="w-30 sm:w-30" />

//         <div className="flex gap-6 items-center">
//           {/* Desktop Links (hidden on mobile) */}
//           {!isMobile &&
//             links.map((link) => (
//               <a key={link.name} href={link.href} className="hover:underline">
//                 {link.name}
//               </a>
//             ))}

//           {/* SpeedTest Button (always visible) */}
//           <a
//             href="https://fast.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-gray-900 text-white text-sm flex items-center px-1 py-1 rounded-full cursor-pointer hover:scale-105 transition-transform"
//           >
//             SpeedTest
//           </a>
//         </div>


//         {/* Right Section (Theme Toggle + Mobile Hamburger / 1Gbps only on desktop) */}
//         <div className="flex items-center gap-4">
//           {/* 1Gbps Button (only on desktop) */}
//           {!isMobile && (
//             <button
//               onClick={handleGbpsPlan}
//               className="bg-green-600 text-white text-sm font-bold px-3 py-1.5 rounded-full hover:bg-green-500 transition-all whitespace-nowrap"
//             >
//               1Gbps + OTT @1499*
//             </button>
//           )}

//           {/* Theme Toggle */}
//           <div
//             onClick={toggleTheme}
//             className={`w-14 h-7 flex items-center rounded-full cursor-pointer p-1 transition-colors duration-300 ${
//               dark ? "bg-gray-700" : "bg-gray-200"
//             }`}
//           >
//             <div
//               className={`bg-white w-5 h-5 rounded-full shadow-md flex items-center justify-center transition-transform duration-300 ${
//                 dark ? "translate-x-7" : "translate-x-0"
//               }`}
//             >
//               {dark ? (
//                 <SunIcon className="w-4 h-4 text-yellow-400" />
//               ) : (
//                 <MoonIcon className="w-4 h-4 text-gray-800" />
//               )}
//             </div>
//           </div>

//           {/* Hamburger (Mobile only) */}
//           {isMobile && (
//             <button
//               className="focus:outline-none ml-2"
//               onClick={() => setMobileOpen(!mobileOpen)}
//             >
//               {mobileOpen ? (
//                 <XMarkIcon className="w-7 h-7" />
//               ) : (
//                 <Bars3Icon className="w-7 h-7" />
//               )}
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobile && (
//         <div
//           className={`fixed top-0 right-0 h-full w-64 transition-transform duration-300 flex flex-col z-50 shadow-lg ${
//             mobileOpen ? "translate-x-0" : "translate-x-full"
//           } ${dark ? "bg-black text-white" : "bg-white text-black"}`}
//         >
//           {links.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="hover:underline py-4 px-4 w-full text-left"
//               onClick={() => setMobileOpen(false)}
//             >
//               {link.name}
//             </a>
//           ))}

//           {/* 1Gbps Button inside mobile menu */}
//           <button
//             onClick={handleGbpsPlan}
//             className="bg-green-600 text-white font-bold py-4 px-4 w-full text-left rounded-md mt-2 hover:bg-green-500 transition-all"
//           >
//             1Gbps + OTT @1499*
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = ({ dark, toggleTheme }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // safe initial value

  const links = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#aboutus" },
    { name: "Services", href: "#services" },
    { name: "Plans", href: "#plans" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact Us", href: "#contactus" },
  ];

  const handleGbpsPlan = () => {
    const whatsappNumber = "9222220453";
    const message =
      "Hello, I am interested in the 1Gbps + OTT @ ₹1499* plan for 1 month. Please share the details and installation process.";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 970);
      if (window.innerWidth > 970) setMobileOpen(false);
    };

    handleResize(); // set initial value on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        dark ? "bg-black/90 text-white" : "bg-white/90 text-black"
      }`}
    >
      <div className="max-w-[1280px] mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <img src="/specificnet.png" alt="logo" className="w-30 sm:w-30" />

        {/* Desktop Links (left) */}
        {!isMobile && (
          <div className="flex gap-6 items-center">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="hover:underline">
                {link.name}
              </a>
            ))}
          </div>
        )}

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* SpeedTest Button (always visible) */}
          <a
            href="https://fast.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 text-white text-sm flex items-center px-3 py-1 rounded-full cursor-pointer hover:scale-105 transition-transform whitespace-nowrap"
          >
            SpeedTest
          </a>

          {/* 1Gbps Button (only on desktop) */}
          {!isMobile && (
            <button
              onClick={handleGbpsPlan}
              className="bg-green-600 text-white text-sm font-bold px-3 py-1.5 rounded-full hover:bg-green-500 transition-all whitespace-nowrap"
            >
              1Gbps + OTT @1499*
            </button>
          )}

          {/* Theme Toggle */}
          <div
            onClick={toggleTheme}
            className={`w-14 h-7 flex items-center rounded-full cursor-pointer p-1 transition-colors duration-300 ${
              dark ? "bg-gray-700" : "bg-gray-200"
            }`}
          >
            <div
              className={`bg-white w-5 h-5 rounded-full shadow-md flex items-center justify-center transition-transform duration-300 ${
                dark ? "translate-x-7" : "translate-x-0"
              }`}
            >
              {dark ? (
                <SunIcon className="w-4 h-4 text-yellow-400" />
              ) : (
                <MoonIcon className="w-4 h-4 text-gray-800" />
              )}
            </div>
          </div>

          {/* Hamburger (Mobile only) */}
          {isMobile && (
            <button
              className="focus:outline-none ml-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <XMarkIcon className="w-7 h-7" />
              ) : (
                <Bars3Icon className="w-7 h-7" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div
          className={`fixed top-0 right-0 h-full w-64 transition-transform duration-300 flex flex-col z-50 shadow-lg ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          } ${dark ? "bg-black text-white" : "bg-white text-black"}`}
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:underline py-4 px-4 w-full text-left"
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </a>
          ))}

          {/* 1Gbps Button inside mobile menu */}
          <button
            onClick={handleGbpsPlan}
            className="bg-green-600 text-white font-bold py-4 px-4 w-full text-left rounded-md mt-2 hover:bg-green-500 transition-all"
          >
            1Gbps + OTT @1499*
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
