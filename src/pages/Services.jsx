import React, { useEffect } from "react";
import { HardHat, Hammer, Home } from "lucide-react";

const Services = ({ lang }) => {
  
  useEffect(() => {
    console.log("🔄 Services language updated:", lang);
  }, [lang]);

  const content = {
    en: {
      title: "Our Services",
      subtitle: "High-quality Construction & Engineering",
      description: "We offer a full range of construction and engineering services with top quality.",
      items: [
        {
          icon: <HardHat className="w-12 h-12 text-[#FF7A00] mx-auto mb-4" />,
          title: "Building Foundations",
          desc: "High-quality foundation works for residential and commercial buildings.",
        },
        {
          icon: <Hammer className="w-12 h-12 text-[#FF7A00] mx-auto mb-4" />,
          title: "Finishing &Decoration",
          desc: "Interior and exterior finishing with modern design and quality.",
        },
        {
          icon: <Home className="w-12 h-12 text-[#FF7A00] mx-auto mb-4" />,
          title: "Engineering Design",
          desc: "Professional design services using the latest tools and standards.",
        },
      ],
    },
    ar: {
      title: "خدماتنا",
      subtitle: "خدمات مقاولات وتصميم هندسي عالية الجودة",
      description: "نقدم مجموعة متكاملة من الخدمات الهندسية والمقاولات بأعلى جودة.",
      items: [
        {
          icon: <HardHat className="w-12 h-12 text-[#FF7A00] mx-auto mb-4" />,
          title: "تأسيس المباني",
          desc: "أعمال تأسيس عالية الجودة للمباني السكنية والتجارية.",
        },
        {
          icon: <Hammer className="w-12 h-12 text-[#FF7A00] mx-auto mb-4" />,
          title: "تشطيب وديكور",
          desc: "تشطيبات داخلية وخارجية بتصميم حديث وبجودة عالية.",
        },
        {
          icon: <Home className="w-12 h-12 text-[#FF7A00] mx-auto mb-4" />,
          title: "تصميم هندسي",
          desc: "خدمات التصميم الهندسي المحترف باستخدام أحدث الأدوات والمعايير.",
        },
      ],
    },
  };

  const current = content[lang] || content.en;

  return (
    <section
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="py-16 bg-gray-50 dark:bg-gray-900 transition-all duration-700"
    >
      <div className="container mx-auto px-6 text-center max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0056B3] dark:text-blue-400 mb-2">
          {current.title}
        </h2>
        <p className="text-lg text-[#FF7A00] font-semibold mb-4">
          {current.subtitle}
        </p>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-12">
          {current.description}
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {current.items.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;