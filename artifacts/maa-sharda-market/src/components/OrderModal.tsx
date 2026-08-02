import React, { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, MessageCircle, Truck, MapPin } from 'lucide-react';
import { useOrderModal } from '../hooks/use-order-modal';
import { useCart } from '../hooks/use-cart';

export function OrderModal() {
  const { isOpen, selectedBook, closeModal } = useOrderModal();
  const { cart, totalPrice, clearCart } = useCart();
  const [deliveryType, setDeliveryType] = useState<'Home Delivery' | 'Store Pickup'>('Home Delivery');
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    quantity: '1',
    address: '',
    landmark: '',
  });

  useEffect(() => {
    if (selectedBook) {
      setFormData(prev => ({ ...prev, quantity: '1' }));
    }
  }, [selectedBook]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Determine order items and total price
    let orderItemsText = '';
    let grandTotal = 0;
    
    if (selectedBook) {
      const qty = parseInt(formData.quantity || '1', 10);
      grandTotal = selectedBook.salePrice * qty;
      orderItemsText = `• ${selectedBook.title} (Qty: ${qty}) - ₹${selectedBook.salePrice * qty}`;
    } else {
      grandTotal = totalPrice;
      orderItemsText = cart.map(item => `• ${item.book.title} (Qty: ${item.quantity}) - ₹${item.book.salePrice * item.quantity}`).join('\n');
    }

    // Build the WhatsApp message payload exactly as defined in the strategy
    let message = `📚 *New Book Order – Maa Sharda Market*\n\n`;
    message += `*Customer Name:* ${formData.name}\n`;
    message += `*Phone:* ${formData.phone}\n`;
    message += `*Order Type:* ${deliveryType}\n\n`;
    message += `*Books Ordered:*\n${orderItemsText}\n\n`;

    if (deliveryType === 'Home Delivery') {
      message += `*Delivery Address:* ${formData.address}\n`;
      if (formData.landmark) {
        message += `*Nearby Landmark:* ${formData.landmark}\n`;
      }
    } else {
      message += `*Pickup Location:* Payal Plaza, Bhanwarkua Square, Indore\n`;
    }
    
    message += `\n*Total Amount:* ₹${grandTotal}\n`;
    message += `\nPlease confirm my order. 🙏`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919977777985?text=${encodedMessage}`, '_blank');
    
    // If checking out cart, clear it after submission
    if (!selectedBook) {
      clearCart();
    }
    
    closeModal();
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && closeModal()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-in fade-in" />
        <Dialog.Content className="fixed left-1/2 top-1/2 w-[92%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-2xl z-50 animate-in zoom-in-95 max-h-[90vh] overflow-y-auto border border-gray-100 focus:outline-none">
          <div className="flex items-center justify-between mb-5">
            <Dialog.Title className="text-xl font-heading font-extrabold text-gray-900">
              Confirm WhatsApp Order
            </Dialog.Title>
            <Dialog.Close className="text-gray-400 hover:text-gray-700 transition-colors p-1 rounded-full hover:bg-gray-50">
              <X size={20} />
            </Dialog.Close>
          </div>

          <form onSubmit={handleOrder} className="space-y-4">
            {/* Delivery Toggle */}
            <div className="flex p-1 bg-gray-50 rounded-xl border border-gray-100">
              <button
                type="button"
                onClick={() => setDeliveryType('Home Delivery')}
                className={`flex-grow py-2.5 text-xs md:text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  deliveryType === 'Home Delivery' ? 'bg-primary text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Truck size={16} />
                Home Delivery
              </button>
              <button
                type="button"
                onClick={() => setDeliveryType('Store Pickup')}
                className={`flex-grow py-2.5 text-xs md:text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  deliveryType === 'Store Pickup' ? 'bg-primary text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <MapPin size={16} />
                Store Pickup
              </button>
            </div>

            {/* Book Info Summary */}
            <div className="bg-red-50/50 p-4 rounded-xl border border-red-100 text-xs text-gray-800 space-y-1">
              <span className="font-heading font-bold text-primary block">Order Items Summary</span>
              {selectedBook ? (
                <div className="font-semibold text-gray-900 truncate">{selectedBook.title}</div>
              ) : (
                <div className="max-h-20 overflow-y-auto space-y-1">
                  {cart.map((item) => (
                    <div key={item.book.id} className="flex justify-between font-semibold">
                      <span className="truncate pr-4">{item.book.title}</span>
                      <span>Qty: {item.quantity}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-3 font-sans">
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Your Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white text-gray-800"
                  required
                />
              </div>

              <div className="flex gap-3">
                <div className="flex-1">
                  <label className="block text-xs font-bold text-gray-600 mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white text-gray-800"
                    required
                  />
                </div>
                {selectedBook && (
                  <div className="w-24">
                    <label className="block text-xs font-bold text-gray-600 mb-1">Quantity *</label>
                    <input
                      type="number"
                      name="quantity"
                      min="1"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white text-gray-800 font-bold"
                      required
                    />
                  </div>
                )}
              </div>

              {deliveryType === 'Home Delivery' && (
                <>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1">Delivery Address *</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Street address, hostel, or college building in Bhanwarkua"
                      rows={2}
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none bg-white text-gray-800"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1">Nearby Landmark (Optional)</label>
                    <input
                      type="text"
                      name="landmark"
                      value={formData.landmark}
                      onChange={handleChange}
                      placeholder="e.g. Near Bhanwarkua Square"
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white text-gray-800"
                    />
                  </div>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 space-y-3">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-4 rounded-xl font-heading font-extrabold text-sm transition-all shadow-md shadow-green-500/20 active:scale-[0.98] cursor-pointer"
              >
                <MessageCircle size={18} />
                Send Order on WhatsApp
              </button>
              <p className="text-center text-[10px] text-gray-400">
                Cash on Delivery only. Verification on WhatsApp is required.
              </p>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
