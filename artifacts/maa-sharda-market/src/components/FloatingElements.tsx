import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowUp, Phone } from 'lucide-react';

export function FloatingElements() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Back to top (Desktop Only) */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-24 left-6 z-40 bg-gray-950 text-white p-3.5 rounded-full shadow-xl hover:bg-primary transition-all duration-300 hidden md:flex items-center justify-center hover:scale-105 active:scale-95 border border-gray-800 cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Button (Desktop Only) */}
      <a
        href="https://wa.me/919977777985"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl shadow-green-500/30 hover:scale-110 active:scale-95 transition-all hidden md:flex items-center justify-center cursor-pointer border border-green-400"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {/* Mobile Sticky Bottom Bar (Mobile Only) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-100 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] flex">
        <a 
          href="tel:09977777985" 
          className="flex-1 flex items-center justify-center gap-2 py-4 text-gray-900 font-heading font-extrabold text-sm active:bg-gray-50 border-r border-gray-150 transition-colors"
        >
          <Phone size={18} className="text-primary fill-primary/10" />
          Call Now
        </a>
        <a 
          href="https://wa.me/919977777985" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#25D366] text-white font-heading font-extrabold text-sm active:bg-[#20ba59] transition-colors"
        >
          <MessageCircle size={18} />
          WhatsApp Order
        </a>
      </div>
    </>
  );
}
