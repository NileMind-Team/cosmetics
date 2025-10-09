import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en');

  // حفظ اللغة في localStorage عند التغيير
  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <Navbar lang={lang} setLang={setLang} />
      <Home lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}

export default App;
