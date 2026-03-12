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
      cover: require('../Assets/product21.webp'),
      images: [
        require('../Assets/product1.jpg'),
        require('../Assets/product2.jpg'),
        require('../Assets/product3.jpg'),
        require('../Assets/product4.jpg'),
        require('../Assets/product5.jpg'),
        require('../Assets/product6.jpg'),
        require('../Assets/product7.jpg'),
        require('../Assets/product8.jpg'),
        require('../Assets/product9.jpg'),
        require('../Assets/product10.jpg'),
      ],
    },
    {
      id: 'skincare',
      titleAr: 'منتجات العناية بالبشرة',
      titleEn: 'Skincare Products',
      icon: <Droplet className="w-10 h-10 text-[#D62E7C] mb-2" />,
      cover: require('../Assets/product22.jpg'),
      images: [
        require('../Assets/product11.jpg'),
        require('../Assets/product12.jpg'),
        require('../Assets/product13.jpg'),
        require('../Assets/product14.jpg'),
        require('../Assets/product15.jpg'),
        require('../Assets/product16.jpg'),
        require('../Assets/product17.jpg'),
        require('../Assets/product18.jpg'),
        require('../Assets/product19.jpg'),
        require('../Assets/product20.jpg'),
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
            className={`text-3xl md:text-4xl font-bold text-[#762B8B] dark:text-pink-400 mb-6 transition-all duration-700 ${
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
            <p className="text-[#762B8B] dark:text-pink-400 text-xl font-bold mb-2">
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
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center">
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
              <h3 className="text-2xl font-bold text-[#762B8B]">
                {lang === 'ar' ? selectedCategory.titleAr : selectedCategory.titleEn}
              </h3>
              <button
                onClick={closeCategoryModal}
                className="bg-[#762B8B] hover:bg-[#5a2269] text-white rounded-full p-2 transition-all"
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
                    <img src={img} alt="" className="w-full h-48 object-contain" />
                    <div className="absolute inset-0 bg-[#762B8B]/0 group-hover/image:bg-[#762B8B]/20 transition-all duration-300 flex items-center justify-center">
                      <Eye
                        className="text-white opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"
                        size={30}
                      />
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
                className="absolute left-4 md:left-6 bg-[#762B8B] hover:bg-[#5a2269] text-white rounded-full p-3 transition-all shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              {/* Next */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 md:right-6 bg-[#762B8B] hover:bg-[#5a2269] text-white rounded-full p-3 transition-all shadow-lg"
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
