import React, { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import logo from "../assets/logo.png";
import logodark from "../assets/logodark.png";

const Footer = ({ lang }) => {
  // نبدأ بقيمة أولية بناءً على حالة الـ <html>
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    // نراقب التغييرات على الكلاس "dark" في <html>
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const footerLinks = {
    en: ["Home", "About", "Projects", "Services", "Contact"],
    ar: ["الرئيسية", "من نحن", "المشاريع", "الخدمات", "تواصل معنا"],
  };

  const textDir = lang === "ar" ? "rtl" : "ltr";

  return (
    <footer
      className="bg-gray-200 dark:bg-gray-950 text-blue-700 dark:text-blue-300 mt-10 shadow-inner transition-colors duration-300"
      dir={textDir}
    >
      <div className="container mx-auto px-6 py-3 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src={isDarkMode ? logodark : logo}
            alt="Logo"
            className={`${
              isDarkMode ? "w-20" : "w-16"
            } mb-1 transition-all duration-300`}
          />
          <p className="text-[11px] text-blue-800 dark:text-blue-200 text-center md:text-left">
            {lang === "en"
              ? "Building trust and quality in every project."
              : "نبني الثقة والجودة في كل مشروع."}
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center">
          <h3 className="font-semibold mb-1 text-[13px]">
            {lang === "en" ? "Quick Links" : "روابط سريعة"}
          </h3>
          <ul className="flex flex-col items-center gap-1 text-[12px]">
            {footerLinks[lang].map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="hover:underline hover:text-blue-900 dark:hover:text-blue-100 transition duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* WhatsApp Contact */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="font-semibold mb-1 text-[13px]">
            {lang === "en" ? "Contact Us" : "تواصل معنا"}
          </h3>
          <a
            href="https://wa.me/966506751303"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="text-xs font-medium">
              {lang === "en" ? "Chat on WhatsApp" : "راسلنا على واتساب"}
            </span>
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-blue-200 dark:border-blue-800 mt-2"></div>

      {/* Copyright */}
      <div className="text-center text-[10px] text-blue-600 dark:text-blue-300 py-1">
        {lang === "en"
          ? "© 2025 Saaed Wafi. All rights reserved."
          : "© 2025 سعد وافي. جميع الحقوق محفوظة."}
      </div>
    </footer>
  );
};

export default Footer;
