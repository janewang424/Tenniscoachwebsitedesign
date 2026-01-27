import React from 'react';
import { Phone } from 'lucide-react';

interface FloatingActionButtonProps {
  text: string;
  onClick: () => void;
}

export function FloatingActionButton({ text, onClick }: FloatingActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 md:hidden z-50 bg-[#2D5F3F] text-white px-5 py-4 rounded-full shadow-xl hover:bg-[#234a31] active:scale-95 transition-all flex items-center gap-2"
      aria-label={text}
    >
      <Phone className="w-5 h-5" />
      <span className="font-medium">{text}</span>
    </button>
  );
}
