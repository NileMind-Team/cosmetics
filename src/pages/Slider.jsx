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
        title: 'Unveil Your Natural Beauty',
        subtitle:
          'Discover our premium collection of cosmetics designed to enhance your unique glow and radiance.',
        image: slide1,
        buttonText: 'Explore',
        targetId: 'about',
      },
      {
        id: 2,
        title: 'Where Art Meets Beauty',
        subtitle:
          'From everyday elegance to glamorous transformations, find the perfect look for every moment.',
        image: slide2,
        buttonText: 'View Collection',
        targetId: 'projects',
      },
      {
        id: 3,
        title: 'Skincare That Nourishes',
        subtitle:
          'Advanced formulas with natural ingredients to keep your skin healthy, hydrated, and radiant.',
        image: slide3,
        buttonText: 'Our Services',
        targetId: 'services',
      },
      {
        id: 4,
        title: 'Your Beauty Journey Starts Here',
        subtitle:
          'Join thousands of happy customers who trust us for their daily beauty and skincare needs.',
        image: slide4,
        buttonText: 'Contact Us',
        targetId: 'contact',
      },
    ],

    ar: [
      {
        id: 1,
        title: 'أطلقي جمالك الطبيعي',
        subtitle:
          'اكتشفي مجموعتنا الفاخرة من مستحضرات التجميل المصممة لإبراز إشراقتك الطبيعية وتألقك الفريد.',
        image: slide1,
        buttonText: 'اكتشفي',
        targetId: 'about',
      },
      {
        id: 2,
        title: 'حيث يلتقي الفن بالجمال',
        subtitle:
          'من الإطلالات اليومية الأنيقة إلى التحولات الساحرة، ابحثي عن الإطلالة المثالية لكل مناسبة.',
        image: slide2,
        buttonText: 'تصفحي المجموعة',
        targetId: 'projects',
      },
      {
        id: 3,
        title: 'عناية تغذي بشرتك',
        subtitle:
          'تركيبات متطورة بمكونات طبيعية للحفاظ على بشرة صحية ونضرة ومشرقة طوال الوقت.',
        image: slide3,
        buttonText: 'خدماتنا',
        targetId: 'services',
      },
      {
        id: 4,
        title: 'رحلتك مع الجمال تبدأ هنا',
        subtitle:
          'انضمي إلى آلاف العملاء السعداء الذين يثقون بنا في روتين جمالهم اليومي والعناية ببشرتهم.',
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-pink-900/40 flex flex-col items-center justify-center text-center px-6">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-[22px] drop-shadow-lg">
              {slide.title}
            </h2>
            <p className="text-lg md:text-2xl text-pink-300 font-semibold drop-shadow mb-6">
              {slide.subtitle}
            </p>
            <button
              onClick={() => handleScroll(slide.targetId)}
              className="bg-[#D62E7C] border-2 border-[#D62E7C] text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-[0_0_10px_5px_rgba(214,46,124,0.5)] hover:shadow-[0_0_15px_8px_rgba(214,46,124,0.7)] hover:scale-105"
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
              current === i ? 'bg-[#D62E7C] w-6' : 'bg-white hover:bg-[#D62E7C]/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;