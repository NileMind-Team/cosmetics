import { useState, useEffect, useRef } from 'react';
import { Sparkles, Heart, CheckCircle, Feather } from 'lucide-react';

const About = ({ lang }) => {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [visible, setVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState([]);
  const observersRef = useRef([]);

  const content = {
    en: {
      title: 'About Our Brand',
      subtitle: 'Enhancing Beauty, Celebrating Individuality',
      description:
        'We are a premium cosmetics brand dedicated to bringing out your natural glow. Our products are crafted with care, combining innovation with the finest ingredients to create makeup and skincare that you can trust. Our range includes:',
      services: [
        'Luxurious foundations and concealers for flawless coverage.',
        'Vibrant lipsticks, eyeshadows, and blushes for every mood.',
        'Nourishing skincare serums, moisturizers, and cleansers.',
        'High-quality brushes and tools for a professional finish.',
      ],
      tabs: [
        {
          title: 'Our Mission',
          icon: <Sparkles className="w-4 h-4" />,
          content: 'To empower everyone to express their unique beauty with high-quality, inclusive, and innovative cosmetics.',
        },
        {
          title: 'Our Vision',
          icon: <Feather className="w-4 h-4" />,
          content: 'To become a globally loved brand that sets new standards in beauty through creativity and sustainability.',
        },
        {
          title: 'Our Values',
          icon: <Heart className="w-4 h-4" />,
          content: 'Inclusivity, quality, cruelty-free practices, and customer love are at the heart of everything we do.',
        },
      ],
      why: [
        '100% Cruelty-Free',
        'High-Quality Ingredients',
        'Inclusive Shades for All',
        'Innovative Formulas',
      ],
    },
    ar: {
      title: 'عن علامتنا التجارية',
      subtitle: 'نعزز الجمال، نحتفل بالتميز',
      description:
        'نحن علامة تجارية راقية في مجال مستحضرات التجميل، ملتزمون بإبراز إشراقتك الطبيعية. تُصنع منتجاتنا بعناية، لتمزج بين الابتكار وأرقى المكونات لصنع مكياج ومنتجات عناية بالبشرة يمكنك الوثوق بها. تشمل مجموعتنا:',
      services: [
        'كريمات أساس وأقلام تصحيح فاخرة لتغطية خالية من العيوب.',
        'أحمر شفاه، وظلال عيون، وبلاشر بألوان زاهية تناسب كل الأوقات.',
        'أمصال وكريمات مرطبة ومنظفات مغذية للبشرة.',
        'فرش وأدوات عالية الجودة للحصول على إطلالة احترافية.',
      ],
      tabs: [
        {
          title: 'رسالتنا',
          icon: <Sparkles className="w-4 h-4" />,
          content: 'تمكين الجميع من التعبير عن جمالهم الفريد من خلال مستحضرات تجميل عالية الجودة وشاملة ومبتكرة.',
        },
        {
          title: 'رؤيتنا',
          icon: <Feather className="w-4 h-4" />,
          content: 'أن نصبح علامة تجارية محبوبة عالمياً تضع معايير جديدة في عالم الجمال من خلال الإبداع والاستدامة.',
        },
        {
          title: 'قيمنا',
          icon: <Heart className="w-4 h-4" />,
          content: 'الشمولية، الجودة، الممارسات الخالية من القسوة على الحيوانات، وحب العملاء هي أساس كل ما نقوم به.',
        },
      ],
      why: ['خالٍ من القسوة ١٠٠٪', 'مكونات عالية الجودة', 'درجات ألوان تناسب الجميع', 'تركيبات مبتكرة'],
    },
  };

  const current = content[lang] || content.en;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.1,
    });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setCardsVisible(Array(current.why.length).fill(false));

    observersRef.current.forEach((obs) => obs.disconnect());
    observersRef.current = [];

    const newObservers = current.why.map((_, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCardsVisible((prev) => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
      );

      if (cardsRef.current[index]) {
        observer.observe(cardsRef.current[index]);
      }

      return observer;
    });

    observersRef.current = newObservers;

    return () => {
      newObservers.forEach((obs) => obs.disconnect());
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current.why.length]);

  return (
    <section
      ref={sectionRef}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className={`py-16 bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-800 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="container mx-auto px-6 text-center max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#D62E7C] dark:text-pink-400 mb-6">
          {current.title}
          <span className="block mx-auto mt-2 w-16 h-1 bg-[#D62E7C] rounded-full"></span>
        </h2>
        <p className="text-lg text-[#D62E7C] font-semibold mb-4">{current.subtitle}</p>

        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
          {current.description}
        </p>

        <div className="flex flex-col items-start md:items-center gap-2 text-gray-700 dark:text-gray-300 text-sm mb-10">
          {current.services.map((service, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#D62E7C] mt-0.5 flex-shrink-0" />
              <span>{service}</span>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-5 mb-6">
          {current.tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full border text-sm transition-all duration-300 ${
                activeTab === i
                  ? 'bg-[#D62E7C] text-white border-[#D62E7C] scale-105'
                  : 'bg-transparent text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-[#D62E7C] dark:hover:border-[#D62E7C] hover:scale-105'
              }`}
            >
              {tab.icon}
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm mb-8 border-l-4 border-[#D62E7C] transition-all duration-500 hover:shadow-md">
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            {current.tabs[activeTab].content}
          </p>
        </div>

        {/* Why choose us */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-[#D62E7C] dark:text-pink-400 mb-4">
            {lang === 'ar' ? 'لماذا تختار منتجاتنا؟' : 'Why Choose Us?'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {current.why.map((item, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className={`flex items-center gap-2 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-sm transition-all duration-500 transform ${
                  cardsVisible[i]
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-4 scale-95'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="bg-[#D62E7C] w-6 h-6 flex items-center justify-center rounded-full">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;