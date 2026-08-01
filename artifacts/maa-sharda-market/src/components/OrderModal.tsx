import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { useOrderModal } from '../hooks/use-order-modal';

export function OrderModal() {
  const { isOpen, selectedBook, closeModal } = useOrderModal();
  const [deliveryType, setDeliveryType] = useState<'Home Delivery' | 'Store Pickup'>('Home Delivery');
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    quantity: '1',
    address: '',
    landmark: '',
    bookName: '', // dynamically set
  });

  // Keep local form data in sync with selected book
  React.useEffect(() => {
    if (selectedBook) {
      setFormData(prev => ({ ...prev, bookName: selectedBook.title }));
    } else {
      setFormData(prev => ({ ...prev, bookName: '' }));
    }
  }, [selectedBook]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    
    let price = 0;
    if (selectedBook) {
      price = selectedBook.salePrice * parseInt(formData.quantity || '1', 10);
    }

    let message = `📚 New Book Order – Maa Sharda Market\n\n`;
    message += `Customer Name: ${formData.name}\n`;
    message += `Phone: ${formData.phone}\n`;
    message += `Order Type: ${deliveryType}\n\n`;
    message += `Book: ${formData.bookName}\n`;
    message += `Quantity: ${formData.quantity}\n`;

    if (deliveryType === 'Home Delivery') {
      message += `Address: ${formData.address}\n`;
      if (formData.landmark) {
        message += `Landmark: ${formData.landmark}\n`;
      }
    }
    
    if (price > 0) {
      message += `\nTotal: ₹${price}\n`;
    }

    message += `\nPlease confirm my order. 🙏`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919977777985?text=${encodedMessage}`, '_blank');
    closeModal();
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && closeModal()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-in fade-in" />
        <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6 shadow-2xl z-50 animate-in zoom-in-95 max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-5">
            <Dialog.Title className="text-xl font-heading font-bold text-gray-900">
              Complete Your Order
            </Dialog.Title>
            <Dialog.Close className="text-gray-400 hover:text-gray-700 transition-colors">
              <X size={20} />
            </Dialog.Close>
          </div>

          <form onSubmit={handleOrder} className="space-y-4">
            {/* Delivery Toggle */}
            <div className="flex p-1 bg-gray-100 rounded-lg">
              <button
                type="button"
                onClick={() => setDeliveryType('Home Delivery')}
                className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${
                  deliveryType === 'Home Delivery' ? 'bg-white shadow-sm text-primary' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Home Delivery
              </button>
              <button
                type="button"
                onClick={() => setDeliveryType('Store Pickup')}
                className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${
                  deliveryType === 'Store Pickup' ? 'bg-white shadow-sm text-primary' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Store Pickup
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Book Name</label>
                <input
                  type="text"
                  name="bookName"
                  value={formData.bookName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  required
                />
              </div>

              <div className="flex gap-3">
                <div className="flex-1">
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    required
                  />
                </div>
                <div className="w-24">
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Qty *</label>
                  <input
                    type="number"
                    name="quantity"
                    min="1"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">WhatsApp Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  required
                />
              </div>

              {deliveryType === 'Home Delivery' && (
                <>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Delivery Address *</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Nearby Landmark (Optional)</label>
                    <input
                      type="text"
                      name="landmark"
                      value={formData.landmark}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white py-3 px-4 rounded-xl font-heading font-semibold transition-all shadow-md shadow-green-500/20 active:scale-[0.98]"
              >
                Send Order on WhatsApp
              </button>
              <p className="text-center text-xs text-gray-400 mt-3">
                Cash on Delivery only. No online payment required.
              </p>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
