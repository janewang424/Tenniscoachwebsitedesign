import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  type = 'button',
  className = '' 
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg transition-all duration-200 font-medium';
  
  const variantClasses = {
    primary: 'bg-[#2D5F3F] text-white hover:bg-[#234a31] active:bg-[#1a3824]',
    secondary: 'bg-[#F4C430] text-[#1F2937] hover:bg-[#e5b520] active:bg-[#d6a610]',
    outline: 'border-2 border-[#2D5F3F] text-[#2D5F3F] hover:bg-[#2D5F3F] hover:text-white active:bg-[#234a31]',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
}
