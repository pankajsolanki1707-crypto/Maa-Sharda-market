import React from 'react';
import { motion } from 'framer-motion';
import { Book } from '../data/books';
import { useOrderModal } from '../hooks/use-order-modal';

interface BookCardProps {
  book: Book;
  index: number;
}

export function BookCard({ book, index }: BookCardProps) {
  const { openModal } = useOrderModal();

  // Generate placeholder colors based on genre
  const getGenreColor = (genre: Book['genre']) => {
    switch (genre) {
      case 'Competitive': return 'bg-[#B71C1C] text-white';
      case 'Self-Help': return 'bg-[#E65100] text-white';
      case 'Biography': return 'bg-[#1565C0] text-white';
      case 'Psychology': return 'bg-[#37474F] text-white';
      default: return 'bg-[#455A64] text-white';
    }
  };

  const discountPercentage = Math.round(((book.mrp - book.salePrice) / book.mrp) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col h-full"
    >
      {/* Cover Image Area */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
        {book.image ? (
          <img 
            src={book.image} 
            alt={book.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className={`w-full h-full flex flex-col justify-center items-center p-6 text-center ${getGenreColor(book.genre)} transition-transform duration-500 group-hover:scale-105`}>
            <div className="border border-white/20 p-4 rounded w-full h-full flex flex-col justify-center">
              <h3 className="font-heading font-bold text-lg leading-tight mb-2">{book.title}</h3>
              {book.author && <p className="text-sm opacity-80">{book.author}</p>}
            </div>
          </div>
        )}
        
        {/* Badges */}
        <div className="absolute top-3 right-3 bg-secondary text-secondary-foreground text-xs font-bold px-2 py-1 rounded shadow-sm">
          {discountPercentage}% OFF
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="text-xs font-medium text-accent mb-1">{book.genre}</div>
        <h3 className="font-heading font-semibold text-gray-900 leading-snug line-clamp-2 mb-1 group-hover:text-primary transition-colors">
          {book.title}
        </h3>
        {book.author && (
          <p className="text-xs text-gray-500 mb-2">{book.author}</p>
        )}
        
        <div className="mt-auto pt-3">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-lg font-bold text-gray-900">₹{book.salePrice}</span>
            <span className="text-sm text-gray-400 line-through">₹{book.mrp}</span>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col gap-2 relative">
            <button 
              onClick={() => openModal(book)}
              className="w-full bg-primary hover:bg-[#8E0000] text-white py-2 rounded-lg font-heading text-sm font-semibold transition-colors flex items-center justify-center gap-1"
            >
              Buy Now
            </button>
            <button 
              onClick={() => openModal(book)}
              className="w-full bg-whatsapp hover:bg-whatsapp-hover text-white py-2 rounded-lg font-heading text-sm font-semibold transition-all absolute top-0 left-0 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 flex items-center justify-center gap-1"
            >
              WhatsApp Order
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
