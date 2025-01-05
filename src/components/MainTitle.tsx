import React, { useState } from 'react';
import { MAIN_TITLE_ASCII } from '../constants/ascii';
import '../styles/shake.css';

export function MainTitle() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <pre 
      className={`
        font-mono 
        ${isHovered ? 'text-white animate-shake' : 'text-pink-400'} 
        text-sm md:text-base lg:text-lg 
        whitespace-pre select-none 
        transition-colors duration-150
      `}
      style={{
        transform: 'translateY(-12rem)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {MAIN_TITLE_ASCII}
    </pre>
  );
}