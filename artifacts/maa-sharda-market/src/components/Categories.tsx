import React from 'react';
import { motion } from 'framer-motion';
import { BookCard } from './BookCard';
import { books } from '../data/books';
import { Award, BookOpen, GraduationCap, Microscope, PenTool, Stethoscope } from 'lucide-react';

export function Categories() {
  const categories = [
    { name: 'Competitive Exams', icon: <Award size={32} />, color: 'bg-red-50 text-red-600 border-red-100' },
    { name: 'Novels & Fiction', icon: <BookOpen size={32} />, color: 'bg-orange-50 text-orange-600 border-orange-100' },
    { name: 'Engineering', icon: <PenTool size={32} />, color: 'bg-blue-50 text-blue-600 border-blue-100' },
    { name: 'Medical', icon: <Stethoscope size={32} />, color: 'bg-green-50 text-green-600 border-green-100' },
    { name: 'School Books', icon: <GraduationCap size={32} />, color: 'bg-purple-50 text-purple-600 border-purple-100' },
    { name: 'Stationery', icon: <Microscope size={32} />, color: 'bg-yellow-50 text-yellow-600 border-yellow-100' },
  ];

  const handleCategoryClick = () => {
    document.querySelector('#bestsellers')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="categories" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">What Are You Looking For?</h2>
          <p className="text-gray-600">Find exactly what you need from our massive collection of books across all genres and subjects.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <motion.button
              key={i}
              onClick={handleCategoryClick}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className={`flex flex-col items-center justify-center p-6 rounded-2xl border transition-all shadow-sm hover:shadow-md ${cat.color} group`}
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <span className="font-heading font-semibold text-sm text-center text-gray-800">{cat.name}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Bestsellers() {
  return (
    <section id="bestsellers" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Bestselling Books
            </h2>
            <p className="text-gray-600 text-lg">
              Most loved books by students & readers. Grab them before they run out!
            </p>
          </div>
          <a 
            href="https://wa.me/919977777985"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex mt-6 md:mt-0 items-center text-primary font-semibold hover:text-[#8E0000] transition-colors"
          >
            Can't find a book? WhatsApp us &rarr;
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {books.map((book, index) => (
            <BookCard key={book.id} book={book} index={index} />
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <a 
            href="https://wa.me/919977777985"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary font-semibold hover:text-[#8E0000] transition-colors bg-red-50 px-6 py-3 rounded-full"
          >
            Can't find a book? WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
}
