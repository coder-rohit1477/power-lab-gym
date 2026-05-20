"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/917015301877";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[60] group"
      aria-label="Contact on WhatsApp"
    >
      <div className="relative">
        {/* Pulse Rings */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25" />
        <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-40 scale-125" />
        
        {/* Main Button */}
        <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] transition-transform duration-300 group-hover:scale-110 group-active:scale-95 flex items-center justify-center">
          <MessageCircle className="w-8 h-8 fill-current" />
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded-lg text-sm font-black whitespace-nowrap opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none shadow-xl uppercase italic tracking-tighter">
          Chat with us
          <div className="absolute top-1/2 -translate-y-1/2 left-full w-0 h-0 border-y-[6px] border-y-transparent border-l-[6px] border-l-white" />
        </div>
      </div>
    </a>
  );
}
