import React from 'react';
import { WhatsAppIcon } from './icons';
import { restaurantInfo } from '@/data/restaurantInfo';

export default function WhatsAppButton() {
  const encodedMessage = encodeURIComponent(restaurantInfo.whatsapp.message);
  const whatsappUrl = `https://wa.me/${restaurantInfo.whatsapp.number}?text=${encodedMessage}`;

  return (
    <aside aria-label="WhatsApp Quick Contact">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with 99 Dosa Xpress on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20bd5a] hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 group"
      >
        <WhatsAppIcon className="w-8 h-8 text-white group-hover:rotate-6 transition-transform" />
        
        {/* Tooltip on Desktop Hover */}
        <span className="hidden md:group-hover:inline-block absolute right-16 bg-[#1F2937] text-white text-xs font-semibold py-1.5 px-3 rounded-lg shadow-lg whitespace-nowrap animate-in fade-in slide-in-from-right-2 pointer-events-none">
          Order on WhatsApp
        </span>
      </a>
    </aside>
  );
}
