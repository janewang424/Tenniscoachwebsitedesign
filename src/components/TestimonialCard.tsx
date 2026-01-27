import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export function TestimonialCard({ name, role, text, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-[#F4C430] text-[#F4C430]" />
        ))}
      </div>
      <p className="text-gray-700 mb-6 leading-relaxed">{text}</p>
      <div className="border-t border-gray-200 pt-4">
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
  );
}
