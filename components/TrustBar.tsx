
import React from 'react';

export const TrustBar: React.FC = () => {
  return (
    <section className="py-10 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-xs font-bold font-display text-center mb-8 text-slate-400 uppercase tracking-widest">
          Bizi Tercih Eden Markalar
        </h2>
        <div className="flex items-center justify-center gap-10 md:gap-20 opacity-70 grayscale">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-black font-display tracking-tighter italic text-slate-700">Trendyol</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-black font-display tracking-tighter text-slate-700">BTM</span>
            <p className="text-[8px] text-slate-500 font-bold whitespace-nowrap uppercase tracking-tighter">Bilinçli Tüketici Mağazaları</p>
          </div>
          <div className="hidden md:flex flex-col items-center">
            <span className="text-2xl font-black font-display tracking-tighter text-slate-700">MİGROS</span>
          </div>
        </div>
      </div>
    </section>
  );
};
