import React from "react";
import footerimg from "../assets/footer.jpeg"

const Footer = ({ lang }) => {
  const footerLinks = {
    en: ["Home", "About","Projects" , "Services" , "Contact"],
    ar: ["الرئيسية", "من نحن", " المشاريع" , "الخدمات" , " تواصل معنا"],
  };

  return (
    <footer
      className="text-white mt-20"
      style={{
       backgroundImage: `url(${footerimg})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black/50">
        <div className="container mx-auto px-4 py-8 flex flex-col items-center gap-4">
          {/* Links */}
          <div
            className={`flex flex-wrap justify-center gap-8 ${
              lang === "ar" ? "rtl" : "ltr"
            }`}
          >
            {footerLinks[lang].map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-sm hover:text-[#FF7A00] transition-colors duration-300 font-medium"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full border-t border-white/30 mt-3"></div>

          {/* Copyright */}
          <div className="text-center text-xs text-white/70 pt-3">
            {lang === "en"
              ? "© 2025 Saaed Wafi. All rights reserved."
              : "© 2025 سعد وافي. جميع الحقوق محفوظة."}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
