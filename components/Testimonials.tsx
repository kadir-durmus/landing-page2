
import React from 'react';

interface Testimonial {
  name: string;
  role: string;
  text: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Serdar Keskin",
    role: "BTM Mağazaları",
    text: "Kepenk sistemlerimiz için aldığımız hızlı ve garantili hizmetten çok memnunuz.",
    initials: "SK"
  },
  {
    name: "Murat Yıldız",
    role: "Site Yöneticisi",
    text: "Site yöneticisi olarak en büyük sorunumuz bariyerlerdi. Autopenk ekibi çok hızlı çözdü.",
    initials: "MY"
  },
  {
    name: "Ebru Can",
    role: "Cafe İşletmecisi",
    text: "Cafemizin otomatik kapısı için her zaman onları çağırıyoruz. Çok profesyoneller.",
    initials: "EC"
  },
  {
    name: "Hakan Tekin",
    role: "Market Sahibi",
    text: "Gece vaktinde kepenk sorunumuzu çözen tek firma. Teşekkürler Autopenk.",
    initials: "HT"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold font-display text-slate-900">Müşterilerimiz Ne Diyor?</h2>
          <p className="text-slate-500 text-sm mt-3">Profesyonel hizmet ve tam müşteri memnuniyeti.</p>
        </div>
        
        <div className="flex overflow-x-auto gap-5 pb-10 hide-scrollbar snap-x snap-mandatory px-4">
          {testimonials.map((item, idx) => (
            <div 
              key={idx} 
              className={`min-w-[85%] md:min-w-[400px] bg-white p-8 rounded-3xl shadow-sm border-2 ${idx === 0 ? 'border-primary' : 'border-slate-50'} snap-start flex flex-col justify-between`}
            >
              <div>
                <div className="flex text-orange-400 mb-5">
                  {[1, 2, 3, 4, 5].map(star => (
                    <span key={star} className="material-symbols-outlined text-sm">star</span>
                  ))}
                </div>
                <p className="italic text-slate-700 text-[15px] mb-8 font-medium leading-relaxed">
                  "{item.text}"
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-slate-200 rounded-full mr-4 flex items-center justify-center font-bold text-slate-600 text-sm shadow-inner">
                  {item.initials}
                </div>
                <div className="text-sm font-bold text-slate-900 leading-tight">
                  {item.name} <br/>
                  <span className="font-normal text-slate-500 text-xs">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
