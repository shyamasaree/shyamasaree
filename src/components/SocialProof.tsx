import { useEffect, useState } from 'react';
import { ShoppingBag, MapPin, X } from 'lucide-react';

interface Notification {
  id: number;
  name: string;
  location: string;
  product: string;
  time: string;
}

const notifications: Notification[] = [
  { id: 1, name: 'Priya S.', location: 'Mumbai', product: 'Banarasi Silk Saree', time: '2 minutes ago' },
  { id: 2, name: 'Anjali M.', location: 'Delhi', product: 'Kanjivaram Saree', time: '5 minutes ago' },
  { id: 3, name: 'Lakshmi I.', location: 'Bangalore', product: 'Designer Georgette Saree', time: '8 minutes ago' },
  { id: 4, name: 'Sneha P.', location: 'Pune', product: 'Cotton Saree', time: '12 minutes ago' },
  { id: 5, name: 'Divya R.', location: 'Chennai', product: 'Wedding Saree', time: '15 minutes ago' },
  { id: 6, name: 'Kavita S.', location: 'Hyderabad', product: 'Silk Saree', time: '18 minutes ago' },
  { id: 7, name: 'Meera K.', location: 'Kolkata', product: 'Tant Saree', time: '22 minutes ago' },
  { id: 8, name: 'Radha N.', location: 'Jaipur', product: 'Bandhani Saree', time: '28 minutes ago' },
  { id: 9, name: 'Shalini B.', location: 'Lucknow', product: 'Chiffon Saree', time: '32 minutes ago' },
  { id: 10, name: 'Ananya D.', location: 'Ahmedabad', product: 'Patola Saree', time: '38 minutes ago' },
  { id: 11, name: 'Isha T.', location: 'Surat', product: 'Embroidered Saree', time: '42 minutes ago' },
  { id: 12, name: 'Riya G.', location: 'Indore', product: 'Linen Saree', time: '48 minutes ago' },
];

export default function SocialProof() {
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let currentIndex = 0;

    const showNotification = () => {
      setCurrentNotification(notifications[currentIndex]);
      setIsVisible(true);

      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);

      // Move to next notification
      currentIndex = (currentIndex + 1) % notifications.length;
    };

    // Show first notification after 3 seconds
    const initialTimeout = setTimeout(showNotification, 3000);

    // Show subsequent notifications every 15 seconds
    const interval = setInterval(showNotification, 15000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!currentNotification || !isVisible) return null;

  return (
    <div className="fixed bottom-24 left-6 z-40 animate-slideInLeft">
      <div className="bg-white rounded-lg shadow-2xl p-4 max-w-sm border-l-4 border-[#8B0000]">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#8B0000] to-[#D4AF37] flex items-center justify-center flex-shrink-0">
            <ShoppingBag className="text-white" size={20} />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="font-bold text-[#3E2723] text-sm">
                  {currentNotification.name}
                </p>
                <p className="text-xs text-gray-600 flex items-center gap-1 mt-1">
                  <MapPin size={12} />
                  {currentNotification.location}
                </p>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={16} />
              </button>
            </div>

            <p className="text-sm text-gray-700 mt-2">
              Just purchased <span className="font-medium text-[#8B0000]">{currentNotification.product}</span>
            </p>

            <p className="text-xs text-gray-500 mt-1">
              {currentNotification.time}
            </p>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-gray-100">
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-600">✓ Verified Purchase</span>
            <span className="text-green-600 font-medium">In Stock</span>
          </div>
        </div>
      </div>
    </div>
  );
}
