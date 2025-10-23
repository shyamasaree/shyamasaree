import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Package, Truck, CheckCircle, X, Clock, Eye } from 'lucide-react';

interface Order {
  id: string;
  date: string;
  status: 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  items: {
    name: string;
    image: string;
    quantity: number;
    price: number;
  }[];
  trackingNumber?: string;
}

export default function MyOrders() {
  const [activeTab, setActiveTab] = useState<'all' | 'processing' | 'delivered'>('all');

  // Mock orders data - in real app, this would come from an API
  const orders: Order[] = [
    {
      id: 'SHYABCD123',
      date: '2025-10-15',
      status: 'delivered',
      total: 4999,
      items: [
        {
          name: 'Royal Blue Banarasi Silk Saree with Golden Zari Work',
          image: 'https://via.placeholder.com/100',
          quantity: 1,
          price: 4999
        }
      ],
      trackingNumber: 'TRK1234567890'
    },
    {
      id: 'SHYXYZ456',
      date: '2025-10-20',
      status: 'shipped',
      total: 8298,
      items: [
        {
          name: 'Emerald Green Kanjivaram Silk Saree',
          image: 'https://via.placeholder.com/100',
          quantity: 1,
          price: 6999
        },
        {
          name: 'Soft Pink Cotton Saree with Block Print',
          image: 'https://via.placeholder.com/100',
          quantity: 1,
          price: 1299
        }
      ],
      trackingNumber: 'TRK0987654321'
    },
    {
      id: 'SHYPQR789',
      date: '2025-10-22',
      status: 'processing',
      total: 3499,
      items: [
        {
          name: 'Maroon Designer Georgette Saree with Sequin Work',
          image: 'https://via.placeholder.com/100',
          quantity: 1,
          price: 3499
        }
      ]
    }
  ];

  const filteredOrders = activeTab === 'all'
    ? orders
    : orders.filter(order => {
        if (activeTab === 'processing') return order.status === 'processing' || order.status === 'shipped';
        if (activeTab === 'delivered') return order.status === 'delivered';
        return true;
      });

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'processing': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'shipped': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'delivered': return 'bg-green-100 text-green-800 border-green-300';
      case 'cancelled': return 'bg-red-100 text-red-800 border-red-300';
    }
  };

  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'processing': return <Clock size={16} />;
      case 'shipped': return <Truck size={16} />;
      case 'delivered': return <CheckCircle size={16} />;
      case 'cancelled': return <X size={16} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8DC]/30">
      <div className="bg-gradient-to-r from-[#8B0000] to-[#6B0000] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">My Orders</h1>
          <p className="text-[#FFF8DC]/80">View and track all your orders</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-8 overflow-hidden">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('all')}
              className={`flex-1 px-6 py-4 font-medium transition-colors ${
                activeTab === 'all'
                  ? 'text-[#8B0000] border-b-2 border-[#8B0000] bg-[#FFF8DC]/30'
                  : 'text-gray-600 hover:text-[#3E2723] hover:bg-gray-50'
              }`}
            >
              All Orders ({orders.length})
            </button>
            <button
              onClick={() => setActiveTab('processing')}
              className={`flex-1 px-6 py-4 font-medium transition-colors ${
                activeTab === 'processing'
                  ? 'text-[#8B0000] border-b-2 border-[#8B0000] bg-[#FFF8DC]/30'
                  : 'text-gray-600 hover:text-[#3E2723] hover:bg-gray-50'
              }`}
            >
              In Progress ({orders.filter(o => o.status === 'processing' || o.status === 'shipped').length})
            </button>
            <button
              onClick={() => setActiveTab('delivered')}
              className={`flex-1 px-6 py-4 font-medium transition-colors ${
                activeTab === 'delivered'
                  ? 'text-[#8B0000] border-b-2 border-[#8B0000] bg-[#FFF8DC]/30'
                  : 'text-gray-600 hover:text-[#3E2723] hover:bg-gray-50'
              }`}
            >
              Delivered ({orders.filter(o => o.status === 'delivered').length})
            </button>
          </div>
        </div>

        {/* Orders List */}
        {filteredOrders.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <Package className="mx-auto mb-4 text-gray-400" size={64} />
            <h2 className="text-2xl font-bold text-[#3E2723] mb-2">No Orders Found</h2>
            <p className="text-gray-600 mb-6">You haven't placed any orders yet</p>
            <Link
              to="/products"
              className="inline-block bg-[#8B0000] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#6B0000] transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Order Header */}
                <div className="bg-[#FFF8DC] p-6 border-b border-[#D4AF37]/30">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-4 flex-wrap">
                        <h3 className="font-bold text-[#3E2723]">Order #{order.id}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-1 ${getStatusColor(order.status)}`}>
                          {getStatusIcon(order.status)}
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Placed on {new Date(order.date).toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Total</p>
                      <p className="text-2xl font-bold text-[#8B0000]">₹{order.total.toLocaleString('en-IN')}</p>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className="p-6">
                  <div className="space-y-4">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg border-2 border-[#D4AF37]/30"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-[#3E2723] truncate">{item.name}</h4>
                          <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                          <p className="text-sm font-medium text-[#8B0000]">₹{item.price.toLocaleString('en-IN')}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Actions */}
                  <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-3">
                    {order.trackingNumber && (
                      <Link
                        to={`/track-order?id=${order.id}`}
                        className="flex-1 bg-[#8B0000] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#6B0000] transition-colors text-center flex items-center justify-center gap-2"
                      >
                        <Truck size={20} />
                        Track Order
                      </Link>
                    )}
                    <Link
                      to={`/order/${order.id}`}
                      className="flex-1 border-2 border-[#8B0000] text-[#8B0000] py-3 px-4 rounded-lg font-medium hover:bg-[#FFF8DC] transition-colors flex items-center justify-center gap-2"
                    >
                      <Eye size={20} />
                      View Details
                    </Link>
                    {order.status === 'delivered' && (
                      <button className="flex-1 border-2 border-[#D4AF37] text-[#3E2723] py-3 px-4 rounded-lg font-medium hover:bg-[#FFF8DC] transition-colors">
                        Buy Again
                      </button>
                    )}
                  </div>

                  {order.status === 'delivered' && (
                    <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                      <p className="text-sm text-green-800 flex items-center gap-2">
                        <CheckCircle size={16} />
                        Delivered successfully. We hope you love your sarees!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Help Section */}
        <div className="mt-12 bg-gradient-to-r from-[#8B0000] to-[#6B0000] rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Need Help with Your Order?</h3>
          <p className="text-[#FFF8DC]/80 mb-6">Our customer support team is here to assist you</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#8B0000] px-8 py-3 rounded-lg font-medium hover:bg-[#FFF8DC] transition-colors"
            >
              Contact Support
            </Link>
            <a
              href="https://wa.me/916260843969"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4AF37] text-[#3E2723] px-8 py-3 rounded-lg font-medium hover:bg-[#D4AF37]/90 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
