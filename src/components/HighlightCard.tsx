import React from 'react';
import { Trophy } from 'lucide-react';

interface HighlightCardProps {
  title: string;
  description: string;
  year: string;
}

export function HighlightCard({ title, description, year }: HighlightCardProps) {
  return (
    <div className="bg-gradient-to-br from-[#2D5F3F] to-[#4A8B5C] text-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
      <div className="flex items-start gap-4 mb-4">
        <div className="bg-[#F4C430] p-3 rounded-lg">
          <Trophy className="w-6 h-6 text-[#2D5F3F]" />
        </div>
        <div className="flex-1">
          <div className="text-[#F4C430] text-sm mb-1">{year}</div>
          <h4 className="text-xl mb-2">{title}</h4>
        </div>
      </div>
      <p className="text-white/90 leading-relaxed">{description}</p>
    </div>
  );
}
