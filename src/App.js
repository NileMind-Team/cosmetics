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
      document.title = 'بيوتي براند - جمالك يبدأ من هنا';
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute(
          'content',
          'اكتشفي أفضل مستحضرات التجميل والعناية بالبشرة والشعر. منتجات أصلية بجودة عالية تمنحك الجمال والثقة كل يوم.'
        );
    } else {
      document.title = 'Beauty Brand - Beauty Starts Here';
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute(
          'content',
          'Discover the best cosmetics, skincare, and hair care products. High-quality beauty products to enhance your natural beauty every day.'
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
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#D62E7C] border-solid"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <Navbar lang={lang} setLang={setLang} darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}

export default App;
