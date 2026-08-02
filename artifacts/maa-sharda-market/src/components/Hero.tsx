import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, BookOpen, Star, Users, MapPin, Award } from 'lucide-react';
const storeExterior = '/images/store-exterior.png';

export function Hero() {
  const handleBrowse = () => {
    const element = document.querySelector('#bestsellers');
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gray-950 pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden border-b border-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={storeExterior} 
          alt="Maa Sharda Market storefront on Bhawarkua Main Road" 
          className="w-full h-full object-cover opacity-35 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F9A825] font-heading font-bold text-xs md:text-sm mb-6">
              <Star size={16} fill="currentColor" />
              <span>Rated 4.9/5 by 414+ Indore Students</span>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading font-extrabold text-white leading-[1.1] mb-6 tracking-tight"
          >
            Indore's Trusted Bookstore for <span className="text-primary drop-shadow-md">Students & Readers</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed font-sans"
          >
            School Books • College Books • Competitive Exam Books • Novels • Stationery — Everything Under One Roof.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button 
              onClick={handleBrowse}
              className="bg-primary hover:bg-[#8E0000] text-white px-8 py-4 rounded-xl font-heading font-extrabold text-base transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <BookOpen size={20} />
              Browse Books
            </button>
            <a 
              href="https://wa.me/919977777985"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] text-white px-8 py-4 rounded-xl font-heading font-extrabold text-base transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-500/20 hover:scale-105 active:scale-95"
            >
              <MessageCircle size={20} />
              WhatsApp Order
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function TrustBar() {
  const stats = [
    { icon: <Star className="text-[#F9A825]" size={26} />, value: "4.9/5", label: "414+ Reviews" },
    { icon: <Users className="text-[#1565C0]" size={26} />, value: "Since Years", label: "Trusted Local Store" },
    { icon: <BookOpen className="text-primary" size={26} />, value: "Thousands", label: "Of Original Books" },
    { icon: <MapPin className="text-[#25D366]" size={26} />, value: "Bhanwarkua", label: "Fast Home Delivery" },
  ];

  return (
    <div className="bg-white border-b border-gray-100 py-8 relative z-20 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex flex-col items-center justify-center text-center p-3"
            >
              <div className="mb-2 bg-gray-50 p-3 rounded-full">{stat.icon}</div>
              <div className="text-xl md:text-2xl font-heading font-extrabold text-gray-900">{stat.value}</div>
              <div className="text-xs md:text-sm font-semibold text-gray-500 mt-0.5">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
