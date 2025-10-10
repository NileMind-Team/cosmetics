import React, { useState, useEffect, useRef } from 'react';
import { Building2, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = ({ lang }) => {
  const [visible, setVisible] = useState(false);
  const [imagesVisible, setImagesVisible] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.1,
    });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setImagesVisible(Array(imagesRef.current.length).fill(false));
    const observers = imagesRef.current.map((img, i) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setImagesVisible((prev) => {
              const updated = [...prev];
              updated[i] = true;
              return updated;
            });
            obs.unobserve(entry.target);
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
      );
      if (img) obs.observe(img);
      return obs;
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = showAll || selectedImage ? 'hidden' : 'auto';
  }, [showAll, selectedImage]);

  const content = {
    en: {
      title: 'Our Projects',
      subtitle: 'Showcasing Excellence in Construction',
      description: 'A glimpse into some of our recent and outstanding projects.',
      showMore: 'View More Projects',
    },
    ar: {
      title: 'مشاريعنا',
      subtitle: 'نماذج من مشاريعنا المتميزة',
      description: 'لمحة عن بعض المشاريع التي نفذناها بأعلى معايير الجودة.',
      showMore: 'عرض المزيد من المشاريع',
    },
  };

  const current = content[lang] || content.en;

  const projectImages = [
    require('../assets/project1.jpg'),
    require('../assets/project2.jpg'),
    require('../assets/project3.jpg'),
    require('../assets/project4.jpg'),
    require('../assets/project5.jpg'),
    require('../assets/project6.jpg'),
    require('../assets/project7.jpg'),
    require('../assets/project8.jpg'),
    require('../assets/project9.jpg'),
    require('../assets/project10.jpg'),
    require('../assets/project11.jpg'),
    require('../assets/project12.jpg'),
    require('../assets/project13.jpg'),
    require('../assets/project14.jpg'),
    require('../assets/project15.jpg'),
  ];

  const visibleImages = projectImages.slice(0, 6);

  const openImage = (index) => {
    setSelectedImage(projectImages[index]);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % projectImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(projectImages[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + projectImages.length) % projectImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(projectImages[prevIndex]);
  };

  return (
    <>
      <section
        ref={sectionRef}
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
        className={`py-16 bg-gray-50 dark:bg-gray-900 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="container mx-auto px-6 text-center max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0056B3] dark:text-blue-400 mb-2">
            {current.title}
            <span className="block mx-auto mt-2 w-16 h-1 bg-[#FF7A00] rounded-full"></span>
          </h2>
          <p className="text-lg text-[#FF7A00] font-semibold mb-4">{current.subtitle}</p>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-12">
            {current.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleImages.map((img, index) => (
              <div
                key={index}
                ref={(el) => (imagesRef.current[index] = el)}
                className={`relative overflow-hidden rounded-xl shadow-md transition-all duration-700 transform cursor-pointer ${
                  imagesVisible[index]
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => openImage(index)}
              >
                <img
                  src={img}
                  alt={`Project ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <p className="text-white text-sm font-medium flex items-center gap-1">
                    <Building2 className="w-4 h-4 text-[#FF7A00]" />
                    {lang === 'ar' ? 'مشروع مميز' : 'Featured Project'}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setShowAll(true)}
            className="mt-10 px-8 py-3 bg-[#0056B3] text-white rounded-full shadow-md hover:bg-[#FF7A00] transition-all duration-300"
          >
            {current.showMore}
          </button>
        </div>
      </section>

      {showAll && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={() => setShowAll(false)}
        >
          <div
            className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-[90%] md:w-[80%] lg:w-[70%] max-h-[85vh] overflow-y-auto transition-all duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 p-6 border-b border-gray-200 dark:border-gray-700 flex justify-center items-center">
              <button
                onClick={() => setShowAll(false)}
                className="absolute top-4 right-4 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 rounded-full p-2 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <h2 className="text-2xl md:text-3xl font-bold text-[#0056B3] dark:text-blue-400 text-center">
                {lang === 'ar' ? 'كل المشاريع' : 'All Projects'}
              </h2>
            </div>

            <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectImages.map((img, index) => (
                <div
                  key={index}
                  onClick={() => openImage(index)}
                  className="relative overflow-hidden rounded-xl shadow-md transition-transform duration-500 hover:scale-105 cursor-pointer"
                >
                  <img
                    src={img}
                    alt={`Project ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <p className="text-white text-sm font-medium flex items-center gap-1">
                      <Building2 className="w-4 h-4 text-[#FF7A00]" />
                      {lang === 'ar' ? 'مشروع مميز' : 'Featured Project'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-gray-700 hover:bg-gray-600 text-white rounded-full p-2 transition-all z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-4 bg-gray-700 hover:bg-gray-600 text-white rounded-full p-3 transition-all z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={selectedImage}
              alt="Expanded Project"
              className="max-h-[80vh] w-auto rounded-2xl shadow-2xl object-contain transition-all duration-500 scale-100"
            />

            <button
              onClick={handleNext}
              className="absolute right-4 bg-gray-700 hover:bg-gray-600 text-white rounded-full p-3 transition-all z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
