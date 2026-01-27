import React, { useState, useRef } from 'react';
import { Play, X } from 'lucide-react';

interface VideoCardProps {
  title: string;
  thumbnail?: string;
  videoSrc?: string;
  onClick?: () => void;
}

export function VideoCard({ title, thumbnail, videoSrc, onClick }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClick = () => {
    if (videoSrc) {
      setIsPlaying(true);
    } else if (onClick) {
      onClick();
    }
  };

  const handleClose = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all bg-gray-900"
      >
        {videoSrc ? (
          <video
            className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300 opacity-80"
            muted
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300 opacity-80"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <Play className="w-7 h-7 text-[#2D5F3F] ml-1" />
          </div>
          <h4 className="text-white px-4 text-center">{title}</h4>
        </div>
      </button>

      {/* Video Modal */}
      {isPlaying && videoSrc && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={handleClose}
        >
          {/* Close button - positioned outside the video container */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleClose();
            }}
            className="absolute top-4 right-4 z-[60] text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2 hover:bg-black/70"
            aria-label="Close video"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative max-w-4xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <video
              ref={videoRef}
              className="w-full rounded-xl"
              controls
              autoPlay
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h4 className="text-white text-center mt-4 text-xl">{title}</h4>
          </div>
        </div>
      )}
    </>
  );
}
