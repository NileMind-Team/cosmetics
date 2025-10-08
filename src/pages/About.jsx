import React, { useState, useEffect, useRef } from "react";
import { Building, Users, Target, CheckCircle } from "lucide-react";

const About = ({ lang }) => {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const content = {
    en: {
      title: "About Our Company",
      subtitle: "Building Your Vision, Constructing Excellence",
      description:
        "Saaed Wafi Construction delivers high-quality, reliable, and innovative projects across residential, commercial, and industrial sectors.",
      tabs: [
        { title: "Our Mission", icon: <Target className="w-4 h-4" />, content: "Deliver exceptional construction services through quality, innovation, and client satisfaction." },
        { title: "Our Vision", icon: <Building className="w-4 h-4" />, content: "Be a leader in the construction industry with sustainable and modern infrastructure." },
        { title: "Our Values", icon: <Users className="w-4 h-4" />, content: "Integrity, safety, teamwork, and excellence form our foundation." },
      ],
      why: ["High-Quality Execution", "On-Time Delivery", "Competitive Pricing", "Tailored Solutions"],
    },
    ar: {
      title: "من نحن",
      subtitle: "نبني رؤيتك ونسعى نحو التميز",
      description:
        "تنفذ شركة سعد وافي مشاريع سكنية وتجارية وصناعية بأعلى معايير الجودة والالتزام.",
      tabs: [
        { title: "رسالتنا", icon: <Target className="w-4 h-4" />, content: "تقديم خدمات مقاولات متميزة مع الالتزام برضا العملاء." },
        { title: "رؤيتنا", icon: <Building className="w-4 h-4" />, content: "أن نكون رواد مجال المقاولات بمشاريع مستدامة وحديثة." },
        { title: "قيمنا", icon: <Users className="w-4 h-4" />, content: "النزاهة، السلامة، التعاون، والتميز أساس مشاريعنا." },
      ],
      why: ["جودة التنفيذ العالية", "تسليم في المواعيد", "أسعار تنافسية", "حلول مخصصة للمشاريع"],
    },
  };

  const current = content[lang] || content.en;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={`py-16 bg-gray-50 dark:bg-gray-900 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0056B3] dark:text-blue-400 mb-2">
          {current.title}
        </h2>
        <p className="text-lg text-[#FF7A00] font-semibold mb-4">{current.subtitle}</p>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-8">
          {current.description}
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {current.tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full border text-sm transition ${
                activeTab === i
                  ? "bg-[#FF7A00] text-white border-[#FF7A00]"
                  : "bg-transparent text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-[#FF7A00] dark:hover:border-[#FF7A00]"
              }`}
            >
              {tab.icon}
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm mb-8 border-l-4 border-[#FF7A00]">
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            {current.tabs[activeTab].content}
          </p>
        </div>

        {/* Why choose us */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-[#0056B3] dark:text-blue-400 mb-4">
            {lang === "ar" ? "لماذا تختارنا؟" : "Why Choose Us?"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {current.why.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-sm"
              >
                <div className="bg-[#FF7A00] w-6 h-6 flex items-center justify-center rounded-full">
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