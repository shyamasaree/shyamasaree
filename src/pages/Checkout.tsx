import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, LogIn } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import toast from 'react-hot-toast';

export default function Checkout() {
  const navigate = useNavigate();
  const items = useCartStore((state) => state.items);
  const cartTotal = useCartStore((state) => state.getCartTotal());
  const clearCart = useCartStore((state) => state.clearCart);

  // Check if user is logged in (in real app, check auth state from context/store)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check authentication status
    // For now, we'll simulate checking localStorage
    const userLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (!userLoggedIn) {
      toast.error('Please login to continue checkout');
      // Redirect to login with return URL
      navigate('/login?redirect=/checkout');
    } else {
      setIsLoggedIn(true);
    }
  }, [navigate]);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    pincode: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    landmark: '',
    addressType: 'home',
    paymentMethod: 'upi'
  });

  const deliveryCharges = cartTotal >= 999 ? 0 : 99;
  const finalTotal = cartTotal + deliveryCharges;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    navigate('/order-confirmation');
  };

  if (items.length === 0 && step < 3) {
    navigate('/cart');
    return null;
  }

  // Don't render checkout if not logged in
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#FFF8DC]/30 flex items-center justify-center">
        <div className="text-center">
          <LogIn className="mx-auto text-[#8B0000] mb-4" size={48} />
          <h2 className="text-2xl font-bold text-[#3E2723] mb-2">Authentication Required</h2>
          <p className="text-gray-600">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF8DC]/30">
      <div className="bg-gradient-to-r from-[#8B0000] to-[#6B0000] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Checkout</h1>
          <p className="text-[#FFF8DC]/80">Complete your order</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div className={`flex items-center ${step >= 1 ? 'text-[#8B0000]' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 ${
                step > 1 ? 'bg-[#8B0000] border-[#8B0000] text-white' :
                step === 1 ? 'border-[#8B0000]' : 'border-gray-400'
              }`}>
                {step > 1 ? <Check size={20} /> : '1'}
              </div>
              <span className="ml-2 font-medium hidden sm:inline">Address</span>
            </div>
            <div className={`w-16 h-0.5 ${step >= 2 ? 'bg-[#8B0000]' : 'bg-gray-400'}`} />
            <div className={`flex items-center ${step >= 2 ? 'text-[#8B0000]' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 ${
                step > 2 ? 'bg-[#8B0000] border-[#8B0000] text-white' :
                step === 2 ? 'border-[#8B0000]' : 'border-gray-400'
              }`}>
                {step > 2 ? <Check size={20} /> : '2'}
              </div>
              <span className="ml-2 font-medium hidden sm:inline">Payment</span>
            </div>
            <div className={`w-16 h-0.5 ${step >= 3 ? 'bg-[#8B0000]' : 'bg-gray-400'}`} />
            <div className={`flex items-center ${step >= 3 ? 'text-[#8B0000]' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 ${
                step === 3 ? 'bg-[#8B0000] border-[#8B0000] text-white' : 'border-gray-400'
              }`}>
                {step === 3 ? <Check size={20} /> : '3'}
              </div>
              <span className="ml-2 font-medium hidden sm:inline">Confirm</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {step === 1 && (
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-[#3E2723] mb-6">Delivery Address</h2>
                <form onSubmit={handleAddressSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#3E2723] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border-2 border-[#D4AF37] rounded-lg focus:outline-none focus:border-[#8B0000]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#3E2723] mb-2">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        required
                        pattern="[0-9]{10}"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border-2 border-[#D4AF37] rounded-lg focus:outline-none focus:border-[#8B0000]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#3E2723] mb-2">
                        Pincode *
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        required
                        pattern="[0-9]{6}"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border-2 border-[#D4AF37] rounded-lg focus:outline-none focus:border-[#8B0000]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#3E2723] mb-2">
                        City/District *
                      </label>
                      <input
                        type="text"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border-2 border-[#D4AF37] rounded-lg focus:outline-none focus:border-[#8B0000]"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-[#3E2723] mb-2">
                        Address Line 1 *
                      </label>
                      <input
                        type="text"
                        name="address1"
                        required
                        value={formData.address1}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border-2 border-[#D4AF37] rounded-lg focus:outline-none focus:border-[#8B0000]"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-[#3E2723] mb-2">
                        Address Line 2
                      </label>
                      <input
                        type="text"
                        name="address2"
                        value={formData.address2}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border-2 border-[#D4AF37] rounded-lg focus:outline-none focus:border-[#8B0000]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#3E2723] mb-2">
                        State *
                      </label>
                      <select
                        name="state"
                        required
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border-2 border-[#D4AF37] rounded-lg focus:outline-none focus:border-[#8B0000]"
                      >
                        <option value="">Select State</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="West Bengal">West Bengal</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#3E2723] mb-2">
                        Landmark
                      </label>
                      <input
                        type="text"
                        name="landmark"
                        value={formData.landmark}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border-2 border-[#D4AF37] rounded-lg focus:outline-none focus:border-[#8B0000]"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-[#3E2723] mb-2">
                        Address Type
                      </label>
                      <div className="flex space-x-4">
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="radio"
                            name="addressType"
                            value="home"
                            checked={formData.addressType === 'home'}
                            onChange={handleInputChange}
                            className="w-4 h-4 accent-[#8B0000]"
                          />
                          <span>Home</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="radio"
                            name="addressType"
                            value="work"
                            checked={formData.addressType === 'work'}
                            onChange={handleInputChange}
                            className="w-4 h-4 accent-[#8B0000]"
                          />
                          <span>Work</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-8 w-full bg-[#8B0000] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#6B0000] transition-colors"
                  >
                    Continue to Payment
                  </button>
                </form>
              </div>
            )}

            {step === 2 && (
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-[#3E2723] mb-6">Payment Method</h2>
                <form onSubmit={handlePaymentSubmit}>
                  <div className="space-y-4">
                    <label className="flex items-center space-x-3 p-4 border-2 border-[#D4AF37] rounded-lg cursor-pointer hover:bg-[#FFF8DC] transition-colors">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="upi"
                        checked={formData.paymentMethod === 'upi'}
                        onChange={handleInputChange}
                        className="w-5 h-5 accent-[#8B0000]"
                      />
                      <span className="font-medium">UPI (GPay, PhonePe, Paytm)</span>
                    </label>

                    <label className="flex items-center space-x-3 p-4 border-2 border-[#D4AF37] rounded-lg cursor-pointer hover:bg-[#FFF8DC] transition-colors">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === 'card'}
                        onChange={handleInputChange}
                        className="w-5 h-5 accent-[#8B0000]"
                      />
                      <span className="font-medium">Credit/Debit Card</span>
                    </label>

                    <label className="flex items-center space-x-3 p-4 border-2 border-[#D4AF37] rounded-lg cursor-pointer hover:bg-[#FFF8DC] transition-colors">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="netbanking"
                        checked={formData.paymentMethod === 'netbanking'}
                        onChange={handleInputChange}
                        className="w-5 h-5 accent-[#8B0000]"
                      />
                      <span className="font-medium">Net Banking</span>
                    </label>

                    <label className="flex items-center space-x-3 p-4 border-2 border-[#D4AF37] rounded-lg cursor-pointer hover:bg-[#FFF8DC] transition-colors">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        checked={formData.paymentMethod === 'cod'}
                        onChange={handleInputChange}
                        className="w-5 h-5 accent-[#8B0000]"
                      />
                      <span className="font-medium">Cash on Delivery (+₹50)</span>
                    </label>
                  </div>

                  <div className="flex space-x-4 mt-8">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 bg-white text-[#8B0000] py-4 rounded-lg font-bold text-lg border-2 border-[#8B0000] hover:bg-[#FFF8DC] transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-[#8B0000] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#6B0000] transition-colors"
                    >
                      Place Order
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-bold text-[#3E2723] mb-6">Order Summary</h3>

              <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                {items.map((item) => (
                  <div key={`${item.id}-${item.selectedColor}`} className="flex items-center space-x-3 pb-3 border-b border-gray-200">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-[#3E2723] line-clamp-1">{item.name}</p>
                      <p className="text-xs text-gray-600">{item.selectedColor} × {item.quantity}</p>
                      <p className="text-sm font-bold text-[#8B0000]">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Delivery</span>
                  <span className={deliveryCharges === 0 ? 'text-green-600 font-medium' : ''}>
                    {deliveryCharges === 0 ? 'FREE' : `₹${deliveryCharges}`}
                  </span>
                </div>
              </div>

              <div className="flex justify-between text-xl font-bold text-[#3E2723]">
                <span>Total</span>
                <span>₹{finalTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
