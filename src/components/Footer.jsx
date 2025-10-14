import { Mail, MessageCircle } from 'lucide-react';
import bg from '../Assets/footer.jpeg';
import logo from '../Assets/logodark.png';

const Footer = ({ lang = 'ar' }) => {
  const whatsappNumber = '966506751303';
  const emails = ['genralpedwi@gmail.com', 'sdwr2000@gmail.com'];
  const taxNumber = '312864606400003';

  const quickLinks = {
    ar: [
      { label: 'الرئيسية', href: 'home' },
      { label: 'من نحن', href: 'about' },
      { label: 'المشاريع', href: 'projects' },
      { label: 'الخدمات', href: 'services' },
      { label: 'تواصل معنا', href: 'contact' },
    ],
    en: [
      { label: 'Home', href: 'home' },
      { label: 'About', href: 'about' },
      { label: 'Projects', href: 'projects' },
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
              alt={lang === 'ar' ? 'لوجو وافي التويجري' : 'Wafi Al-Tuwaijri Logo'}
              className="w-32 h-auto"
            />
            <h3 className="text-3xl text-[#FF7A00] font-bold mt-0 mb-4">
              {lang === 'ar' ? 'وافي التويجري' : 'Wafi Saad'}
            </h3>
            <p className="text-base text-gray-200 leading-relaxed max-w-sm">
              {lang === 'ar'
                ? 'شركة وافي التويجري للمقاولات — جودة في التنفيذ، التزام في المواعيد، وخبرة طويلة في مجال البناء والتشييد.'
                : 'Wafi Saad Contracting — Quality in execution, commitment to deadlines, and long experience in construction.'}
            </p>
          </div>

          {/* Quick Links */}
          <div
            className={`flex ${lang === 'ar' ? 'justify-start' : 'justify-start'} md:justify-center`}
          >
            <div>
              <h4 className="text-2xl font-semibold mb-4">{lang === 'ar' ? 'روابط' : 'Links'}</h4>
              <ul className="space-y-4">
                {quickLinks[lang].map((link) => (
                  <li
                    key={link.label}
                    className="cursor-pointer text-gray-200 hover:text-[#FF7A00] transition-colors text-base"
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

            {/* Emails */}
            {emails.map((email) => (
              <div key={email} className="flex items-center gap-3 text-base mb-3">
                <Mail className="w-6 h-6 text-[#FF7A00]" />
                <a href={`mailto:${email}`} className="hover:text-[#FF7A00] transition-colors">
                  {email}
                </a>
              </div>
            ))}

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
                    <span dir="ltr" className="ms-1">+966 50 675 1303</span>
                  </>
                ) : (
                  "WhatsApp: +966 50 675 1303"
                )}
              </a>
            </div>


            {/* Tax Number */}
            <div className="flex items-center gap-3 text-base mt-2">
              <span className="font-semibold text-[#FF7A00]">
                {lang === 'ar' ? 'رقم التسجيل الضريبي:' : 'Tax Registration No:'}
              </span>
              <span className="text-gray-200">{taxNumber}</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-white/20 pt-6 text-sm text-gray-300 text-center">
          {lang === 'ar'
            ? '© 2025 وافي التويجري للمقاولات. جميع الحقوق محفوظة.'
            : '© 2025 Wafi Saad Contracting. All rights reserved.'}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
