
import React from 'react';

export const Hero: React.FC = () => {
  const images = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC0LEhEkySLY63wNcoDmFDIm_k8f70tOJdnu43r0-xegPNdamZkHc3Z7H26_yxFGXzOB0_g_sE09vVPjTbpI57BTacmDBiqllYMSCMVUOXR9UTCYttU_jAvXXmSE66hBACrufqqmbcJg3b_aVbyf7m-MVAfWgmq0zkcdw9P5RZ0lsHxtkf7FH1q-rOc9PcvDkCdxawbQlzfEIw3OQ_e3TJ0bG2uGkxoFigDv0whNll26JP21OHgV1f3lbGhbaJYQPadBFqRbdO9lw",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAqgDJy1ktD3qdyUsaTb8TWB-K62lzuAD4Fb10kNjNY4nYn4bqJkMFHSNeAScc_yh7OIqYWB8Jq4WctZ9Vx3Un4ND880UvkivtbnPbvRG506ED-vj7eNljNsRb6E5vTcAVc8RxTSbyNqYgYjXtWQwUPhW1Ha7lCuEA5iLXNZvXaMu49ttYKNmB-lr4yokvCX47p4SP_rNaykspg7kSJ9BWXIvawMCs2KvFBfD-Jk52mZpgML0Tt3pLotDsnX86bbl8wswA58LRNhw",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB1lgq4pX6Cb2RcLegGnoek-AnOzNG2YkikFcdPcLApjGmygo3K6sFs7p585pAYk7-V5f9op3PniK9VvyPACe2S5qgXv_0AdJ-3NWqHQQhaoq9EtUFAGgTEXIctycMgTu6AgbwzRBGWic74hMJQtledpy4YxoePTxYhjl22K_fAKiQK_qnlaqp7TWFztaOGEQPYoPWD3mPebBCziXIexrJt54DcI9IbJGb1IWhnzeaZ_3waieI_rtfv-iIm_oHgy2w_svlXBVxMEw"
  ];

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 z-0 grid grid-cols-1 grid-rows-3 h-full">
        {images.map((img, idx) => (
          <img key={idx} alt={`Service scene ${idx}`} className="w-full h-full object-cover opacity-60" src={img} />
        ))}
        <div className="absolute inset-0 hero-overlay z-10"></div>
      </div>
      
      <div className="relative z-20 w-full max-w-xl mx-auto px-5 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold font-display text-white mb-6 leading-tight tracking-tight">
          İstanbul Genelinde 7/24 Profesyonel Otomatik Kapı ve Kepenk Servisi
        </h1>
        <p className="text-lg text-slate-200 mb-10 font-semibold max-w-sm mx-auto">
          Uzman Ekiplerimizle Hızlı Müdahale, Garantili Parça Değişimi ve Kurulum.
        </p>
        <a 
          href="tel:+905467739495"
          className="inline-flex items-center justify-center bg-primary hover:bg-orange-600 text-white w-full h-[64px] rounded-xl transition-all shadow-xl active:scale-95 group"
        >
          <span className="text-xl font-black tracking-tight">HEMEN ARA: +90 546 773 94 95</span>
        </a>
      </div>
    </section>
  );
};
