import { Mail, MessageCircle, Instagram, Phone } from 'lucide-react';
import bg from '../Assets/footer.jpg';
import logo from '../Assets/logodark.png';

const Footer = ({ lang = 'ar' }) => {
  const whatsappNumber = '201062485133';
  const phoneNumber = '+20 106 248 5133';
  const emails = ['support@beautybrand.com'];
  const instagramHandle = '@beautybrand_official';

  const quickLinks = {
    ar: [
      { label: 'الرئيسية', href: 'home' },
      { label: 'عن العلامة', href: 'about' },
      { label: 'المجموعات', href: 'projects' },
      { label: 'الخدمات', href: 'services' },
      { label: 'تواصل معنا', href: 'contact' },
    ],
    en: [
      { label: 'Home', href: 'home' },
      { label: 'About', href: 'about' },
      { label: 'Collections', href: 'projects' },
      { label: 'Services', href: 'services' },
      { label: 'Contact', href: 'contact' },
    ],
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 45;
      const elementPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer
      className={`relative text-white ${lang === 'ar' ? 'text-right' : 'text-left'}`}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url(${bg})`,
          filter: 'brightness(0.75) contrast(0.9)',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 md:pt-20 md:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About with Logo */}
          <div className="flex flex-col items-start">
            <img
              src={logo}
              alt={lang === 'ar' ? 'لوجو العلامة التجارية' : 'Beauty Brand Logo'}
              className="w-16 h-auto mb-2"
            />
            <h3 className="text-3xl text-[#D62E7C] font-bold mt-0 mb-4">
              {lang === 'ar' ? 'بيوتي براند' : 'Beauty Brand'}
            </h3>
            <p className="text-base text-gray-200 leading-relaxed max-w-sm">
              {lang === 'ar'
                ? 'علامتنا التجارية المتخصصة في مستحضرات التجميل والعناية بالبشرة — نقدم منتجات عالية الجودة تجمع بين الابتكار والمكونات الطبيعية لإبراز جمالك الطبيعي.'
                : 'Our premium cosmetics and skincare brand — delivering high-quality products that combine innovation with natural ingredients to enhance your natural beauty.'}
            </p>
          </div>

          {/* Quick Links */}
          <div
            className={`flex ${lang === 'ar' ? 'justify-start' : 'justify-start'} md:justify-center`}
          >
            <div>
              <h4 className="text-2xl font-semibold mb-4">{lang === 'ar' ? 'روابط سريعة' : 'Quick Links'}</h4>
              <ul className="space-y-4">
                {quickLinks[lang].map((link) => (
                  <li
                    key={link.label}
                    className="cursor-pointer text-gray-200 hover:text-[#D62E7C] transition-colors text-base"
                    onClick={() => handleScroll(link.href)}
                  >
                    • {link.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-2xl font-semibold mb-4">
              {lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </h4>

            {/* Phone */}
            <div className="flex items-center gap-3 text-base mb-3">
              <Phone className="w-6 h-6 text-[#D62E7C]" />
              <a href={`tel:${phoneNumber}`} className="hover:text-[#D62E7C] transition-colors" dir="ltr">
                {phoneNumber}
              </a>
            </div>

            {/* Emails */}
            {emails.map((email) => (
              <div key={email} className="flex items-center gap-3 text-base mb-3">
                <Mail className="w-6 h-6 text-[#D62E7C]" />
                <a href={`mailto:${email}`} className="hover:text-[#D62E7C] transition-colors">
                  {email}
                </a>
              </div>
            ))}

            {/* Instagram */}
            <div className="flex items-center gap-3 text-base mb-3">
              <Instagram className="w-6 h-6 text-[#D62E7C]" />
              <a
                href="https://instagram.com/beautybrand"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D62E7C] transition-colors"
              >
                {instagramHandle}
              </a>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-3 text-base mb-3">
              <MessageCircle className="w-6 h-6 text-[#25D366]" />
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#25D366] transition-colors"
              >
                {lang === "ar" ? (
                  <>
                     واتساب :
                    <span dir="ltr" className="ms-1">{phoneNumber}</span>
                  </>
                ) : (
                  `WhatsApp: ${phoneNumber}`
                )}
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-white/20 pt-6 text-sm text-gray-300 text-center">
          {lang === 'ar'
            ? '© 2026 بيوتي براند. جميع الحقوق محفوظة.'
            : '© 2026 Beauty Brand. All rights reserved.'}
        </div>
      </div>
    </footer>
  );
};

export default Footer;