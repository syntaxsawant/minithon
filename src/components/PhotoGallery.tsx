import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface Photo {
  id: number;
  src: string;
  category: string;
  title: string;
}

const PhotoGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos: Photo[] = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'rooms',
      title: 'Deluxe Single Room'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'rooms',
      title: 'Twin Sharing Room'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'rooms',
      title: 'Premium Suite'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/3634741/pexels-photo-3634741.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'common',
      title: 'Study Lounge'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'common',
      title: 'Recreation Area'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'common',
      title: 'Dining Hall'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'facilities',
      title: 'Fitness Center'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'facilities',
      title: 'Library'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/1173651/pexels-photo-1173651.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'facilities',
      title: 'Laundry Facility'
    }
  ];

  const categories = ['all', 'rooms', 'common', 'facilities'];
  const categoryLabels = {
    all: 'All Photos',
    rooms: 'Room Types',
    common: 'Common Areas',
    facilities: 'Facilities'
  };

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const openModal = (photo: Photo) => {
    setSelectedPhoto(photo);
    setCurrentIndex(filteredPhotos.findIndex(p => p.id === photo.id));
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setCurrentIndex(nextIndex);
    setSelectedPhoto(filteredPhotos[nextIndex]);
  };

  const prevPhoto = () => {
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setCurrentIndex(prevIndex);
    setSelectedPhoto(filteredPhotos[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Photo Gallery
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Take a virtual tour of our facilities and see what makes our dormitory special.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {categoryLabels[category as keyof typeof categoryLabels]}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => openModal(photo)}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <Maximize2 className="h-8 w-8 mx-auto mb-2" />
                  <h3 className="text-lg font-semibold">{photo.title}</h3>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-lg p-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{photo.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors duration-200"
              >
                <X className="h-6 w-6" />
              </button>
              
              <button
                onClick={prevPhoto}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors duration-200"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button
                onClick={nextPhoto}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors duration-200"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-white">{selectedPhoto.title}</h3>
                  <p className="text-gray-300 mt-1">
                    {currentIndex + 1} of {filteredPhotos.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;