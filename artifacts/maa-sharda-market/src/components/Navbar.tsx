import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle, ShoppingBag, Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../hooks/use-cart';
import { useOrderModal } from '../hooks/use-order-modal';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();
  const { openModal } = useOrderModal();

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

  const handleCartCheckout = () => {
    // Open checkout modal with current cart items
    openModal(null);
  };

  // Horizontal Logo Component with Hindi identity, open book icon, golden pages, red typography
  const Logo = () => (
    <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-3 z-50">
      {/* Golden Book Icon */}
      <svg className="w-9 h-9 shrink-0 filter drop-shadow-sm" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21C12 21 7.5 17 2 17V4C7.5 4 12 8 12 8C12 8 16.5 4 22 4V17C16.5 17 12 21 12 21Z" fill="#F9A825" stroke="#B71C1C" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M12 8V21" stroke="#B71C1C" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      <div className="flex flex-col leading-tight">
        <span className="font-heading font-extrabold text-xl md:text-2xl text-primary tracking-tight">
          Maa Sharda <span className="text-gray-900">Market</span>
        </span>
        <span className="text-[10px] font-heading font-semibold text-secondary tracking-widest uppercase">
          मा शारदा मार्केट • इंदौर
        </span>
      </div>
    </a>
  );

  return (
    <>
      <div className="bg-primary text-white text-center py-2 px-4 text-xs md:text-sm font-medium z-50 relative flex items-center justify-center gap-2">
        <span className="text-base md:text-xl">📚</span> Up to 60% OFF | Cash on Delivery Available | Home Delivery in Bhanwarkua
      </div>
      
      <header 
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5' : 'bg-white py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-600 hover:text-primary font-heading font-semibold text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Cart Icon in Navbar */}
            <Sheet>
              <SheetTrigger asChild>
                <button className="relative p-2.5 text-gray-700 hover:text-primary transition-colors hover:scale-105 active:scale-95 bg-gray-50 hover:bg-red-50 rounded-full border border-gray-100">
                  <ShoppingBag size={20} />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                      {totalItems}
                    </span>
                  )}
                </button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md flex flex-col h-full bg-white">
                <SheetHeader className="border-b border-gray-100 pb-4">
                  <SheetTitle className="flex items-center gap-2 font-heading font-bold text-gray-900">
                    <ShoppingBag className="text-primary" /> Your Cart ({totalItems} items)
                  </SheetTitle>
                </SheetHeader>
                
                {/* Cart Items List */}
                <div className="flex-grow overflow-y-auto py-4 space-y-4">
                  {cart.length === 0 ? (
                    <div className="text-center py-12 flex flex-col items-center justify-center text-gray-400">
                      <ShoppingBag size={48} className="stroke-[1.5] mb-3 text-gray-300" />
                      <p className="font-heading font-medium">Your cart is empty</p>
                      <p className="text-xs text-gray-400 mt-1">Add bestselling books to get started</p>
                    </div>
                  ) : (
                    cart.map((item) => (
                      <div key={item.book.id} className="flex gap-4 p-3 bg-gray-50 rounded-xl border border-gray-100">
                        {/* Fallback book design inside cart */}
                        <div className="w-16 h-20 bg-primary text-white text-[8px] p-1 font-bold rounded shadow-sm shrink-0 flex flex-col justify-between border border-primary-foreground/10">
                          <span className="line-clamp-3 leading-tight">{item.book.title}</span>
                          <span className="text-[6px] opacity-75">{item.book.author}</span>
                        </div>
                        <div className="flex-grow min-w-0">
                          <h4 className="font-heading font-bold text-sm text-gray-900 truncate">{item.book.title}</h4>
                          <p className="text-xs text-gray-500 truncate mb-2">{item.book.author}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-primary">₹{item.book.salePrice}</span>
                            <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-200 p-1">
                              <button 
                                onClick={() => updateQuantity(item.book.id, item.quantity - 1)}
                                className="p-1 hover:bg-gray-100 rounded text-gray-500 transition-colors"
                              >
                                <Minus size={12} />
                              </button>
                              <span className="text-xs font-bold text-gray-800 w-4 text-center">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.book.id, item.quantity + 1)}
                                className="p-1 hover:bg-gray-100 rounded text-gray-500 transition-colors"
                              >
                                <Plus size={12} />
                              </button>
                            </div>
                          </div>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.book.id)}
                          className="text-gray-400 hover:text-primary p-1"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))
                  )}
                </div>

                {/* Cart Total & Checkout */}
                {cart.length > 0 && (
                  <div className="border-t border-gray-100 pt-4 pb-6 space-y-4">
                    <div className="flex items-center justify-between text-base font-bold text-gray-900">
                      <span>Total Amount:</span>
                      <span className="text-primary text-lg">₹{totalPrice}</span>
                    </div>
                    <button
                      onClick={handleCartCheckout}
                      className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3 rounded-xl font-heading font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-green-500/20 transition-transform active:scale-[0.98]"
                    >
                      <MessageCircle size={18} />
                      Order All Items via WhatsApp
                    </button>
                    <p className="text-center text-[10px] text-gray-400">
                      Home Delivery or Pickup available • Pay Cash on Delivery
                    </p>
                  </div>
                )}
              </SheetContent>
            </Sheet>

            <a
              href="https://wa.me/919977777985"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded-full font-heading font-bold text-sm flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 shadow-md shadow-green-500/20"
            >
              <MessageCircle size={18} />
              WhatsApp Order
            </a>
          </nav>

          {/* Mobile Right Controls */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Cart Trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <button className="relative p-2 text-gray-700 hover:text-primary">
                  <ShoppingBag size={22} />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-white text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center shadow-md">
                      {totalItems}
                    </span>
                  )}
                </button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md flex flex-col h-full bg-white">
                <SheetHeader className="border-b border-gray-100 pb-4">
                  <SheetTitle className="flex items-center gap-2 font-heading font-bold text-gray-900">
                    <ShoppingBag className="text-primary" /> Your Cart ({totalItems})
                  </SheetTitle>
                </SheetHeader>
                <div className="flex-grow overflow-y-auto py-4 space-y-4">
                  {cart.length === 0 ? (
                    <div className="text-center py-12 flex flex-col items-center justify-center text-gray-400">
                      <ShoppingBag size={48} className="stroke-[1.5] mb-3 text-gray-300" />
                      <p className="font-heading font-medium">Your cart is empty</p>
                    </div>
                  ) : (
                    cart.map((item) => (
                      <div key={item.book.id} className="flex gap-4 p-3 bg-gray-50 rounded-xl border border-gray-100">
                        <div className="w-12 h-16 bg-primary text-white text-[8px] p-1 font-bold rounded shadow-sm shrink-0 flex flex-col justify-between">
                          <span className="line-clamp-2 leading-tight">{item.book.title}</span>
                          <span className="text-[6px] opacity-75">{item.book.author}</span>
                        </div>
                        <div className="flex-grow min-w-0">
                          <h4 className="font-heading font-bold text-sm text-gray-900 truncate">{item.book.title}</h4>
                          <div className="flex items-center justify-between mt-1">
                            <span className="text-sm font-bold text-primary">₹{item.book.salePrice}</span>
                            <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-200 p-1">
                              <button onClick={() => updateQuantity(item.book.id, item.quantity - 1)} className="p-0.5"><Minus size={10} /></button>
                              <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                              <button onClick={() => updateQuantity(item.book.id, item.quantity + 1)} className="p-0.5"><Plus size={10} /></button>
                            </div>
                          </div>
                        </div>
                        <button onClick={() => removeFromCart(item.book.id)} className="text-gray-400 p-1"><Trash2 size={16} /></button>
                      </div>
                    ))
                  )}
                </div>
                {cart.length > 0 && (
                  <div className="border-t border-gray-100 pt-4 pb-6 space-y-4">
                    <div className="flex items-center justify-between text-base font-bold text-gray-900">
                      <span>Total Amount:</span>
                      <span className="text-primary text-lg">₹{totalPrice}</span>
                    </div>
                    <button onClick={handleCartCheckout} className="w-full bg-[#25D366] text-white py-3 rounded-xl font-heading font-bold text-sm flex items-center justify-center gap-2">
                      <MessageCircle size={18} /> Order All Items via WhatsApp
                    </button>
                  </div>
                )}
              </SheetContent>
            </Sheet>

            {/* Mobile Menu Toggle */}
            <button 
              className="text-gray-900 p-2 z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-30 flex flex-col pt-24 px-6 lg:hidden"
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
                className="bg-[#25D366] text-white px-8 py-4 rounded-full font-heading font-bold text-lg flex items-center gap-2 shadow-lg shadow-green-500/30 w-full justify-center"
              >
                <MessageCircle size={24} />
                Order on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
