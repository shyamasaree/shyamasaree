import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Package, Truck, CheckCircle, MapPin, Clock } from 'lucide-react';

export default function TrackOrder() {
  const [searchParams] = useSearchParams();
  const initialOrderId = searchParams.get('id') || '';
  const [orderId, setOrderId] = useState(initialOrderId);
  const [searchedOrderId, setSearchedOrderId] = useState(initialOrderId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchedOrderId(orderId);
  };

  // Mock tracking data - in real app, this would come from API
  const trackingData = searchedOrderId ? {
    orderId: searchedOrderId,
    status: 'shipped',
    estimatedDelivery: '24 Oct 2025',
    currentLocation: 'Rewa Sorting Center',
    trackingNumber: 'TRK1234567890',
    timeline: [
      {
        status: 'Order Placed',
        date: '20 Oct 2025, 10:30 AM',
        location: 'Rewa, Madhya Pradesh',
        completed: true,
        icon: Package
      },
      {
        status: 'Order Confirmed',
        date: '20 Oct 2025, 11:15 AM',
        location: 'Shyamasaree Warehouse',
        completed: true,
        icon: CheckCircle
      },
      {
        status: 'Shipped',
        date: '21 Oct 2025, 09:00 AM',
        location: 'Rewa Sorting Center',
        completed: true,
        icon: Truck,
        current: true
      },
      {
        status: 'Out for Delivery',
        date: 'Pending',
        location: 'Local Delivery Hub',
        completed: false,
        icon: Truck
      },
      {
        status: 'Delivered',
        date: 'Estimated: 24 Oct 2025',
        location: 'Your Address',
        completed: false,
        icon: CheckCircle
      }
    ]
  } : null;

  return (
    <div className="min-h-screen bg-[#FFF8DC]/30">
      <div className="bg-gradient-to-r from-[#8B0000] to-[#6B0000] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Track Your Order</h1>
          <p className="text-xl text-[#FFF8DC]/80">
            Enter your order ID to check the delivery status
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search Form */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <form onSubmit={handleSubmit}>
            <label className="block text-sm font-medium text-[#3E2723] mb-2">
              Order ID
            </label>
            <div className="flex gap-4">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value.toUpperCase())}
                  placeholder="Enter your order ID (e.g., SHYABCD123)"
                  className="w-full px-4 py-3 pr-12 border-2 border-[#D4AF37] rounded-lg focus:outline-none focus:border-[#8B0000] transition-colors"
                  required
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
              <button
                type="submit"
                className="bg-[#8B0000] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#6B0000] transition-colors whitespace-nowrap"
              >
                Track Order
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              You can find your order ID in the confirmation email or SMS
            </p>
          </form>
        </div>

        {/* Tracking Results */}
        {trackingData ? (
          <>
            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#3E2723] mb-1">Order #{trackingData.orderId}</h2>
                  <p className="text-gray-600">Tracking Number: {trackingData.trackingNumber}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Estimated Delivery</p>
                  <p className="text-lg font-bold text-[#8B0000]">{trackingData.estimatedDelivery}</p>
                </div>
              </div>

              <div className="bg-[#FFF8DC] rounded-lg p-4 flex items-center gap-3">
                <MapPin className="text-[#8B0000]" size={24} />
                <div>
                  <p className="text-sm text-gray-600">Current Location</p>
                  <p className="font-medium text-[#3E2723]">{trackingData.currentLocation}</p>
                </div>
              </div>
            </div>

            {/* Tracking Timeline */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-[#3E2723] mb-6">Shipment Timeline</h3>

              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300" />

                <div className="space-y-8">
                  {trackingData.timeline.map((event, index) => {
                    const Icon = event.icon;
                    return (
                      <div key={index} className="relative flex items-start gap-6">
                        {/* Icon Circle */}
                        <div className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-4 border-white ${
                          event.completed
                            ? 'bg-green-500'
                            : event.current
                            ? 'bg-[#8B0000] animate-pulse'
                            : 'bg-gray-200'
                        }`}>
                          <Icon
                            size={20}
                            className={event.completed || event.current ? 'text-white' : 'text-gray-500'}
                          />
                        </div>

                        {/* Event Details */}
                        <div className={`flex-1 pb-8 ${event.current ? 'bg-[#FFF8DC]/50 -ml-3 -mt-2 p-4 rounded-lg' : ''}`}>
                          <h4 className={`font-bold mb-1 ${
                            event.current ? 'text-[#8B0000] text-lg' : 'text-[#3E2723]'
                          }`}>
                            {event.status}
                            {event.current && (
                              <span className="ml-2 text-sm font-normal text-[#8B0000]">(Current Status)</span>
                            )}
                          </h4>
                          <p className="text-sm text-gray-600 flex items-center gap-2">
                            <Clock size={14} />
                            {event.date}
                          </p>
                          <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                            <MapPin size={14} />
                            {event.location}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Help Section */}
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="font-bold text-[#3E2723] mb-2">Need Help?</h4>
              <p className="text-sm text-gray-600 mb-4">
                If you have any questions about your order or delivery, our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact"
                  className="inline-block bg-[#8B0000] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#6B0000] transition-colors text-center"
                >
                  Contact Support
                </a>
                <a
                  href="https://wa.me/916260843969"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-2 border-[#8B0000] text-[#8B0000] px-6 py-2 rounded-lg font-medium hover:bg-[#FFF8DC] transition-colors text-center"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </>
        ) : searchedOrderId ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <Package className="mx-auto mb-4 text-gray-400" size={64} />
            <h2 className="text-2xl font-bold text-[#3E2723] mb-2">Order Not Found</h2>
            <p className="text-gray-600 mb-6">
              We couldn't find an order with ID: <strong>{searchedOrderId}</strong>
            </p>
            <p className="text-sm text-gray-600 mb-6">
              Please check your order ID and try again, or contact support for assistance.
            </p>
            <button
              onClick={() => {
                setOrderId('');
                setSearchedOrderId('');
              }}
              className="bg-[#8B0000] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#6B0000] transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <Package className="mx-auto mb-4 text-gray-400" size={64} />
            <h2 className="text-2xl font-bold text-[#3E2723] mb-2">Enter Your Order ID</h2>
            <p className="text-gray-600">
              Type your order ID above and click "Track Order" to see the delivery status
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
