import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-8 gap-6 md:gap-8">
      {/* Left side - Text content */}
      <div className="flex-1 text-left">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Welcome to Vapormall</h2>
        <p className="text-base md:text-lg text-gray-700 mb-3 md:mb-4">
          Discover our amazing collection of vaping products and accessories. We offer the best quality items at competitive prices.
        </p>
        <p className="text-base md:text-lg text-gray-700">
          Whether you're new to vaping or an experienced user, we have everything you need to enhance your vaping experience.
        </p>
      </div>

      {/* Right side - YouTube video */}
      <div className="flex-1 w-full aspect-video">
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/hjbZyXod3mc"
          title="Vapormall Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoSection; 