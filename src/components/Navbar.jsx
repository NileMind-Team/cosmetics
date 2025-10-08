import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../Assets/logo.png";

const Navbar = () => {
  const [lang, setLang] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const toggleLang = () => {
    setLang(lang === "en" ? "ar" : "en");
  };

  const navLinks = {
    en: ["Home", "About", "Projects", "Services", "Contact"],
    ar: ["الرئيسية", "من نحن", "المشاريع", "الخدمات", "تواصل معنا"],
  };

  return (
    <header className="bg-white text-[#0056B3] shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo Image */}
        <div
          className={`flex items-center ${
            lang === "ar" ? "justify-end" : "justify-start"
          }`}
        >
          <img
            src={logo}
            alt="Saaed Wafi Logo"
            className="w-24 md:w-28 object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 rtl:space-x-reverse">
          {navLinks[lang].map((link, index) => (
            <a
              key={index}
              href="#"
              className="text-[#0056B3] hover:text-[#FF7A00] transition duration-200 font-medium"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="border border-[#FF7A00] text-[#FF7A00] px-3 py-1 rounded-md hover:bg-[#FF7A00] hover:text-white transition duration-200"
          >
            {lang === "en" ? "AR" : "EN"}
          </button>

          <button className="bg-[#FF7A00] text-white px-4 py-2 rounded-md hover:bg-[#e96e00] transition duration-200 font-semibold">
            {lang === "en" ? "Request Quote" : "اطلب عرض"}
          </button>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden text-[#0056B3]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav
            className={`flex flex-col ${
              lang === "ar" ? "items-end pr-6" : "items-start pl-6"
            } py-4 space-y-4`}
          >
            {navLinks[lang].map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-[#0056B3] hover:text-[#FF7A00] transition duration-200 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}

            <button
              onClick={() => {
                toggleLang();
                setMenuOpen(false);
              }}
              className="border border-[#FF7A00] text-[#FF7A00] px-4 py-1 rounded-md hover:bg-[#FF7A00] hover:text-white transition duration-200"
            >
              {lang === "en" ? "AR" : "EN"}
            </button>

            <button
              onClick={() => setMenuOpen(false)}
              className="bg-[#FF7A00] text-white px-5 py-2 rounded-md hover:bg-[#e96e00] transition duration-200 font-semibold"
            >
              {lang === "en" ? "Request Quote" : "اطلب عرض"}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
