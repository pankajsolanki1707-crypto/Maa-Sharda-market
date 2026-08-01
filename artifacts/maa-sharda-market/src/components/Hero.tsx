import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, BookOpen, Star, Users, MapPin } from 'lucide-react';
import storeExterior from '@assets/Screenshot_2026-08-01_161705_1785581664691.png';

export function Hero() {
  const handleBrowse = () => {
    document.querySelector('#bestsellers')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative bg-gray-900 pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={storeExterior} 
          alt="Maa Sharda Market Storefront at night" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-secondary font-medium text-sm mb-6">
              <Star size={16} fill="currentColor" />
              <span>Rated 4.9/5 by 414+ Readers</span>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading font-bold text-white leading-[1.1] mb-6"
          >
            Indore's Trusted Bookstore for <span className="text-primary drop-shadow-md">Students & Readers</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed font-light"
          >
            School Books • College Books • Competitive Exam Books • Novels • Stationery — Everything Under One Roof at Bhanwarkua.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button 
              onClick={handleBrowse}
              className="bg-primary hover:bg-[#8E0000] text-white px-8 py-4 rounded-xl font-heading font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
            >
              <BookOpen size={20} />
              Browse Books
            </button>
            <a 
              href="https://wa.me/919977777985"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-whatsapp hover:bg-whatsapp-hover text-white px-8 py-4 rounded-xl font-heading font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-500/20"
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
    { icon: <Star className="text-secondary" size={24} />, value: "4.9/5", label: "Rating" },
    { icon: <Users className="text-accent" size={24} />, value: "414+", label: "Reviews" },
    { icon: <BookOpen className="text-primary" size={24} />, value: "10,000+", label: "Books" },
    { icon: <MapPin className="text-whatsapp" size={24} />, value: "Fast", label: "Home Delivery" },
  ];

  return (
    <div className="bg-white border-b border-gray-100 py-8 relative z-20 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-gray-100">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex flex-col items-center justify-center text-center ${i % 2 !== 0 ? 'border-l border-gray-100 md:border-none' : 'border-none'}`}
            >
              <div className="mb-2 bg-gray-50 p-3 rounded-full">{stat.icon}</div>
              <div className="text-2xl font-heading font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm font-medium text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
