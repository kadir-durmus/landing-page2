
import React from 'react';

export const StickyCall: React.FC = () => {
  return (
    <a 
      href="tel:+905467739495"
      className="fixed bottom-0 left-0 right-0 z-[100] bg-brand-orange text-white h-[80px] flex items-center justify-center shadow-[0_-4px_30px_rgba(0,0,0,0.2)] active:opacity-95 transition-all no-underline hover:bg-orange-600"
    >
      <div className="flex items-center space-x-5">
        <div className="bg-white/20 p-2 rounded-full">
          <span className="material-symbols-outlined text-3xl font-light">call</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[11px] uppercase tracking-[0.2em] font-black leading-none mb-1 opacity-90">
            7/24 ACİL SERVİS HATTI
          </span>
          <span className="text-2xl font-black font-sans leading-none tracking-tight">
            +90 546 773 94 95
          </span>
        </div>
      </div>
    </a>
  );
};
