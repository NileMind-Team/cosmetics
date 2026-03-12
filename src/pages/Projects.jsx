import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles, Droplet, Eye } from 'lucide-react';

const Projects = ({ lang }) => {
  const [visible, setVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [zoomedImageIndex, setZoomedImageIndex] = useState(null);

  const content = {
    en: {
      title: 'Our Collection',
      subtitle: 'Where Beauty Meets Artistry',
      description: 'Explore our stunning range of cosmetics and beauty products.',
      viewText: 'View Collection',
      featured: 'Featured Product',
      close: 'Close',
      headline: 'Signature Collections',
    },
    ar: {
      title: 'مجموعتنا',
      subtitle: 'حيث يلتقي الجمال بالفن',
      description: 'استكشفي مجموعتنا الرائعة من مستحضرات التجميل ومنتجات العناية.',
      viewText: 'عرض المجموعة',
      featured: 'منتج مميز',
      close: 'إغلاق',
      headline: 'المجموعات الأساسية',
    },
  };

  const current = content[lang] || content.en;

  const categories = [
    {
      id: 'makeup',
      titleAr: 'مستحضرات المكياج',
      titleEn: 'Makeup Collection',
      icon: <Sparkles className="w-10 h-10 text-[#D62E7C] mb-2" />,
      cover: require('../Assets/project62.jpg'),
      images: [
        require('../Assets/project49.jpg'),
        require('../Assets/project50.jpg'),
        require('../Assets/project51.jpg'),
        require('../Assets/project52.jpg'),
        require('../Assets/project53.jpg'),
        require('../Assets/project54.jpg'),
        require('../Assets/project55.jpg'),
        require('../Assets/project56.jpg'),
        require('../Assets/project57.jpg'),
        require('../Assets/project58.jpg'),
        require('../Assets/project59.jpg'),
        require('../Assets/project60.jpg'),
        require('../Assets/project61.jpg'),
        require('../Assets/project62.jpg'),
        require('../Assets/project63.jpg'),
        require('../Assets/project64.jpg'),
        require('../Assets/project65.jpg'),
        require('../Assets/project66.jpg'),
        require('../Assets/project67.jpg'),
        require('../Assets/project68.jpg'),
      ],
    },
    {
      id: 'skincare',
      titleAr: 'منتجات العناية بالبشرة',
      titleEn: 'Skincare Products',
      icon: <Droplet className="w-10 h-10 text-[#D62E7C] mb-2" />,
      cover: require('../Assets/project11.jpg'),
      images: [
        require('../Assets/project1.jpg'),
        require('../Assets/project2.jpg'),
        require('../Assets/project3.jpg'),
        require('../Assets/project4.jpg'),
        require('../Assets/project5.jpg'),
        require('../Assets/project6.jpg'),
        require('../Assets/project7.jpg'),
        require('../Assets/project8.jpg'),
        require('../Assets/project9.jpg'),
        require('../Assets/project10.jpg'),
        require('../Assets/project11.jpg'),
        require('../Assets/project12.jpg'),
        require('../Assets/project13.jpg'),
        require('../Assets/project14.jpg'),
        require('../Assets/project15.jpg'),
        require('../Assets/project16.jpg'),
        require('../Assets/project17.jpg'),
        require('../Assets/project18.jpg'),
        require('../Assets/project19.jpg'),
        require('../Assets/project20.jpg'),
        require('../Assets/project21.jpg'),
        require('../Assets/project27.jpg'),
        require('../Assets/project28.jpg'),
        require('../Assets/project22.jpg'),
        require('../Assets/project23.jpg'),
        require('../Assets/project24.jpg'),
        require('../Assets/project25.jpg'),
        require('../Assets/project26.jpg'),
        require('../Assets/project29.jpg'),
        require('../Assets/project30.jpg'),
        require('../Assets/project31.jpg'),
        require('../Assets/project32.jpg'),
        require('../Assets/project33.jpg'),
        require('../Assets/project34.jpg'),
        require('../Assets/project35.jpg'),
        require('../Assets/project36.jpg'),
        require('../Assets/project37.jpg'),
        require('../Assets/project38.jpg'),
        require('../Assets/project39.jpg'),
        require('../Assets/project40.jpg'),
        require('../Assets/project41.jpg'),
        require('../Assets/project42.jpg'),
        require('../Assets/project43.jpg'),
        require('../Assets/project44.jpg'),
        require('../Assets/project45.jpg'),
        require('../Assets/project46.jpg'),
        require('../Assets/project47.jpg'),
        require('../Assets/project48.jpg'),
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
        className="py-16 bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-800 transition-all duration-700"
      >
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2
            className={`text-3xl md:text-4xl font-bold text-[#D62E7C] dark:text-pink-400 mb-6 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {current.title}
            <span className="block mx-auto mt-2 w-16 h-1 bg-[#D62E7C] rounded-full"></span>
          </h2>

          <p
            className={`text-lg text-[#D62E7C] font-semibold mb-4 transition-all duration-700 ${
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
            <p className="text-[#D62E7C] dark:text-pink-400 text-xl font-bold mb-2">
              {current.headline}
            </p>
            <span className="block mx-auto mt-2 w-10 h-1 bg-[#D62E7C] rounded-full"></span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center justify-center">
            {categories.map((cat, index) => (
              <div
                key={cat.id}
                onClick={() => openCategory(cat)}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105 w-full max-w-[350px]"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img
                  src={cat.cover}
                  alt={lang === 'ar' ? cat.titleAr : cat.titleEn}
                  className="w-full h-64 object-cover group-hover:opacity-80 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/70 to-pink-600/30 flex flex-col items-center justify-center text-center">
                  {cat.icon}
                  <span className="text-white font-semibold text-xl mb-2">
                    {lang === 'ar' ? cat.titleAr : cat.titleEn}
                  </span>
                  <button className="bg-[#D62E7C] text-white px-4 py-2 rounded-full text-sm font-medium transition-transform duration-300 hover:scale-105 shadow-md">
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
            <div className="flex justify-between items-center px-6 py-4 border-b bg-gradient-to-r from-pink-50 to-white dark:from-gray-800 dark:to-gray-900 sticky top-0 z-10">
              <h3 className="text-2xl font-bold text-[#D62E7C]">
                {lang === 'ar' ? selectedCategory.titleAr : selectedCategory.titleEn}
              </h3>
              <button
                onClick={closeCategoryModal}
                className="bg-[#D62E7C] hover:bg-[#c0296b] text-white rounded-full p-2 transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {selectedCategory.images.map((img, index) => (
                  <div
                    key={index}
                    className="cursor-pointer rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 relative group/image"
                    onClick={(e) => {
                      e.stopPropagation();
                      openZoom(index);
                    }}
                  >
                    <img src={img} alt="" className="w-full h-48 object-cover" />
                    <div className="absolute inset-0 bg-[#D62E7C]/0 group-hover/image:bg-[#D62E7C]/20 transition-all duration-300 flex items-center justify-center">
                      <Eye className="text-white opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" size={30} />
                    </div>
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
                className="absolute top-6 right-6 text-white hover:text-[#D62E7C] transition-colors"
              >
                <X size={32} />
              </button>
              {/* Prev */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-4 md:left-6 bg-[#D62E7C] hover:bg-[#c0296b] text-white rounded-full p-3 transition-all shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              {/* Next */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 md:right-6 bg-[#D62E7C] hover:bg-[#c0296b] text-white rounded-full p-3 transition-all shadow-lg"
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