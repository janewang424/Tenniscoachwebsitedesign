import React from 'react';
import { Button } from './Button';

interface SectionCTAProps {
  text: string;
  onClick: () => void;
}

export function SectionCTA({ text, onClick }: SectionCTAProps) {
  return (
    <div className="flex justify-center py-8 md:py-12">
      <Button variant="primary" size="lg" onClick={onClick}>
        {text}
      </Button>
    </div>
  );
}
