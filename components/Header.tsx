
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="py-4 border-b border-slate-100 bg-white/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 flex flex-col items-center justify-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-extrabold tracking-tighter font-display text-slate-900">
            <span className="text-primary">AUTO</span>PENK
          </span>
        </div>
        <p className="text-[10px] font-bold text-slate-500 tracking-widest uppercase mt-1">
          İstanbul Profesyonel Otomasyon Sistemleri
        </p>
      </div>
    </header>
  );
};
