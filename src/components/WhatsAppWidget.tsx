import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '916260843969';
  const message = 'Hello! I have a question about your sarees.';

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <div className="mb-4 bg-white rounded-lg shadow-2xl p-4 w-80 animate-fadeIn">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#8B0000] to-[#D4AF37] flex items-center justify-center">
                  <MessageCircle className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-[#3E2723]">Shyamasaree</h3>
                  <p className="text-xs text-green-600 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            </div>

            <p className="text-sm text-gray-600 mb-4">
              Hi there! 👋 <br />
              How can we help you today?
            </p>

            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-[#25D366] text-white py-3 rounded-lg font-medium hover:bg-[#20BA5A] transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Start Chat on WhatsApp
            </button>

            <p className="text-xs text-gray-500 mt-3 text-center">
              Typically replies within minutes
            </p>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-[#25D366] text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group relative"
        >
          {isOpen ? (
            <X size={28} />
          ) : (
            <>
              <MessageCircle size={28} className="animate-bounce" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
            </>
          )}
        </button>
      </div>
    </>
  );
}
