import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Book } from '../data/books';

interface OrderModalContextType {
  isOpen: boolean;
  selectedBook: Book | null;
  openModal: (book: Book | null) => void;
  closeModal: () => void;
}

const OrderModalContext = createContext<OrderModalContextType | undefined>(undefined);

export function OrderModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const openModal = (book: Book | null) => {
    setSelectedBook(book);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedBook(null);
  };

  return (
    <OrderModalContext.Provider value={{ isOpen, selectedBook, openModal, closeModal }}>
      {children}
    </OrderModalContext.Provider>
  );
}

export function useOrderModal() {
  const context = useContext(OrderModalContext);
  if (context === undefined) {
    throw new Error('useOrderModal must be used within an OrderModalProvider');
  }
  return context;
}
