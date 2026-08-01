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
      {/* Back to top (Desktop & Mobile) */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 z-40 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-primary transition-colors hidden md:flex items-center justify-center"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Button (Desktop) */}
      <a
        href="https://wa.me/919977777985"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-whatsapp text-white p-4 rounded-full shadow-xl shadow-green-500/30 hover:scale-110 transition-transform hidden md:flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {/* Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] flex">
        <a 
          href="tel:09977777985" 
          className="flex-1 flex items-center justify-center gap-2 py-4 text-gray-800 font-semibold active:bg-gray-50 border-r border-gray-200"
        >
          <Phone size={18} className="text-gray-600" />
          Call Now
        </a>
        <a 
          href="https://wa.me/919977777985" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-whatsapp text-white font-semibold active:bg-whatsapp-hover"
        >
          <MessageCircle size={18} />
          WhatsApp Order
        </a>
      </div>
    </>
  );
}
