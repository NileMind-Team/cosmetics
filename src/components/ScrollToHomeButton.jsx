import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const ScrollToHomeButton = ({ lang }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        const homeBottom = homeSection.getBoundingClientRect().bottom;
        setVisible(homeBottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHome = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToHome}
      className={`
        fixed bottom-6 z-50 
        ${lang === 'ar' ? 'left-6' : 'right-6'}
        bg-[#FF7A00] hover:bg-[#e56a00] text-white 
        shadow-xl rounded-full p-3 transition-all duration-300
        flex items-center justify-center
      `}
      title={lang === 'ar' ? 'الرجوع للرئيسية' : 'Back to Home'}
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default ScrollToHomeButton;
