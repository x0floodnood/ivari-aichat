import React from 'react';
import { ASCII_TEXT } from '../constants/ascii';

export function AsciiArt() {
  return (
    <pre className="font-mono text-white text-sm md:text-base lg:text-lg whitespace-pre select-none">
      {ASCII_TEXT}
    </pre>
  );
}