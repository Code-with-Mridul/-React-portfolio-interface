import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PortfolioInterface = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const [images, setImages] = useState([
    'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1618004912476-29818d81ae2e?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop'
  ]);

  const tabContent = {
    about: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">
          Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
        </p>
        <p className="text-gray-300 leading-relaxed">
          I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...
        </p>
      </div>
    ),
    experiences: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">
          Throughout my career at Salesforce, I've helped hundreds of businesses transform their sales operations and achieve remarkable growth.
        </p>
        <p className="text-gray-300 leading-relaxed">
          My expertise includes CRM implementation, sales strategy development, and building lasting client relationships that drive results.
        </p>
      </div>
    ),
    recommended: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">
          I highly recommend exploring our latest solutions for enterprise-level sales automation and customer engagement platforms.
        </p>
        <p className="text-gray-300 leading-relaxed">
          For teams looking to scale, our integrated approach to CRM and analytics has proven invaluable across various industries.
        </p>
      </div>
    )
  };

  const handleAddImage = () => {
    const newImageUrl = prompt('Enter image URL:');
    if (newImageUrl) {
      setImages([...images, newImageUrl]);
    }
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-8">
      <div className="w-full max-w-7xl flex gap-8">
        {/* Left side - empty but responsive */}
        <div className="flex-1"></div>

        {/* Right side - widgets */}
        <div className="flex-1 space-y-6">
          {/* About Me Widget */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-700/50">
            <div className="flex items-center gap-4 p-6 pb-4">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-gray-400 text-xl">?</span>
              </div>
              <div className="flex bg-gray-900/50 rounded-full p-1">
                <button
                  onClick={() => setActiveTab('about')}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeTab === 'about'
                      ? 'bg-gray-800 text-white shadow-lg'
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  About Me
                </button>
                <button
                  onClick={() => setActiveTab('experiences')}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeTab === 'experiences'
                      ? 'bg-gray-800 text-white shadow-lg'
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  Experiences
                </button>
                <button
                  onClick={() => setActiveTab('recommended')}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeTab === 'recommended'
                      ? 'bg-gray-800 text-white shadow-lg'
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  Recommended
                </button>
              </div>
            </div>
            <div className="px-6 pb-6">
              {tabContent[activeTab]}
            </div>
          </div>

          {/* Gallery Widget */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-700/50">
            <div className="flex items-center justify-between p-6 pb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-gray-400 text-xl">?</span>
                </div>
                <div className="bg-gray-900/50 rounded-full px-6 py-2.5">
                  <span className="text-white text-sm font-medium">Gallery</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleAddImage}
                  className="bg-gray-900/50 hover:bg-gray-900/70 text-white px-4 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg"
                >
                  + ADD IMAGE
                </button>
                <button
                  onClick={handlePrevImage}
                  className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 rounded-full flex items-center justify-center shadow-xl transition-all"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 rounded-full flex items-center justify-center shadow-xl transition-all"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
            <div className="px-6 pb-6">
              <div className="grid grid-cols-3 gap-4">
                {images.map((img, idx) => (
                  <div
                    key={idx}
                    className={`aspect-square rounded-2xl overflow-hidden transition-all ${
                      idx === currentImageIndex
                        ? 'ring-4 ring-blue-500 scale-105'
                        : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Gallery ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioInterface;