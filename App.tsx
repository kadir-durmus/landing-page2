
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { StickyCall } from './components/StickyCall';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Testimonials />
      </main>
      <Footer />
      <StickyCall />
    </div>
  );
};

export default App;
