import React from 'react';
import { Play } from 'lucide-react';

interface VideoCardProps {
  title: string;
  thumbnail: string;
  onClick: () => void;
}

export function VideoCard({ title, thumbnail, onClick }: VideoCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all bg-gray-900"
    >
      <img 
        src={thumbnail} 
        alt={title}
        className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300 opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
          <Play className="w-7 h-7 text-[#2D5F3F] ml-1" />
        </div>
        <h4 className="text-white px-4 text-center">{title}</h4>
      </div>
    </button>
  );
}
