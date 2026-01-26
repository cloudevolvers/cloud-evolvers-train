import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MagnifyingGlass, 
  Images, 
  Copy, 
  CheckCircle, 
  X,
  CloudArrowDown,
  Palette,
  Sparkle
} from '@phosphor-icons/react';

interface ImageData {
  filename: string;
  path: string;
  size: number;
  created: string;
  modified: string;
  source: 'unsplash' | 'pexels' | 'pixabay';
}

interface ImageBrowserProps {
  onImageSelect?: (imagePath: string) => void;
  showCopyPath?: boolean;
  maxHeight?: string;
}

const ImageBrowser: React.FC<ImageBrowserProps> = ({ 
  onImageSelect, 
  showCopyPath = true,
  maxHeight = "80vh"
}) => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [copiedPath, setCopiedPath] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Load images from all service folders
  const loadImages = async () => {
    try {
      setLoading(true);
      const allImages: ImageData[] = [];
      
      // Load from each service folder
      const services: Array<'unsplash' | 'pexels' | 'pixabay'> = ['unsplash', 'pexels', 'pixabay'];
      
      for (const service of services) {
        try {
          const response = await fetch(`http://localhost:3002/api/images/service/${service}`);
          if (response.ok) {
            const serviceImages = await response.json();
            const imagesWithSource = serviceImages.map((img: any) => ({
              ...img,
              source: service,
              path: `/images/${service}/${img.filename}`
            }));
            allImages.push(...imagesWithSource);
          }
        } catch (err) {
          console.warn(`Failed to load ${service} images:`, err);
        }
      }
      
      // Sort by filename for consistent ordering
      allImages.sort((a, b) => a.filename.localeCompare(b.filename));
      setImages(allImages);
    } catch (err) {
      console.error('Failed to load images:', err);
      setError('Failed to load images. Make sure the image server is running.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadImages();
  }, []);

  // Filter images based on search and service selection
  const filteredImages = images.filter(image => {
    const matchesSearch = image.filename.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesService = selectedService === 'all' || image.source === selectedService;
    return matchesSearch && matchesService;
  });

  // Get service badge props
  const getServiceBadge = (source: string) => {
    switch (source) {
      case 'unsplash':
        return { 
          color: 'bg-blue-100 text-blue-800 border-blue-200', 
          icon: <CloudArrowDown size={12} className="text-blue-600" />,
          label: 'Unsplash'
        };
      case 'pexels':
        return { 
          color: 'bg-green-100 text-green-800 border-green-200', 
          icon: <Palette size={12} className="text-green-600" />,
          label: 'Pexels'
        };
      case 'pixabay':
        return { 
          color: 'bg-purple-100 text-purple-800 border-purple-200', 
          icon: <Sparkle size={12} className="text-purple-600" />,
          label: 'Pixabay'
        };
      default:
        return { 
          color: 'bg-gray-100 text-gray-800 border-gray-200', 
          icon: <Images size={12} className="text-gray-600" />,
          label: 'Unknown'
        };
    }
  };

  // Copy path to clipboard
  const copyPath = async (path: string) => {
    try {
      await navigator.clipboard.writeText(path);
      setCopiedPath(path);
      setTimeout(() => setCopiedPath(null), 2000);
    } catch (err) {
      console.error('Failed to copy path:', err);
    }
  };

  // Handle image selection
  const handleImageSelect = (image: ImageData) => {
    setSelectedImage(image.path);
    if (onImageSelect) {
      onImageSelect(image.path);
    }
  };

  // Close modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  // Get service counts
  const serviceCounts = {
    all: images.length,
    unsplash: images.filter(img => img.source === 'unsplash').length,
    pexels: images.filter(img => img.source === 'pexels').length,
    pixabay: images.filter(img => img.source === 'pixabay').length,
  };

  if (error) {
    return (
      <div className="flex items-center justify-center h-64 bg-red-50 rounded-lg border border-red-200">
        <div className="text-center">
          <X size={48} className="mx-auto text-red-400 mb-2" />
          <p className="text-red-600 font-medium">{error}</p>
          <button 
            onClick={loadImages}
            className="mt-3 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Images size={24} className="text-blue-600" />
          <h2 className="text-xl font-semibold text-gray-900">
            Professional Image Library
          </h2>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
            {filteredImages.length} images
          </span>
        </div>
        <button
          onClick={loadImages}
          disabled={loading}
          className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 transition-colors text-sm"
        >
          {loading ? 'Loading...' : 'Refresh'}
        </button>
      </div>

      {/* Filters */}
      <div className="space-y-3">
        {/* Search */}
        <div className="relative">
          <MagnifyingGlass size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search images..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Service Filter */}
        <div className="flex gap-2 flex-wrap">
          {Object.entries(serviceCounts).map(([service, count]) => {
            const isActive = selectedService === service;
            const badge = service === 'all' 
              ? { color: 'bg-gray-100 text-gray-800', label: 'All Services', icon: <Images size={14} /> }
              : getServiceBadge(service);

            return (
              <button
                key={service}
                onClick={() => setSelectedService(service)}
                className={`
                  px-3 py-2 rounded-lg border text-sm font-medium transition-all flex items-center gap-2
                  ${isActive 
                    ? 'bg-blue-600 text-white border-blue-600' 
                    : `${badge.color} border hover:shadow-sm`
                  }
                `}
              >
                {!isActive && badge.icon}
                <span className="capitalize">{badge.label}</span>
                <span className={`
                  px-1.5 py-0.5 rounded-full text-xs
                  ${isActive ? 'bg-blue-500 text-white' : 'bg-white/80 text-gray-600'}
                `}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Image Grid */}
      <div 
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 overflow-y-auto pr-2"
        style={{ maxHeight }}
      >
        <AnimatePresence>
          {loading ? (
            // Loading skeleton
            Array.from({ length: 12 }).map((_, index) => (
              <motion.div
                key={`loading-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="aspect-square bg-gray-200 rounded-lg animate-pulse"
              />
            ))
          ) : (
            filteredImages.map((image, index) => {
              const badge = getServiceBadge(image.source);
              return (
                <motion.div
                  key={image.filename}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  className="group relative aspect-square bg-gray-100 rounded-lg overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => handleImageSelect(image)}
                >
                  {/* Image */}
                  <img
                    src={image.path}
                    alt={image.filename}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  
                  {/* Service Badge */}
                  <div className={`
                    absolute top-2 left-2 px-2 py-1 rounded-md text-xs font-medium border
                    ${badge.color} backdrop-blur-sm bg-opacity-90 flex items-center gap-1
                  `}>
                    {badge.icon}
                    {badge.label}
                  </div>

                  {/* Copy Button */}
                  {showCopyPath && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        copyPath(image.path);
                      }}
                      className="absolute top-2 right-2 p-1.5 bg-white/90 rounded-md border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                    >
                      {copiedPath === image.path ? (
                        <CheckCircle size={14} className="text-green-600" />
                      ) : (
                        <Copy size={14} className="text-gray-600" />
                      )}
                    </button>
                  )}

                  {/* Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-xs font-medium truncate">
                      {image.filename}
                    </p>
                    <p className="text-white/80 text-xs">
                      {(image.size / 1024).toFixed(0)}KB
                    </p>
                  </div>
                </motion.div>
              );
            })
          )}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {!loading && filteredImages.length === 0 && (
        <div className="flex flex-col items-center justify-center h-64 text-gray-500">
          <Images size={64} className="mb-4 text-gray-400" />
          <p className="text-lg font-medium mb-2">No images found</p>
          <p className="text-sm text-center">
            {searchTerm ? 'Try adjusting your search terms' : 'No images available in the selected service'}
          </p>
        </div>
      )}

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Selected image"
                className="w-full h-full object-contain"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageBrowser;