import { useState, useEffect } from 'react';

import slide1 from '../Assets/1.jpg';
import slide2 from '../Assets/2.jpg';
import slide3 from '../Assets/3.jpg';
import slide4 from '../Assets/4.jpg';

const Slider = ({ lang }) => {
  const slides = {
    en: [
      {
        id: 1,
        title: 'Turning Dreams Into Reality',
        subtitle:
          'Discover elegant residential and commercial spaces designed with precision, comfort, and lasting value.',
        image: slide1,
        buttonText: 'Learn More',
        targetId: 'about',
      },
      {
        id: 2,
        title: 'Our Projects Reflect Excellence',
        subtitle:
          'From concept to completion, Wafi Al-Tuwaijri Real Estate delivers projects that combine innovation and trust.',
        image: slide2,
        buttonText: 'Learn More',
        targetId: 'projects',
      },
      {
        id: 3,
        title: 'Services Beyond Expectations',
        subtitle:
          'From design to delivery — we offer integrated real estate solutions built around your success.',
        image: slide3,
        buttonText: 'Learn More',
        targetId: 'services',
      },
      {
        id: 4,
        title: 'Your Trusted Real Estate Partner',
        subtitle:
          'Ready to assist you in finding your dream property or next big investment opportunity.',
        image: slide4,
        buttonText: 'Contact Us',
        targetId: 'contact',
      },
    ],

    ar: [
      {
        id: 1,
        title: 'نحو واقع يحقق أحلامك',
        subtitle:
          'اكتشف المساحات السكنية والتجارية الراقية المصممة بدقة وراحة وقيمة تدوم عبر الزمن.',
        image: slide1,
        buttonText: 'اعرف أكثر',
        targetId: 'about',
      },
      {
        id: 2,
        title: 'مشاريعنا تعكس التميز والإبداع',
        subtitle:
          'من الفكرة إلى التنفيذ، تقدم شركة وافي التويجري العقارية مشاريع تجمع بين الجودة والابتكار والثقة.',
        image: slide2,
        buttonText: 'اعرف أكثر',
        targetId: 'projects',
      },
      {
        id: 3,
        title: 'خدماتنا تلبي كل تطلعاتك',
        subtitle: 'من التصميم إلى التسليم — نقدم حلولًا عقارية متكاملة تبني الثقة وتحقق النجاح.',
        image: slide3,
        buttonText: 'اعرف أكثر',
        targetId: 'services',
      },
      {
        id: 4,
        title: 'شركاؤك في الاستثمار العقاري الناجح',
        subtitle: 'فريقنا جاهز لمساعدتك في اختيار العقار المثالي وتحقيق أهدافك بثقة واستقرار.',
        image: slide4,
        buttonText: 'تواصل معنا',
        targetId: 'contact',
      },
    ],
  };

  const [current, setCurrent] = useState(0);
  const currentSlides = slides[lang] || slides.en;

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % currentSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlides.length]);

  // Scroll handler
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
    }
  };

  return (
    <section
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Slides */}
      {currentSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100 z-20' : 'opacity-0 z-10'
          }`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-[22px] drop-shadow-lg">
              {slide.title}
            </h2>
            <p className="text-lg md:text-2xl text-[#FF7A00] font-semibold drop-shadow mb-6">
              {slide.subtitle}
            </p>
            <button
              onClick={() => handleScroll(slide.targetId)}
              className="bg-[#FF7A00] border-2 border-[#FF7A00] text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-[0_0_10px_5px_rgba(255,122,0,0.5)] hover:shadow-[0_0_15px_8px_rgba(255,122,0,0.7)]"
            >
              {slide.buttonText}
            </button>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
        {currentSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === i ? 'bg-[#FF7A00] w-6' : 'bg-white hover:bg-[#FF7A00]/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;
