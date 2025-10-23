import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

export default function Cart() {
  const items = useCartStore((state) => state.items);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const cartTotal = useCartStore((state) => state.getCartTotal());
  const cartDiscount = useCartStore((state) => state.getCartDiscount());

  const deliveryCharges = cartTotal >= 999 ? 0 : 99;
  const couponDiscount = 0;
  const finalTotal = cartTotal - couponDiscount + deliveryCharges;
  const totalSavings = cartDiscount + couponDiscount;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#FFF8DC]/30 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-[#FFF8DC] w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-[#D4AF37]">
            <ShoppingBag size={64} className="text-[#8B0000]" />
          </div>
          <h2 className="text-3xl font-bold text-[#3E2723] mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Add some beautiful sarees to get started</p>
          <Link
            to="/products"
            className="inline-block bg-[#8B0000] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#6B0000] transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF8DC]/30">
      <div className="bg-gradient-to-r from-[#8B0000] to-[#6B0000] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Shopping Cart</h1>
          <p className="text-[#FFF8DC]/80">{items.length} {items.length === 1 ? 'item' : 'items'} in your cart</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.selectedColor}`}
                  className="flex flex-col sm:flex-row items-start sm:items-center p-6 border-b border-gray-200 last:border-b-0"
                >
                  <Link to={`/product/${item.id}`} className="flex-shrink-0 mb-4 sm:mb-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full sm:w-32 h-40 sm:h-32 object-cover rounded-lg"
                    />
                  </Link>

                  <div className="flex-1 sm:ml-6 w-full">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <Link
                          to={`/product/${item.id}`}
                          className="text-[#3E2723] font-medium hover:text-[#8B0000] transition-colors block mb-1"
                        >
                          {item.name}
                        </Link>
                        <p className="text-sm text-gray-600">Color: {item.selectedColor}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.selectedColor)}
                        className="text-red-600 hover:text-red-800 transition-colors p-2"
                        title="Remove from cart"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-xl font-bold text-[#8B0000]">
                          ₹{item.price.toLocaleString('en-IN')}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          ₹{item.mrp.toLocaleString('en-IN')}
                        </span>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="flex items-center border-2 border-[#D4AF37] rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, item.selectedColor, item.quantity - 1)}
                            className="p-2 hover:bg-[#FFF8DC] transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="px-4 font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.selectedColor, item.quantity + 1)}
                            className="p-2 hover:bg-[#FFF8DC] transition-colors"
                            disabled={item.quantity >= item.stock}
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        <div className="text-right">
                          <p className="font-bold text-[#3E2723]">
                            ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Link
                to="/products"
                className="text-[#8B0000] hover:text-[#6B0000] font-medium transition-colors"
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-[#3E2723] mb-6">Price Details</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Price ({items.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span>₹{(cartTotal + cartDiscount).toLocaleString('en-IN')}</span>
                </div>

                <div className="flex justify-between text-green-600 font-medium">
                  <span>Discount</span>
                  <span>-₹{cartDiscount.toLocaleString('en-IN')}</span>
                </div>

                <div className="flex justify-between text-gray-700">
                  <span>Delivery Charges</span>
                  <span className={deliveryCharges === 0 ? 'text-green-600 font-medium' : ''}>
                    {deliveryCharges === 0 ? (
                      <>
                        <span className="line-through text-gray-400 mr-2">₹99</span>
                        FREE
                      </>
                    ) : (
                      `₹${deliveryCharges}`
                    )}
                  </span>
                </div>

                {cartTotal < 999 && (
                  <div className="bg-[#FFF8DC] p-3 rounded-lg border border-[#D4AF37]">
                    <p className="text-sm text-[#8B0000] font-medium">
                      Add ₹{(999 - cartTotal).toLocaleString('en-IN')} more to get FREE delivery
                    </p>
                  </div>
                )}

                <div className="border-t-2 border-gray-200 pt-4">
                  <div className="flex justify-between text-xl font-bold text-[#3E2723]">
                    <span>Total Amount</span>
                    <span>₹{finalTotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                  <p className="text-green-700 font-medium text-center">
                    You saved ₹{totalSavings.toLocaleString('en-IN')} on this order
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-medium text-[#3E2723] mb-3">Apply Coupon</h3>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    className="flex-1 px-4 py-2 border-2 border-[#D4AF37] rounded-lg focus:outline-none focus:border-[#8B0000]"
                  />
                  <button className="bg-[#8B0000] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#6B0000] transition-colors">
                    Apply
                  </button>
                </div>

                <div className="mt-4">
                  <details className="cursor-pointer">
                    <summary className="text-sm text-[#8B0000] font-medium">Available Coupons</summary>
                    <div className="mt-3 space-y-2">
                      <div className="bg-[#FFF8DC] p-3 rounded border border-[#D4AF37]">
                        <p className="font-bold text-sm text-[#3E2723]">FIRST10</p>
                        <p className="text-xs text-gray-600">10% off on first order</p>
                      </div>
                      <div className="bg-[#FFF8DC] p-3 rounded border border-[#D4AF37]">
                        <p className="font-bold text-sm text-[#3E2723]">WELCOME500</p>
                        <p className="text-xs text-gray-600">₹500 off on orders above ₹5000</p>
                      </div>
                    </div>
                  </details>
                </div>
              </div>

              <Link
                to="/checkout"
                className="block w-full bg-[#8B0000] text-white py-4 rounded-lg font-bold text-lg text-center hover:bg-[#6B0000] transition-colors"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
