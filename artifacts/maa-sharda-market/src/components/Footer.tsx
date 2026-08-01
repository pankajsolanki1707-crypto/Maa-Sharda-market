import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, Phone, MessageCircle, Clock } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      q: "Do you offer home delivery?",
      a: "Yes! We offer fast home delivery in and around the Bhanwarkua area. Just send us your book list on WhatsApp with your address."
    },
    {
      q: "How do I order via WhatsApp?",
      a: "Simply click the 'WhatsApp Order' button on our website, or manually message us at 09977777985 with the names or photos of the books you need."
    },
    {
      q: "Is Cash on Delivery (COD) available?",
      a: "Yes, we support Cash on Delivery. You can pay when you receive the books."
    },
    {
      q: "Can I pick up my order from the store?",
      a: "Absolutely. You can place an order on WhatsApp and tell us you'll pick it up. We'll keep it packed and ready to save your time."
    },
    {
      q: "Do you have all competitive exam books?",
      a: "We stock a massive range of books for UPSC, MPPSC, SSC, Banking, Railway, Vyapam, and more. If a specific book is out of stock, we can arrange it for you quickly."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const [isOpen, setIsOpen] = useState(false);
            return (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <button 
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-heading font-semibold text-gray-900">{faq.q}</span>
                  <ChevronDown className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-3">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8 md:pb-8 pb-24 border-t-4 border-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Info */}
          <div>
            <h3 className="font-heading font-bold text-2xl text-white mb-6 flex items-center gap-2">
              <span className="text-primary">Maa Sharda</span> Market
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-sm">
              Indore's trusted neighborhood bookstore serving students, professionals, and avid readers with quality books at affordable prices.
            </p>
            <a
              href="https://wa.me/919977777985"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white px-5 py-2.5 rounded-lg font-semibold transition-colors"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-white mb-6">Visit Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                <MapPin className="text-primary shrink-0 mt-1" size={20} />
                <a 
                  href="https://maps.google.com/?q=Payal+Plaza,+Bhawarkua+Main+Road,+Bhanwarkua+Square,+Indore" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Payal Plaza, Bhawarkua Main Road, Bhanwarkua Square, Indore MP
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Phone className="text-primary shrink-0" size={20} />
                <a href="tel:09977777985">09977777985</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Clock className="text-primary shrink-0" size={20} />
                <span>Mon–Sun: 9:00 AM – 9:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Map Embed */}
          <div className="rounded-xl overflow-hidden h-48 lg:h-full min-h-[200px] border border-gray-800">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1m2!1s0x3962fc62a8ab8cb3%3A0x6b4038a8e3230a38!2sBhawarkua%20Main%20Rd%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Maa Sharda Market Location"
            ></iframe>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Maa Sharda Market. All rights reserved.</p>
          <p>Built with ❤️ for Indore</p>
        </div>
      </div>
    </footer>
  );
}
