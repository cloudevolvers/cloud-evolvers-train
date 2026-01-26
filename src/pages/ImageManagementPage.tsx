import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Palette, 
  Eye,
  Gear,
  CloudArrowDown,
  CheckCircle
} from '@phosphor-icons/react';
import ImageBrowser from '../components/ImageBrowser';
import { getImagePath, createImageErrorHandler, FALLBACK_IMAGE } from '@/lib/image-utils';

interface ImageManagementPageProps {
  onBack?: () => void;
}

const ImageManagementPage: React.FC<ImageManagementPageProps> = ({ onBack }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageUsage, setImageUsage] = useState({
    hero: '/images/unsplash/azure-cloud-infrastructure-modern.jpg',
    training: '/images/unsplash/business-training-session.jpg',
    services: '/images/unsplash/business-analytics-dashboard.jpg',
    about: '/images/unsplash/business-team-collaboration-modern.jpg'
  });

  const handleImageSelect = (imagePath: string) => {
    setSelectedImage(imagePath);
  };

  const assignImageToSection = (section: keyof typeof imageUsage) => {
    if (selectedImage) {
      setImageUsage(prev => ({
        ...prev,
        [section]: selectedImage
      }));
      setSelectedImage(null);
    }
  };

  const sectionLabels = {
    hero: 'Hero Section',
    training: 'Training Section',
    services: 'Services Section',
    about: 'About Section'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {onBack && (
                <button
                  onClick={onBack}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Back</span>
                </button>
              )}
              <div className="flex items-center space-x-3">
                <Palette className="w-8 h-8 text-emerald-600" />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Image Management</h1>
                  <p className="text-gray-600">Manage and assign professional images to website sections</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 bg-emerald-50 rounded-full px-4 py-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span className="text-emerald-700 font-medium">Image Server Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Image Browser */}
          <div className="lg:col-span-3">
            <ImageBrowser 
              onImageSelect={handleImageSelect}
              showCopyPath={true}
              maxHeight="70vh"
            />
          </div>

          {/* Assignment Panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Selected Image Preview */}
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Selected Image</h3>
                </div>
                
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <img
                    src={getImagePath(selectedImage)}
                    alt="Selected"
                    className="w-full h-full object-cover"
                    onError={createImageErrorHandler()}
                  />
                </div>

                <p className="text-sm text-gray-600 mb-4 font-mono bg-gray-50 p-2 rounded">
                  {selectedImage}
                </p>

                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 mb-3">Assign to Section:</h4>
                  {Object.entries(sectionLabels).map(([key, label]) => (
                    <button
                      key={key}
                      onClick={() => assignImageToSection(key as keyof typeof imageUsage)}
                      className="w-full flex items-center justify-between px-4 py-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-lg transition-colors"
                    >
                      <span>{label}</span>
                      <Gear className="w-4 h-4" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Current Assignments */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center space-x-3 mb-6">
                <Gear className="w-6 h-6 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">Current Image Assignments</h3>
              </div>

              <div className="space-y-4">
                {Object.entries(imageUsage).map(([section, imagePath]) => (
                  <div key={section} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-gray-900">
                        {sectionLabels[section as keyof typeof sectionLabels]}
                      </h4>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        Active
                      </span>
                    </div>
                    
                    <div className="aspect-video bg-gray-100 rounded-md overflow-hidden mb-3">
                      <img
                        src={getImagePath(imagePath)}
                        alt={sectionLabels[section as keyof typeof sectionLabels]}
                        className="w-full h-full object-cover"
                        onError={createImageErrorHandler()}
                      />
                    </div>
                    
                    <p className="text-xs text-gray-500 font-mono bg-gray-50 p-2 rounded">
                      {imagePath}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Usage Instructions */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <CloudArrowDown className="w-6 h-6 text-blue-600" />
                <h3 className="font-semibold text-blue-900">How to Use</h3>
              </div>
              
              <div className="space-y-3 text-sm text-blue-800">
                <div className="flex items-start space-x-2">
                  <span className="font-semibold text-blue-600">1.</span>
                  <span>Browse the professional image library on the left</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="font-semibold text-blue-600">2.</span>
                  <span>Click "Select" on any image to choose it</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="font-semibold text-blue-600">3.</span>
                  <span>Assign the selected image to a website section</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="font-semibold text-blue-600">4.</span>
                  <span>Use "Copy Path" to get the image URL for your code</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageManagementPage;