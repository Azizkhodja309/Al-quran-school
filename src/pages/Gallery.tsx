import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Gallery: React.FC = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: 'https://i.postimg.cc/MTc9P0D4/photo-2025-06-04-12-16-53.jpg',
      alt: 'Students learning in classroom',
      category: t('classroomActivities')
    },
    {
      src: 'https://i.postimg.cc/3JjncxXK/photo-2025-06-04-12-18-20.jpg',
      alt: 'Interactive learning session',
      category: t('classroomActivities')
    },
    {
      src: 'https://i.postimg.cc/gkpK8bf1/photo-2025-06-04-12-17-40.jpg',
      alt: 'Happy students',
      category: t('studentLife')
    },
    {
      src: 'https://i.postimg.cc/dVtmNmQB/photo-2025-06-04-12-21-53.jpg',
      alt: 'School activities',
      category: t('events')
    },
    {
      src: 'https://i.postimg.cc/7YqgbMzk/photo-2025-06-04-12-17-23.jpg',
      alt: 'Learning environment',
      category: t('classroomActivities')
    },
    {
      src: 'https://i.postimg.cc/tCXV91bS/photo-2025-06-04-12-20-12.jpg',
      alt: 'Student engagement',
      category: t('studentLife')
    },
    {
      src: 'https://i.postimg.cc/prkrmZv0/photo-2025-06-04-12-19-42.jpg',
      alt: 'Educational activities',
      category: t('events')
    }
  ];

  const categories = [t('all'), t('classroomActivities'), t('studentLife'), t('events')];
  const [activeCategory, setActiveCategory] = useState(t('all'));

  const filteredImages = activeCategory === t('all') 
    ? images 
    : images.filter(image => image.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('gallery')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('galleryDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeCategory === category
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="aspect-w-16 aspect-h-12 relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 bg-white">
                  <span className="text-sm text-emerald-600 font-medium">{image.category}</span>
                  <p className="text-gray-700 mt-1">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;