import { useState, useEffect, useRef } from 'react';
import { Sparkles, Droplet, Heart } from 'lucide-react';

const Services = ({ lang }) => {
  const [visible, setVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState([]);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    console.log('🔄 Services language updated:', lang);
  }, [lang]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cardObservers = cardsRef.current.map((_, index) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCardsVisible((prev) => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -30px 0px',
        }
      );
    });

    cardsRef.current.forEach((card, index) => {
      if (card) cardObservers[index].observe(card);
    });

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      cardsRef.current.forEach((card, index) => {
        if (card) cardObservers[index].unobserve(card);
      });
    };
  }, []);

  // Initialize cards visibility array
  useEffect(() => {
    setCardsVisible(Array(3).fill(false));
  }, []);

  const content = {
    en: {
      title: 'Our Services',
      subtitle: 'Premium Beauty & Skincare',
      description:
        'Discover our range of professional beauty services designed to enhance your natural glow.',
      items: [
        {
          icon: <Sparkles className="w-12 h-12 text-[#D62E7C] mx-auto mb-4" />,
          title: 'Makeup Artistry',
          desc: 'Professional makeup services for all occasions, from natural looks to glamorous transformations.',
        },
        {
          icon: <Droplet className="w-12 h-12 text-[#D62E7C] mx-auto mb-4" />,
          title: 'Skincare Treatments',
          desc: 'Advanced facial treatments and skincare routines tailored to your skin type.',
        },
        {
          icon: <Heart className="w-12 h-12 text-[#D62E7C] mx-auto mb-4" />,
          title: 'Beauty Consultations',
          desc: 'Personalized beauty consultations to help you choose the perfect products for your needs.',
        },
      ],
    },
    ar: {
      title: 'خدماتنا',
      subtitle: 'خدمات تجميل وعناية بالبشرة فاخرة',
      description: 'اكتشفي مجموعتنا من خدمات التجميل الاحترافية المصممة لإبراز إشراقتك الطبيعية.',
      items: [
        {
          icon: <Sparkles className="w-12 h-12 text-[#762B8B] mx-auto mb-4" />,
          title: 'فن المكياج',
          desc: 'خدمات مكياج احترافية لجميع المناسبات، من الإطلالات الطبيعية إلى التحولات الساحرة.',
        },
        {
          icon: <Droplet className="w-12 h-12 text-[#762B8B] mx-auto mb-4" />,
          title: 'علاجات البشرة',
          desc: 'علاجات وجه متقدمة وروتين عناية بالبشرة مصمم خصيصاً لنوع بشرتك.',
        },
        {
          icon: <Heart className="w-12 h-12 text-[#762B8B] mx-auto mb-4" />,
          title: 'استشارات تجميل',
          desc: 'استشارات تجميل شخصية لمساعدتك في اختيار المنتجات المثالية لاحتياجاتك.',
        },
      ],
    },
  };

  const current = content[lang] || content.en;

  return (
    <section
      ref={sectionRef}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className={`py-16 bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-800 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="container mx-auto px-6 text-center max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#762B8B] dark:text-pink-400 mb-6">
          {current.title}
          <span className="block mx-auto mt-2 w-16 h-1 bg-[#D62E7C] rounded-full"></span>
        </h2>
        <p className="text-lg text-[#D62E7C] font-semibold mb-4">{current.subtitle}</p>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-12">
          {current.description}
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {current.items.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-700 transform border border-pink-100 dark:border-gray-700 ${
                cardsVisible[index]
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
                willChange: 'transform, opacity',
              }}
            >
              <div className="transform transition-transform duration-500 hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
