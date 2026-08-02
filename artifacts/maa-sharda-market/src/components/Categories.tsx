import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookCard } from './BookCard';
import { books, Book } from '../data/books';
import { Search, SlidersHorizontal, Award, BookOpen, PenTool, Stethoscope, GraduationCap, Highlighter } from 'lucide-react';

export function Categories() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { name: 'All', icon: <SlidersHorizontal size={20} />, color: 'bg-gray-100 text-gray-700 border-gray-200' },
    { name: 'Competitive Exams', icon: <Award size={20} />, color: 'bg-red-50 text-primary border-red-100' },
    { name: 'Novels', icon: <BookOpen size={20} />, color: 'bg-orange-50 text-orange-600 border-orange-100' },
    { name: 'Engineering', icon: <PenTool size={20} />, color: 'bg-blue-50 text-accent border-blue-100' },
    { name: 'Medical', icon: <Stethoscope size={20} />, color: 'bg-green-50 text-green-600 border-green-100' },
    { name: 'School', icon: <GraduationCap size={20} />, color: 'bg-purple-50 text-purple-600 border-purple-100' },
    { name: 'Stationery', icon: <Highlighter size={20} />, color: 'bg-yellow-50 text-yellow-600 border-yellow-100' },
  ];

  // Filter book catalogue list
  const filteredBooks = books.filter((book) => {
    const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (book.author && book.author.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="bestsellers" className="py-16 md:py-24 bg-[#FAFAFA] border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-gray-900 mb-4 tracking-tight">
            Premium Book Catalogue
          </h2>
          <p className="text-[#555555] font-sans text-base md:text-lg">
            Search or filter from our bestselling database. Order instantly via WhatsApp.
          </p>
        </div>

        {/* Search Bar & Filters */}
        <div className="mb-12 space-y-6 max-w-4xl mx-auto">
          {/* Search Box */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400 pointer-events-none">
              <Search size={22} />
            </span>
            <input
              type="text"
              placeholder="Search books by title, author, or exam name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-2xl border border-gray-200 bg-white text-gray-800 placeholder-gray-400 font-sans shadow-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-base transition-all"
            />
          </div>

          {/* Categories Horizontal Slider */}
          <div className="flex items-center gap-3 overflow-x-auto pb-3 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full border font-heading font-bold text-xs md:text-sm whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'bg-primary text-white border-primary shadow-md scale-105' 
                      : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200 shadow-sm'
                  }`}
                >
                  {cat.icon}
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Book Grid */}
        <AnimatePresence mode="popLayout">
          {filteredBooks.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm max-w-lg mx-auto"
            >
              <p className="text-gray-400 text-lg mb-3">No matching books found</p>
              <p className="text-sm text-gray-500 mb-6">Can't find a specific book? Send us a message on WhatsApp and we will order it for you!</p>
              <a 
                href="https://wa.me/919977777985"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-heading font-bold text-sm"
              >
                Request Book on WhatsApp
              </a>
            </motion.div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
            >
              {filteredBooks.map((book, index) => (
                <BookCard key={book.id} book={book} index={index} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

// Bestsellers component is kept as dummy since the functionality is merged into the Premium Book Catalogue above.
export function Bestsellers() {
  return null;
}
