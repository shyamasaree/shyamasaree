import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, ShoppingBag, Menu, X, User, ChevronDown } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import SearchBar from './SearchBar';
import toast from 'react-hot-toast';
import { LogoFull } from './Logo';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const cartCount = useCartStore((state) => state.getCartCount());
  const wishlist = useCartStore((state) => state.wishlist);
  const cartTotal = useCartStore((state) => state.getCartTotal());
  const navigate = useNavigate();

  // Check login status on mount and listen for storage changes
  useEffect(() => {
    const checkAuth = () => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    };

    checkAuth();

    // Listen for storage changes (when user logs in/out in another tab or after navigation)
    window.addEventListener('storage', checkAuth);
    window.addEventListener('login', checkAuth);

    return () => {
      window.removeEventListener('storage', checkAuth);
      window.removeEventListener('login', checkAuth);
    };
  }, []);

  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');

    // Update state immediately
    setIsLoggedIn(false);

    // Trigger event for other components
    window.dispatchEvent(new Event('logout'));

    toast.success('Logged out successfully!');

    // Navigate to home and reload to ensure clean state
    navigate('/');
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-[#8B0000] to-[#6B0000] text-[#FFF8DC] text-center py-2 px-4 text-sm">
        <p className="animate-pulse">Free Shipping on Orders Above ₹999 | Use Code: WELCOME10 for 10% Off</p>
      </div>

      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button
              className="lg:hidden text-[#8B0000] p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <Link to="/" className="flex items-center">
              <LogoFull size="sm" />
            </Link>

            <div className="hidden lg:flex flex-1 max-w-xl mx-8">
              <SearchBar className="w-full" />
            </div>

            <div className="flex items-center space-x-6">
              <Link to="/wishlist" className="hidden sm:flex items-center space-x-1 text-[#3E2723] hover:text-[#8B0000] transition-colors relative">
                <Heart size={24} />
                {wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#8B0000] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              <Link to="/cart" className="flex items-center space-x-2 text-[#3E2723] hover:text-[#8B0000] transition-colors relative">
                <ShoppingBag size={24} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#8B0000] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
                <span className="hidden md:block text-sm font-medium">
                  ₹{cartTotal.toLocaleString('en-IN')}
                </span>
              </Link>

              <div className="hidden sm:block relative group">
                <Link to="/account" className="flex items-center space-x-1 text-[#3E2723] hover:text-[#8B0000] transition-colors relative">
                  <User size={24} />
                  {isLoggedIn && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></span>
                  )}
                </Link>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {isLoggedIn ? (
                    <>
                      <Link to="/account" className="block px-4 py-2 text-[#3E2723] hover:bg-[#FFF8DC] transition-colors">
                        My Account
                      </Link>
                      <Link to="/orders" className="block px-4 py-2 text-[#3E2723] hover:bg-[#FFF8DC] transition-colors">
                        My Orders
                      </Link>
                      <Link to="/wishlist" className="block px-4 py-2 text-[#3E2723] hover:bg-[#FFF8DC] transition-colors">
                        Wishlist
                      </Link>
                      <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-[#8B0000] hover:bg-[#FFF8DC] transition-colors border-t border-gray-200 font-medium">
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to="/login" className="block px-4 py-2 text-[#3E2723] hover:bg-[#FFF8DC] transition-colors">
                        Login
                      </Link>
                      <Link to="/signup" className="block px-4 py-2 text-[#8B0000] hover:bg-[#FFF8DC] transition-colors font-medium">
                        Sign Up
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:hidden pb-4">
            <SearchBar className="w-full" placeholder="Search sarees..." />
          </div>

          <nav className="hidden lg:flex items-center justify-center space-x-8 pb-4 border-t border-gray-200 pt-4">
            <Link to="/" className="text-[#3E2723] hover:text-[#8B0000] font-medium transition-colors">
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setShopDropdownOpen(true)}
              onMouseLeave={() => setShopDropdownOpen(false)}
            >
              <button className="flex items-center space-x-1 text-[#3E2723] hover:text-[#8B0000] font-medium transition-colors">
                <span>Shop</span>
                <ChevronDown size={16} />
              </button>

              {shopDropdownOpen && (
                <div className="absolute left-0 mt-2 w-screen max-w-4xl bg-white rounded-lg shadow-xl p-8 grid grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-[#8B0000] font-bold mb-3 text-sm uppercase">By Fabric</h3>
                    <Link to="/products?fabric=Silk" className="block py-2 text-[#3E2723] hover:text-[#8B0000] transition-colors">
                      Silk Sarees
                    </Link>
                    <Link to="/products?fabric=Cotton" className="block py-2 text-[#3E2723] hover:text-[#8B0000] transition-colors">
                      Cotton Sarees
                    </Link>
                    <Link to="/products?fabric=Georgette" className="block py-2 text-[#3E2723] hover:text-[#8B0000] transition-colors">
                      Georgette Sarees
                    </Link>
                    <Link to="/products?fabric=Linen" className="block py-2 text-[#3E2723] hover:text-[#8B0000] transition-colors">
                      Linen Sarees
                    </Link>
                    <Link to="/products" className="block py-2 text-[#3E2723] hover:text-[#8B0000] transition-colors font-medium">
                      View All →
                    </Link>
                  </div>

                  <div>
                    <h3 className="text-[#8B0000] font-bold mb-3 text-sm uppercase">By Occasion</h3>
                    <Link to="/products?occasion=Wedding" className="block py-2 text-[#3E2723] hover:text-[#8B0000] transition-colors">
                      Wedding Collection
                    </Link>
                    <Link to="/products?occasion=Party" className="block py-2 text-[#3E2723] hover:text-[#8B0000] transition-colors">
                      Party Wear
                    </Link>
                    <Link to="/products?occasion=Casual" className="block py-2 text-[#3E2723] hover:text-[#8B0000] transition-colors">
                      Daily Wear
                    </Link>
                    <Link to="/products?occasion=Office" className="block py-2 text-[#3E2723] hover:text-[#8B0000] transition-colors">
                      Office Wear
                    </Link>
                  </div>

                  <div>
                    <h3 className="text-[#8B0000] font-bold mb-3 text-sm uppercase">Featured</h3>
                    <Link to="/products?filter=new" className="block py-2 text-[#3E2723] hover:text-[#8B0000] transition-colors">
                      New Arrivals
                    </Link>
                    <Link to="/products?filter=bestseller" className="block py-2 text-[#3E2723] hover:text-[#8B0000] transition-colors">
                      Bestsellers
                    </Link>
                    <Link to="/products?maxPrice=999" className="block py-2 text-[#3E2723] hover:text-[#8B0000] transition-colors">
                      Under ₹999
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/products?filter=new" className="text-[#3E2723] hover:text-[#8B0000] font-medium transition-colors">
              New Arrivals
            </Link>
            <Link to="/blog" className="text-[#3E2723] hover:text-[#8B0000] font-medium transition-colors">
              Blog
            </Link>
            <Link to="/about" className="text-[#3E2723] hover:text-[#8B0000] font-medium transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-[#3E2723] hover:text-[#8B0000] font-medium transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-center p-4 border-b relative">
              <LogoFull size="sm" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-6">
              <Link
                to="/"
                className="block py-4 text-center text-[#3E2723] hover:text-[#8B0000] font-medium border-b text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="block py-4 text-center text-[#3E2723] hover:text-[#8B0000] font-medium border-b text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop All
              </Link>
              <Link
                to="/products?filter=new"
                className="block py-4 text-center text-[#3E2723] hover:text-[#8B0000] font-medium border-b text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                New Arrivals
              </Link>
              <Link
                to="/blog"
                className="block py-4 text-center text-[#3E2723] hover:text-[#8B0000] font-medium border-b text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/about"
                className="block py-4 text-center text-[#3E2723] hover:text-[#8B0000] font-medium border-b text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="block py-4 text-center text-[#3E2723] hover:text-[#8B0000] font-medium border-b text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/wishlist"
                className="block py-4 text-center text-[#3E2723] hover:text-[#8B0000] font-medium border-b text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Wishlist
              </Link>
              <Link
                to="/account"
                className="block py-4 text-center text-[#3E2723] hover:text-[#8B0000] font-medium text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                My Account
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
