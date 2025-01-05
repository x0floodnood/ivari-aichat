import React from 'react';
import { Heart } from 'lucide-react';
import { TelegramButton } from './TelegramButton';
import { TypeWriter } from './TypeWriter';

export function DescBox() {
  return (
    <div className="flex flex-col items-center gap-4 -mt-32 w-full px-4 max-w-lg mx-auto">
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
        <pre className="flex-1 w-full sm:w-auto flex items-center gap-2 text-[11px] sm:text-[13px] font-mono bg-black/40 text-green-400 p-3 sm:p-4 rounded-lg border border-green-400/30 overflow-x-auto">
          <TypeWriter text="I'm here to lock in and share some love." />
          <Heart className="text-pink-400 animate-pulse flex-shrink-0" size={16} />
          <TypeWriter text=" Ready to chat, Onichan?" />
        </pre>
        <TelegramButton />
      </div>
    </div>
  );
}