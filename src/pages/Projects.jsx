import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Hammer, Layers, Brush } from 'lucide-react';

const Projects = ({ lang }) => {
  const [visible, setVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [zoomedImageIndex, setZoomedImageIndex] = useState(null);

  const content = {
    en: {
      title: 'Our Projects',
      subtitle: 'Showcasing Excellence in Construction',
      description: 'Explore our diverse range of construction and finishing projects.',
      viewText: 'View Projects',
      featured: 'Featured Project',
      close: 'Close',
      headline: 'Major Projects',
    },
    ar: {
      title: 'مشاريعنا',
      subtitle: 'عرض لأبرز مشاريعنا في البناء والتشطيب',
      description: 'اكتشف تنوع مشاريعنا في مجالات التشطيب، الجبس بورد، الدهانات، والأرضيات.',
      viewText: 'عرض المشاريع',
      featured: 'مشروع مميز',
      close: 'إغلاق',
      headline: 'أعمال مشاريع كبيرة',
    },
  };

  const current = content[lang] || content.en;

  const categories = [
    {
      id: 'finishing',
      titleAr: 'أعمال التشطيب',
      titleEn: 'Finishing Works',
      icon: <Hammer className="w-10 h-10 text-[#FF7A00] mb-2" />,
      cover: require('../Assets/project11.jpg'),
      images: [
        require('../Assets/project1.jpg'),
        require('../Assets/project2.jpg'),
        require('../Assets/project3.jpg'),
        require('../Assets/project10.jpg'),
        require('../Assets/project11.jpg'),
        require('../Assets/project12.jpg'),
        require('../Assets/project27.jpg'),
        require('../Assets/project28.jpg'),
        require('../Assets/project29.jpg'),
        require('../Assets/project30.jpg'),
        require('../Assets/project31.jpg'),
      ],
    },
    {
      id: 'gypsum',
      titleAr: 'الجبس بورد',
      titleEn: 'Gypsum Board',
      icon: <Layers className="w-10 h-10 text-[#FF7A00] mb-2" />,
      cover: require('../Assets/project19.jpg'),
      images: [
        require('../Assets/project19.jpg'),
        require('../Assets/project16.jpg'),
        require('../Assets/project17.jpg'),
        require('../Assets/project18.jpg'),
        require('../Assets/project20.jpg'),
        require('../Assets/project21.jpg'),
      ],
    },
    {
      id: 'painting',
      titleAr: 'الدهانات',
      titleEn: 'Painting Works',
      icon: <Brush className="w-10 h-10 text-[#FF7A00] mb-2" />,
      cover: require('../Assets/project8.jpg'),
      images: [
        require('../Assets/project7.jpg'),
        require('../Assets/project8.jpg'),
        require('../Assets/project9.jpg'),
        require('../Assets/project13.jpg'),
        require('../Assets/project14.jpg'),
        require('../Assets/project15.jpg'),
        require('../Assets/project22.jpg'),
        require('../Assets/project23.jpg'),
        require('../Assets/project24.jpg'),
        require('../Assets/project25.jpg'),
        require('../Assets/project26.jpg'),
      ],
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const openCategory = (category) => {
    setSelectedCategory(category);
    document.body.style.overflow = 'hidden';
  };

  const closeCategoryModal = () => {
    setSelectedCategory(null);
    setZoomedImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  const openZoom = (index) => setZoomedImageIndex(index);
  const closeZoom = () => setZoomedImageIndex(null);

  const handleNext = () => {
    if (!selectedCategory || zoomedImageIndex === null) return;
    setZoomedImageIndex((prev) => (prev + 1) % selectedCategory.images.length);
  };

  const handlePrev = () => {
    if (!selectedCategory || zoomedImageIndex === null) return;
    setZoomedImageIndex(
      (prev) => (prev - 1 + selectedCategory.images.length) % selectedCategory.images.length
    );
  };

  return (
    <>
      <section
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
        className="py-16 bg-sky-50 dark:bg-gray-800 transition-all duration-700"
      >
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2
            className={`text-3xl md:text-4xl font-bold text-[#0056B3] dark:text-blue-400 mb-6 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {current.title}
            <span className="block mx-auto mt-2 w-16 h-1 bg-[#FF7A00] rounded-full"></span>
          </h2>

          <p
            className={`text-lg text-[#FF7A00] font-semibold mb-4 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {current.subtitle}
          </p>

          <p
            className={`text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-12 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {current.description}
          </p>

          <div
            className={`inline-block mb-8 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-[#0056B3] dark:text-blue-300 text-xl font-bold mb-2">
              {current.headline}
            </p>
            <span className="block mx-auto mt-2 w-10 h-1 bg-[#FF7A00] rounded-full"></span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {categories.map((cat, index) => (
              <div
                key={cat.id}
                onClick={() => openCategory(cat)}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img
                  src={cat.cover}
                  alt={lang === 'ar' ? cat.titleAr : cat.titleEn}
                  className="w-full h-64 object-cover group-hover:opacity-80 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center">
                  {cat.icon}
                  <span className="text-white font-semibold text-xl mb-2">
                    {lang === 'ar' ? cat.titleAr : cat.titleEn}
                  </span>
                  <button className="bg-[#FF7A00] text-white px-4 py-2 rounded-full text-sm font-medium transition-transform duration-300 hover:scale-105">
                    {current.viewText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedCategory && (
        <div
          className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-4"
          onClick={() => {
            if (zoomedImageIndex === null) {
              closeCategoryModal();
            }
          }}
        >
          <div
            className="relative bg-white dark:bg-gray-900 dark:text-gray-100 rounded-2xl shadow-2xl w-full max-w-6xl max-h-[75vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center px-6 py-4 border-b bg-gray-100 dark:bg-gray-800 sticky top-0 z-10">
              <h3 className="text-2xl font-bold text-[#FF7A00]">
                {lang === 'ar' ? selectedCategory.titleAr : selectedCategory.titleEn}
              </h3>
              <button
                onClick={closeCategoryModal}
                className="bg-gray-700 hover:bg-gray-600 text-white rounded-full p-2 transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {selectedCategory.images.map((img, index) => (
                  <div
                    key={index}
                    className="cursor-pointer rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      openZoom(index);
                    }}
                  >
                    <img src={img} alt="" className="w-full h-48 object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {zoomedImageIndex !== null && (
            <div
              className="fixed inset-0 bg-black/90 flex items-center justify-center z-[70]"
              onClick={closeZoom}
            >
              <img
                src={selectedCategory.images[zoomedImageIndex]}
                alt="Zoomed"
                className="max-w-[90%] max-h-[80%] rounded-2xl shadow-2xl object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                onClick={closeZoom}
                className="absolute top-6 right-6 text-white hover:text-red-400"
              >
                <X size={32} />
              </button>
              {/* Prev */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-4 md:left-6 bg-gray-700 hover:bg-gray-600 text-white rounded-full p-3 transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              {/* Next */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 md:right-6 bg-gray-700 hover:bg-gray-600 text-white rounded-full p-3 transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Projects;
