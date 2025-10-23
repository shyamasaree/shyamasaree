import { Link } from 'react-router-dom';
import { CheckCircle, Package, Truck } from 'lucide-react';

export default function OrderConfirmation() {
  const orderId = 'SHY' + Math.random().toString(36).substr(2, 9).toUpperCase();
  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 5);

  return (
    <div className="min-h-screen bg-[#FFF8DC]/30 flex items-center justify-center py-12">
      <div className="max-w-2xl w-full mx-4">
        <div className="bg-white rounded-lg shadow-xl p-8 text-center">
          <div className="mb-6">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="text-green-600" size={64} />
            </div>
            <h1 className="text-3xl font-bold text-[#3E2723] mb-2">Order Placed Successfully!</h1>
            <p className="text-gray-600">Thank you for shopping with Shyamasaree</p>
          </div>

          <div className="bg-[#FFF8DC] rounded-lg p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div>
                <p className="text-sm text-gray-600 mb-1">Order ID</p>
                <p className="font-bold text-[#3E2723]">#{orderId}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Estimated Delivery</p>
                <p className="font-bold text-[#3E2723]">
                  {estimatedDelivery.toLocaleDateString('en-IN', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="bg-[#8B0000] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle className="text-white" size={32} />
              </div>
              <p className="text-sm font-medium text-[#3E2723]">Order Placed</p>
            </div>

            <div className="w-12 h-1 bg-gray-300" />

            <div className="text-center">
              <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                <Package className="text-gray-500" size={32} />
              </div>
              <p className="text-sm text-gray-600">Processing</p>
            </div>

            <div className="w-12 h-1 bg-gray-300" />

            <div className="text-center">
              <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                <Truck className="text-gray-500" size={32} />
              </div>
              <p className="text-sm text-gray-600">Delivered</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-800">
              Order confirmation has been sent to your email address
            </p>
          </div>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <Link
              to={`/track-order?id=${orderId}`}
              className="flex-1 bg-[#8B0000] text-white py-3 rounded-lg font-medium hover:bg-[#6B0000] transition-colors"
            >
              Track Order
            </Link>
            <Link
              to="/products"
              className="flex-1 bg-white text-[#8B0000] py-3 rounded-lg font-medium border-2 border-[#8B0000] hover:bg-[#FFF8DC] transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
