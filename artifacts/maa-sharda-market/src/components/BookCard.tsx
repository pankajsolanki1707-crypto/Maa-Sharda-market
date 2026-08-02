import React from 'react';
import { motion } from 'framer-motion';
import { Book } from '../data/books';
import { useOrderModal } from '../hooks/use-order-modal';
import { useCart } from '../hooks/use-cart';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface BookCardProps {
  book: Book;
  index: number;
}

export function BookCard({ book, index }: BookCardProps) {
  const { openModal } = useOrderModal();
  const { addToCart } = useCart();
  const { toast } = useToast();

  const discountPercentage = Math.round(((book.mrp - book.salePrice) / book.mrp) * 100);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(book);
    toast({
      title: "Added to Cart",
      description: `${book.title} has been added to your order list.`,
      duration: 2000,
    });
  };

  const handleBuyNow = (e: React.MouseEvent) => {
    e.stopPropagation();
    openModal(book);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 5) * 0.05 }}
      whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 transition-all duration-300 flex flex-col h-full relative"
    >
      {/* Cover Image Area */}
      <div className="relative aspect-[3/4.2] w-full overflow-hidden bg-gradient-to-br from-red-50 to-orange-50 shrink-0">
        
        {/* Book cover spine styling for realistic premium look */}
        <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-black/10 z-10"></div>
        <div className="absolute left-2.5 top-0 bottom-0 w-[1px] bg-white/20 z-10"></div>

        {book.image ? (
          <img 
            src={book.image} 
            alt={book.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col justify-between p-4 text-center select-none relative">
            {/* Top Logo Watermark */}
            <div className="flex justify-center opacity-30 mt-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M12 21C12 21 7.5 17 2 17V4C7.5 4 12 8 12 8C12 8 16.5 4 22 4V17C16.5 17 12 21 12 21Z" fill="#F9A825" stroke="#B71C1C" strokeWidth="2"/>
              </svg>
            </div>
            
            {/* Title & Author container */}
            <div className="my-auto px-2">
              <h4 className="font-heading font-extrabold text-gray-900 text-sm md:text-base leading-tight mb-2 tracking-tight group-hover:text-primary transition-colors line-clamp-3">
                {book.title}
              </h4>
              <p className="text-[10px] md:text-xs font-semibold text-gray-500 tracking-wide truncate">
                {book.author}
              </p>
            </div>

            {/* Bottom Brand */}
            <div className="text-[7px] font-heading font-bold tracking-widest text-[#B71C1C]/40 uppercase mt-auto">
              Maa Sharda Market
            </div>
          </div>
        )}
        
        {/* Discount Badge */}
        <div className="absolute top-3 right-3 bg-secondary text-gray-900 text-[10px] md:text-xs font-extrabold px-2 py-1 rounded-md shadow-sm z-20">
          {discountPercentage}% OFF
        </div>

        {/* Availability Badge */}
        {book.availability && (
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-gray-800 text-[9px] font-bold px-2 py-0.5 rounded-md shadow-sm z-20">
            {book.availability}
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="text-[10px] font-bold text-accent tracking-widest uppercase mb-1">{book.category}</div>
        <h3 className="font-heading font-bold text-gray-900 text-sm md:text-base leading-snug line-clamp-1 mb-1 group-hover:text-primary transition-colors">
          {book.title}
        </h3>
        <p className="text-xs text-gray-500 mb-2 truncate">By {book.author}</p>
        
        <p className="text-xs text-[#555555] line-clamp-2 mb-4 flex-grow font-sans">
          {book.description}
        </p>
        
        <div className="mt-auto pt-3 border-t border-gray-50">
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-lg md:text-xl font-extrabold text-gray-900">₹{book.salePrice}</span>
            <span className="text-xs md:text-sm text-gray-400 line-through">₹{book.mrp}</span>
          </div>
          
          {/* Dual Action Buttons */}
          <div className="grid grid-cols-2 gap-2 relative overflow-hidden">
            <button 
              onClick={handleAddToCart}
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2.5 rounded-xl font-heading text-xs font-bold transition-all flex items-center justify-center gap-1 active:scale-95 cursor-pointer"
            >
              <ShoppingBag size={14} />
              Add
            </button>
            <button 
              onClick={handleBuyNow}
              className="bg-primary hover:bg-[#8E0000] text-white py-2.5 rounded-xl font-heading text-xs font-bold transition-all flex items-center justify-center gap-1 active:scale-95 cursor-pointer shadow-sm"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
