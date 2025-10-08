// import React, { useState, useEffect } from "react";
// import { Menu, X, Sun, Moon, Globe } from "lucide-react";
// import logo from "../Assets/logo.png";

// const Navbar = () => {
//   const [lang, setLang] = useState("en");
//   const [darkMode, setDarkMode] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);

//   useEffect(() => {
//     document.documentElement.lang = lang;
//     document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
//   }, [lang]);

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [darkMode]);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768 && menuOpen) {
//         setMenuOpen(false);
//         setIsAnimating(false);
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [menuOpen]);

//   const toggleLang = () => {
//     setLang(lang === "en" ? "ar" : "en");
//   };

//   const handleMobileLangToggle = () => {
//     toggleLang();
//   };

//   const toggleMenu = () => {
//     if (menuOpen) {
//       setIsAnimating(true);
//       setTimeout(() => {
//         setMenuOpen(false);
//         setIsAnimating(false);
//       }, 400);
//     } else {
//       setMenuOpen(true);
//     }
//   };

//   const navLinks = {
//     en: ["Home", "About", "Projects", "Services", "Contact"],
//     ar: ["الرئيسية", "من نحن", "المشاريع", "الخدمات", "تواصل معنا"],
//   };

//   return (
//     <header className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white fixed w-full top-0 left-0 z-50 transition-colors duration-300 shadow-[0_4px_12px_rgba(0,86,179,0.15)]">
//       <div className="container mx-auto px-3 py-0.5 flex items-center justify-between h-14 md:h-16">
//         {/* Logo */}
//         <div
//           className={`flex items-center ${
//             lang === "ar" ? "justify-end" : "justify-start"
//           }`}
//         >
//           <img
//             src={logo}
//             alt="Saaed Wafi Logo"
//             className="w-28 md:w-28 object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
//           />
//         </div>

//         {/* Desktop Links */}
//         <nav className="hidden md:flex space-x-4 rtl:space-x-reverse text-sm">
//           {navLinks[lang].map((link, index) => (
//             <a
//               key={index}
//               href="#"
//               className="text-[#0056B3] hover:text-[#FF7A00] transition-all duration-300 font-medium relative group"
//             >
//               {link}
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF7A00] transition-all duration-300 group-hover:w-full"></span>
//             </a>
//           ))}
//         </nav>

//         {/* Desktop Actions */}
//         <div className="hidden md:flex items-center gap-3">
//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-200"
//             aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
//           >
//             {darkMode ? (
//               <Sun size={18} className="text-[#FF7A00]" />
//             ) : (
//               <Moon size={18} className="text-[#FF7A00]" />
//             )}
//           </button>

//           <button
//             onClick={toggleLang}
//             className="bg-[#FF7A00] text-white px-3 py-1.5 rounded-md text-sm hover:bg-[#e56a00] transition duration-200 font-medium flex items-center gap-1"
//           >
//             <Globe size={16} />
//             {lang === "en" ? "AR" : "EN"}
//           </button>
//         </div>

//         {/* Mobile Menu Button with Animation */}
//         <button
//           className="md:hidden text-gray-800 dark:text-white transition-transform duration-300"
//           onClick={toggleMenu}
//         >
//           <div
//             className={`transform transition-all duration-500 ease-in-out ${
//               menuOpen
//                 ? "rotate-180 scale-90 opacity-90"
//                 : "rotate-0 scale-100 opacity-100"
//             }`}
//           >
//             {menuOpen ? <X size={22} /> : <Menu size={22} />}
//           </div>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {(menuOpen || isAnimating) && (
//         <>
//           {/* Overlay with Blur */}
//           <div
//             className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-500 md:hidden ${
//               menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
//             }`}
//             style={{ top: "3.5rem" }}
//             onClick={toggleMenu}
//           />

//           {/* Dropdown Menu */}
//           <div
//             className={`fixed top-14 bottom-0 bg-white dark:bg-gray-900 z-50 shadow-2xl p-4 flex flex-col 
//             transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden transform
//             ${
//               lang === "ar"
//                 ? `right-0 w-[65%] ${
//                     menuOpen
//                       ? "translate-x-0 opacity-100"
//                       : "translate-x-full opacity-0"
//                   }`
//                 : `left-0 w-[65%] ${
//                     menuOpen
//                       ? "translate-x-0 opacity-100"
//                       : "-translate-x-full opacity-0"
//                   }`
//             }`}
//           >
//             {/* Links with smooth delay */}
//             <div className="flex flex-col space-y-2 w-full mt-4">
//               {navLinks[lang].map((link, index) => (
//                 <a
//                   key={index}
//                   href="#"
//                   style={{
//                     transitionDelay: `${index * 80}ms`,
//                   }}
//                   className="text-[#0056B3] dark:text-blue-300 hover:text-[#FF7A00] transition-all duration-500 font-medium text-base py-3 px-2 relative group transform hover:translate-x-1"
//                   onClick={toggleMenu}
//                 >
//                   {link}
//                   <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF7A00] transition-all duration-500 group-hover:w-full"></span>
//                 </a>
//               ))}
//             </div>

