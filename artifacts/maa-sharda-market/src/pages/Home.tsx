import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero, TrustBar } from '../components/Hero';
import { Categories, Bestsellers } from '../components/Categories';
import { WhyChooseUs, MeetOwner } from '../components/AboutSections';
import { Gallery, Reviews } from '../components/MediaSections';
import { FAQ, Footer } from '../components/Footer';
import { OrderModal } from '../components/OrderModal';
import { FloatingElements } from '../components/FloatingElements';
import { OrderModalProvider } from '../hooks/use-order-modal';

export default function Home() {
  return (
    <OrderModalProvider>
      <div className="min-h-[100dvh] flex flex-col font-sans">
        <Navbar />
        
        <main className="flex-grow">
          <Hero />
          <TrustBar />
          <Categories />
          <Bestsellers />
          <WhyChooseUs />
          <MeetOwner />
          <Gallery />
          <Reviews />
          <FAQ />
        </main>

        <Footer />
        
        <OrderModal />
        <FloatingElements />
      </div>
    </OrderModalProvider>
  );
}
