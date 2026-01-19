
import React from 'react';

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

const serviceList: ServiceItem[] = [
  {
    icon: "sensor_door",
    title: "Fotoselli Kapı",
    description: "Otomatik fotoselli kapılarınızın sensör, motor ve cam tamiri için hızlı çözüm."
  },
  {
    icon: "door_front",
    title: "Kepenk Sistemleri",
    description: "Mağaza ve iş yeri kepenkleri için hızlı motor ve lamel değişimi."
  },
  {
    icon: "garage",
    title: "Garaj Kapısı",
    description: "Seksiyonel ve sarmal garaj kapıları için profesyonel onarım ve bakım."
  },
  {
    icon: "traffic",
    title: "Kollu Bariyer",
    description: "Site ve otopark giriş bariyerlerinin mekanik ve kart onarımı."
  },
  {
    icon: "window",
    title: "Giyotin Cam",
    description: "Otomatik hareketli cam sistemleri için uzman teknik destek."
  }
];

export const Services: React.FC = () => {
  return (
    <section className="py-16 px-5 bg-slate-50">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-display mb-4 text-slate-900">Hizmet Alanlarımız</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid gap-6">
          {serviceList.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center transition-transform hover:scale-[1.01]"
            >
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-5 text-primary">
                <span className="material-symbols-outlined text-4xl">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                {item.description}
              </p>
              <a 
                href="tel:+905467739495"
                className="w-full bg-slate-100 text-slate-900 font-bold py-4 rounded-xl hover:bg-primary hover:text-white transition-all text-center"
              >
                Servis Çağır
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
