import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './Button';

interface LessonCardProps {
  title: string;
  subtitle: string;
  price: string;
  duration: string;
  features: string[];
  onSchedule: () => void;
  scheduleText: string;
}

export function LessonCard({ 
  title, 
  subtitle, 
  price, 
  duration, 
  features, 
  onSchedule,
  scheduleText 
}: LessonCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 md:p-8 border-2 border-gray-100 hover:border-[#F4C430]">
      <div className="text-center mb-6">
        <h3 className="text-2xl md:text-3xl mb-2">{title}</h3>
        <p className="text-gray-600">{subtitle}</p>
      </div>
      
      <div className="text-center mb-8 pb-8 border-b border-gray-200">
        <div className="text-4xl md:text-5xl text-[#2D5F3F] mb-1">{price}</div>
        <div className="text-gray-600">{duration}</div>
      </div>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-[#4A8B5C] flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button variant="primary" onClick={onSchedule} className="w-full">
        {scheduleText}
      </Button>
    </div>
  );
}
