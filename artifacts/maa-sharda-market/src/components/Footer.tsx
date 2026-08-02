import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, Phone, MessageCircle, Clock, Navigation, Instagram } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      q: "Do you deliver?",
      a: "Yes! We offer fast home delivery in Bhanwarkua and surrounding areas. Simply select 'Home Delivery' when ordering or send us your book list on WhatsApp with your location details."
    },
    {
      q: "Can I order on WhatsApp?",
      a: "Absolutely. In fact, that is our primary ordering system! Just click the 'WhatsApp Order' button on our catalog or cards, fill in your details, and it will automatically generate a message to confirm with us."
    },
    {
      q: "Is Cash on Delivery (COD) available?",
      a: "Yes, we support Cash on Delivery (COD). You can check your books and pay the delivery executive in cash or via UPI when the books reach you."
    },
    {
      q: "Is Store Pickup available?",
      a: "Yes. You can place your order online and choose 'Store Pickup'. We will pack your books and keep them ready. You can pick them up anytime during our working hours (9:00 AM – 9:00 PM)."
    },
    {
      q: "Are competitive exam books available immediately?",
      a: "We maintain a huge stock of competitive exam books for UPSC, MPPSC, SSC, Railways, Banking, Vyapam, etc. If a book is extremely rare, we can get it custom arranged for you within 24 hours."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FAFAFA] border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-gray-900 mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 font-sans">
            Got questions? We have answers to help you order books easily.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const [isOpen, setIsOpen] = useState(false);
            return (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:border-red-100">
                <button 
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                >
                  <span className="font-heading font-bold text-gray-900 text-sm md:text-base">{faq.q}</span>
                  <ChevronDown className={`text-gray-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-[#555555] font-sans text-sm md:text-base leading-relaxed border-t border-gray-50 pt-3">
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
    <footer id="contact" className="bg-gray-950 text-white pt-16 pb-24 md:pb-12 border-t-4 border-primary font-sans relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <h3 className="font-heading font-extrabold text-2xl text-white flex items-center gap-2">
              <svg className="w-8 h-8 filter drop-shadow-sm" viewBox="0 0 24 24" fill="none">
                <path d="M12 21C12 21 7.5 17 2 17V4C7.5 4 12 8 12 8C12 8 16.5 4 22 4V17C16.5 17 12 21 12 21Z" fill="#F9A825" stroke="#B71C1C" strokeWidth="2"/>
              </svg>
              <span>Maa Sharda <span className="text-primary">Market</span></span>
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Indore's trusted bookstore since years. Serving coaching students, colleges, and readers with original prints, discounts, and rapid home delivery.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/919977777985"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded-xl font-heading font-bold text-sm transition-colors shadow-md"
              >
                <MessageCircle size={18} /> Chat Order
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 hover:bg-red-50 hover:text-primary rounded-xl border border-gray-800 transition-colors"
                aria-label="Instagram Page"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-heading font-extrabold text-lg text-white mb-6">Store Details</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                <MapPin className="text-primary shrink-0 mt-1" size={20} />
                <div>
                  <span className="font-bold text-white block">Our Address</span>
                  Payal Plaza, Bhawarkua Main Road, Bhanwarkua Square, Indore, MP
                </div>
              </li>
              <li className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Phone className="text-primary shrink-0" size={20} />
                <div>
                  <span className="font-bold text-white block">Call/Mobile</span>
                  <a href="tel:09977777985" className="hover:underline">09977777985</a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Clock className="text-primary shrink-0" size={20} />
                <div>
                  <span className="font-bold text-white block">Hours</span>
                  Monday–Sunday: 9:00 AM – 9:00 PM
                </div>
              </li>
            </ul>
          </div>

          {/* Map Embed and Directions Button */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-extrabold text-lg text-white">Find Us on Map</h4>
            <div className="rounded-2xl overflow-hidden h-40 border border-gray-800">
              <iframe 
                src="https://maps.google.com/maps?q=Maa%20Sharda%20Market%20Payal%20Plaza%20Indore&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Maa Sharda Market Location Map"
              ></iframe>
            </div>
            <a 
              href="https://maps.app.goo.gl/KSyg18eVN2WKzUTi9"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gray-900 hover:bg-gray-850 hover:text-primary text-gray-300 py-3 rounded-xl border border-gray-800 flex items-center justify-center gap-2 font-heading font-bold text-sm transition-colors"
            >
              <Navigation size={16} />
              Get Driving Directions
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-900 text-center text-gray-500 text-xs md:text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Maa Sharda Market. All rights reserved.</p>
          <p>Indore's Premier Bookstore Website</p>
        </div>
      </div>
    </footer>
  );
}
