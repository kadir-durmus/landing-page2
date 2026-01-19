
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-slate-950 text-slate-400 text-center pb-32">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-3xl font-extrabold font-display text-white mb-6">
          <span className="text-primary">AUTO</span>PENK
        </div>
        <p className="text-sm mb-6">© 2026 Autopenk Otomasyon Sistemleri. Tüm Hakları Saklıdır.</p>
        <div className="w-10 h-1 bg-slate-800 mx-auto mb-6"></div>
        <p className="text-[11px] max-w-sm mx-auto opacity-50 leading-relaxed font-medium">
          Fotoselli kapı, kepenk, bariyer ve tüm otomatik kapı sistemleriniz için 
          profesyonel tamir, bakım ve servis hizmeti sunuyoruz. 
          İstanbul geneli yerinde keşif ve hızlı servis.
        </p>
      </div>
    </footer>
  );
};
