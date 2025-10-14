import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en');
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    if (lang === 'ar') {
      document.title = 'وافي التويجري للمقاولات - حلول عقارية مبتكرة';
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute(
          'content',
          'وافي سعد للمقاولات - بيع، شراء وتأجير العقارات في السعودية مع حلول مبتكرة وموثوقة تناسب احتياجاتك العقارية.'
        );
    } else {
      document.title = 'Wafi Al-Tuwaijri Contracting - Innovative Real Estate Solutions';
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute(
          'content',
          'Wafi Saad Contracting - Buy, sell, and rent properties in Saudi Arabia with innovative and trusted real estate solutions tailored to your needs.'
        );
    }
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('lang', lang);

    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [lang]);

  if (loading) {
    return (
      <div
        className={`fixed inset-0 flex items-center justify-center z-50 ${
          darkMode ? 'bg-gray-900' : 'bg-white'
        }`}
      >
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500 border-solid"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <Navbar lang={lang} setLang={setLang} darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}

export default App;
