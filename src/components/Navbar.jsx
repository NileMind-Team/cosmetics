import { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import logoLight from '../assets/logo.png';
import logoDark from '../assets/logodark.png';

const Navbar = ({ lang, setLang }) => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false);
        setIsAnimating(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  const toggleLang = () => setLang(lang === 'en' ? 'ar' : 'en');
  const toggleMenu = () => {
    if (menuOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setMenuOpen(false);
        setIsAnimating(false);
      }, 400);
    } else setMenuOpen(true);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 45;
      const elementPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      if (menuOpen) toggleMenu();
    }
  };

  const navLinks = {
    en: [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'projects', label: 'Projects' },
      { id: 'services', label: 'Services' },
      { id: 'contact', label: 'Contact' },
    ],
    ar: [
      { id: 'home', label: 'الرئيسية' },
      { id: 'about', label: 'من نحن' },
      { id: 'projects', label: 'المشاريع' },
      { id: 'services', label: 'الخدمات' },
      { id: 'contact', label: 'تواصل معنا' },
    ],
  };

  return (
    <header className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white fixed w-full top-0 left-0 z-50 shadow-[0_4px_12px_rgba(0,86,179,0.15)] transition-colors duration-300">
      <div className="container mx-auto px-3 py-1 flex items-center justify-between h-14 md:h-16">
        {/* Logo */}
        <div className={`flex items-center ${lang === 'ar' ? 'justify-end' : 'justify-start'}`}>
          <img
            src={darkMode ? logoDark : logoLight}
            alt="Logo"
            className="w-28 object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => handleScroll('home')}
          />
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-8 rtl:space-x-reverse text-base font-medium">
          {navLinks[lang].map((link, index) => (
            <button
              key={index}
              onClick={() => handleScroll(link.id)}
              className="text-[#0056B3] dark:text-white hover:text-[#FF7A00] transition-all duration-300 relative group py-1"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF7A00] transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-200"
          >
            {darkMode ? (
              <Sun size={20} className="text-[#FF7A00]" />
            ) : (
              <Moon size={20} className="text-[#FF7A00]" />
            )}
          </button>

          <button
            onClick={toggleLang}
            className="bg-[#FF7A00] text-white px-4 py-2 rounded-md text-base hover:bg-[#e56a00] transition duration-200 font-medium flex items-center gap-2"
          >
            <Globe size={18} />
            {lang === 'en' ? 'AR' : 'EN'}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800 dark:text-white" onClick={toggleMenu}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {(menuOpen || isAnimating) && (
        <>
          <div
            className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-500 md:hidden ${
              menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            style={{ top: '3.5rem' }}
            onClick={toggleMenu}
          />

          <div
            className={`fixed top-14 bottom-0 bg-white dark:bg-gray-900 z-50 shadow-2xl p-6 flex flex-col transition-all duration-500 transform md:hidden ${
              lang === 'ar'
                ? `right-0 w-[65%] ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`
                : `left-0 w-[65%] ${menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`
            }`}
          >
            <div className="flex flex-col space-y-4 w-full mt-6">
              {navLinks[lang].map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleScroll(link.id)}
                  style={{ transitionDelay: `${index * 80}ms` }}
                  className="text-[#0056B3] dark:text-white hover:text-[#FF7A00] transition-all duration-500 font-medium text-lg py-2 px-3 relative group text-left rtl:text-right"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF7A00] transition-all duration-500 group-hover:w-full rtl:left-auto rtl:right-0"></span>
                </button>
              ))}
            </div>

            <div className="mt-8 w-full flex justify-between items-center gap-4 px-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center justify-center gap-2 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300 flex-1"
              >
                {darkMode ? (
                  <Sun size={20} className="text-[#FF7A00]" />
                ) : (
                  <Moon size={20} className="text-[#FF7A00]" />
                )}
                <span className="text-base font-medium text-gray-700 dark:text-gray-300">
                  {darkMode ? (lang === 'en' ? 'Light' : 'فاتح') : lang === 'en' ? 'Dark' : 'داكن'}
                </span>
              </button>

              <button
                onClick={toggleLang}
                className="flex items-center justify-center gap-2 bg-[#FF7A00] text-white px-4 py-3 rounded-lg hover:bg-[#e56a00] transition duration-300 font-medium text-base flex-1"
              >
                <Globe size={18} />
                {lang === 'en' ? 'AR' : 'EN'}
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
