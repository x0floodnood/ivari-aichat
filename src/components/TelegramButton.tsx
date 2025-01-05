import React from 'react';
import { Send } from 'lucide-react';

export function TelegramButton() {
  return (
    <a
      href="https://t.me/IVARIAIBOT"
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex items-center justify-center
        bg-black/40 hover:bg-black/50
        text-[#2AABEE]
        p-3 sm:p-4 rounded-lg 
        border border-[#2AABEE]/30
        transition-all duration-150
        hover:border-[#2AABEE]/50
        hover:scale-105
        w-full sm:w-[64px] h-[52px]
      "
      title="Connect on Telegram"
    >
      <Send size={24} className="animate-pulse" />
    </a>
  );
}