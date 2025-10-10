import React from "react";
import { Mail, MessageCircle } from "lucide-react";
import bg from "../assets/footer.jpeg";

const Footer = ({ lang = "ar" }) => {
  const whatsappNumber = "966506751303";
  const emails = ["genralpedwi@gmail.com", "sdwr2000@gmail.com"];

  const quickLinks = {
    ar: [
      { label: "الرئيسية", href: "home" },
      { label: "من نحن", href: "about" },
      { label: "المشاريع", href: "projects" },
      { label: "الخدمات", href: "services" },
      { label: "تواصل معنا", href: "contact" },
    ],
    en: [
      { label: "Home", href: "home" },
      { label: "About", href: "about" },
      { label: "Projects", href: "projects" },
      { label: "Services", href: "services" },
      { label: "Contact", href: "contact" },
    ],
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight + 20 : 40;
      const elementPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer
      className={`relative text-white ${lang === "ar" ? "text-right" : "text-left"}`}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url(${bg})`,
          filter: "brightness(0.8) contrast(0.9)",
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">
              {lang === "ar" ? "سعد وافي" : "Saad Wafi"}
            </h3>
            <p className="text-sm text-gray-200 max-w-sm leading-relaxed">
              {lang === "ar"
                ? "شركة سعد وافي للمقاولات — جودة في التنفيذ، التزام في المواعيد، وخبرة طويلة في مجال البناء والتشييد."
                : "Saad Wafi Contracting — Quality in execution, commitment to deadlines, and long experience in construction."}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">
              {lang === "ar" ? "روابط سريعة" : "Quick Links"}
            </h4>
            <ul className="space-y-2">
              {quickLinks[lang].map((link) => (
                <li
                  key={link.label}
                  className="cursor-pointer text-gray-200 hover:text-[#FF7A00] transition-colors text-sm"
                  onClick={() => handleScroll(link.href)}
                >
                  • {link.label}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">
              {lang === "ar" ? "تواصل معنا" : "Contact Us"}
            </h4>

            <div className="flex items-start gap-2 mb-3">
              <Mail className="w-5 h-5 mt-1" />
              <div className="flex flex-col text-sm">
                {emails.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="hover:text-[#FF7A00] transition-colors"
                  >
                    {email}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-[#FF7A00] transition-colors"
              >
                {lang === "ar"
                  ? "واتساب: +966 50 675 1303"
                  : "WhatsApp: +966 50 675 1303"}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-4 text-xs text-gray-300 text-center">
          {lang === "ar"
            ? "© 2025 سعد وافي للمقاولات. جميع الحقوق محفوظة."
            : "© 2025 Saad Wafi Contracting. All rights reserved."}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