//             {/* Mobile Actions */}
//             <div className="mt-8 w-full flex justify-between items-center gap-3 px-2">
//               <button
//                 onClick={() => setDarkMode(!darkMode)}
//                 className="flex items-center justify-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300 flex-1"
//               >
//                 {darkMode ? (
//                   <Sun size={18} className="text-[#FF7A00]" />
//                 ) : (
//                   <Moon size={18} className="text-[#FF7A00]" />
//                 )}
//                 <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
//                   {darkMode
//                     ? lang === "en"
//                       ? "Light"
//                       : "فاتح"
//                     : lang === "en"
//                     ? "Dark"
//                     : "داكن"}
//                 </span>
//               </button>

//               <button
//                 onClick={handleMobileLangToggle}
//                 className="flex items-center justify-center gap-2 bg-[#FF7A00] text-white px-3 py-2 rounded-lg hover:bg-[#e56a00] transition duration-300 font-medium text-sm flex-1"
//               >
//                 <Globe size={16} />
//                 {lang === "en" ? "AR" : "EN"}
//               </button>
//             </div>
//           </div>
//         </>
//       )}
//     </header>
//   );
// };

// export default Navbar;








import React, { useEffect, useState } from "react";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import logo from "../Assets/logo.png";

const Navbar = ({ lang, setLang }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // ضبط اللغة والاتجاه على مستوى المستند
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  // ضبط الوضع الليلي
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // غلق المينيو عند تغيير حجم الشاشة
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false);
        setIsAnimating(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  // تغيير اللغة
  const toggleLang = () => setLang(lang === "en" ? "ar" : "en");

  const toggleMenu = () => {
    if (menuOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setMenuOpen(false);
        setIsAnimating(false);
      }, 400);
    } else setMenuOpen(true);
  };

  const navLinks = {
    en: ["Home", "About", "Projects", "Services", "Contact"],
    ar: ["الرئيسية", "من نحن", "المشاريع", "الخدمات", "تواصل معنا"],
  };

  return (
    <header className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white fixed w-full top-0 left-0 z-50 shadow-[0_4px_12px_rgba(0,86,179,0.15)] transition-colors duration-300">
      <div className="container mx-auto px-3 py-1 flex items-center justify-between h-14 md:h-16">
        {/* Logo */}
        <div className={`flex items-center ${lang === "ar" ? "justify-end" : "justify-start"}`}>
          <img
            src={logo}
            alt="Saaed Wafi Logo"
            className="w-28 object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-4 rtl:space-x-reverse text-sm">
          {navLinks[lang].map((link, index) => (
            <a
              key={index}
              href="#"
              className="text-[#0056B3] hover:text-[#FF7A00] transition-all duration-300 font-medium relative group"
            >
              {link}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF7A00] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-200"
          >
            {darkMode ? <Sun size={18} className="text-[#FF7A00]" /> : <Moon size={18} className="text-[#FF7A00]" />}
          </button>

          <button
            onClick={toggleLang}
            className="bg-[#FF7A00] text-white px-3 py-1.5 rounded-md text-sm hover:bg-[#e56a00] transition duration-200 font-medium flex items-center gap-1"
          >
            <Globe size={16} />
            {lang === "en" ? "AR" : "EN"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800 dark:text-white" onClick={toggleMenu}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {(menuOpen || isAnimating) && (
        <>
          <div
            className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-500 md:hidden ${
              menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            style={{ top: "3.5rem" }}
            onClick={toggleMenu}
          />

          <div
            className={`fixed top-14 bottom-0 bg-white dark:bg-gray-900 z-50 shadow-2xl p-4 flex flex-col transition-all duration-500 transform md:hidden ${
              lang === "ar"
                ? `right-0 w-[65%] ${menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`
                : `left-0 w-[65%] ${menuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`
            }`}
          >
            <div className="flex flex-col space-y-2 w-full mt-4">
              {navLinks[lang].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  style={{ transitionDelay: `${index * 80}ms` }}
                  className="text-[#0056B3] dark:text-blue-300 hover:text-[#FF7A00] transition-all duration-500 font-medium text-base py-3 px-2 relative group"
                  onClick={toggleMenu}
                >
                  {link}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF7A00] transition-all duration-500 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <div className="mt-8 w-full flex justify-between items-center gap-3 px-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center justify-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300 flex-1"
              >
                {darkMode ? <Sun size={18} className="text-[#FF7A00]" /> : <Moon size={18} className="text-[#FF7A00]" />}
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {darkMode ? (lang === "en" ? "Light" : "فاتح") : lang === "en" ? "Dark" : "داكن"}
                </span>
              </button>

              <button
                onClick={toggleLang}
                className="flex items-center justify-center gap-2 bg-[#FF7A00] text-white px-3 py-2 rounded-lg hover:bg-[#e56a00] transition duration-300 font-medium text-sm flex-1"
              >
                <Globe size={16} />
                {lang === "en" ? "AR" : "EN"}
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;

