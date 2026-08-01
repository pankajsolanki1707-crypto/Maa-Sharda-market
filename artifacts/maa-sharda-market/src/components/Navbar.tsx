import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Menu, X, MessageCircle } from 'lucide-react';
import { Link } from 'wouter';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Books', href: '#bestsellers' },
    { name: 'Categories', href: '#categories' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="bg-primary text-white text-center py-2 px-4 text-sm font-medium z-50 relative flex items-center justify-center gap-2">
        <span className="text-xl">📚</span> Up to 60% OFF | Cash on Delivery Available | Home Delivery in Bhanwarkua
      </div>
      
      <header 
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2 z-50">
            <BookOpen className="text-primary" size={28} strokeWidth={2.5} />
            <span className="font-heading font-bold text-xl md:text-2xl text-gray-900 tracking-tight">
              Maa Sharda <span className="text-primary">Market</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-600 hover:text-primary font-medium text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/919977777985"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-whatsapp hover:bg-whatsapp-hover text-white px-5 py-2.5 rounded-full font-heading font-semibold text-sm flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 shadow-md shadow-green-500/20"
            >
              <MessageCircle size={18} />
              WhatsApp Order
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-gray-900 p-2 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-30 flex flex-col pt-32 px-6 transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col gap-6 text-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-2xl font-heading font-semibold text-gray-800 hover:text-primary transition-colors block"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex justify-center">
          <a
            href="https://wa.me/919977777985"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-whatsapp text-white px-8 py-4 rounded-full font-heading font-bold text-lg flex items-center gap-2 shadow-lg shadow-green-500/30 w-full justify-center"
          >
            <MessageCircle size={24} />
            Order on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
