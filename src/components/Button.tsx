import React from 'react';

export const Button = ({ 
  children, 
  variant = 'primary', 
  className = "",
  onClick
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline'; 
  className?: string;
  onClick?: () => void;
}) => {
  const variants = {
    primary: "bg-orange-600 text-white hover:bg-orange-700 shadow-sm hover:shadow-md",
    secondary: "bg-orange-50 text-orange-700 hover:bg-orange-100",
    outline: "border-2 border-slate-200 text-slate-600 hover:border-orange-600 hover:text-orange-600"
  };

  return (
    <button 
      onClick={onClick}
      className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 flex items-center gap-2 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
