import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import SocialProof from './components/SocialProof';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import About from './pages/About';
import Contact from './pages/Contact';
import Wishlist from './pages/Wishlist';
import FAQ from './pages/FAQ';
import ShippingPolicy from './pages/ShippingPolicy';
import Returns from './pages/Returns';
import MyOrders from './pages/MyOrders';
import TrackOrder from './pages/TrackOrder';
import PrivacyPolicy from './pages/PrivacyPolicy';
import BulkOrders from './pages/BulkOrders';
import TermsConditions from './pages/TermsConditions';
import SizeGuide from './pages/SizeGuide';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import OrderDetail from './pages/OrderDetail';
import Account from './pages/Account';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/account" element={<Account />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/orders" element={<MyOrders />} />
            <Route path="/order/:id" element={<OrderDetail />} />
            <Route path="/track-order" element={<TrackOrder />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/bulk-orders" element={<BulkOrders />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/size-guide" element={<SizeGuide />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />

        {/* WhatsApp Widget */}
        <WhatsAppWidget />

        {/* Social Proof Notifications */}
        <SocialProof />

        {/* Toast notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#FFF8DC',
              color: '#3E2723',
              border: '1px solid #D4AF37',
            },
            success: {
              iconTheme: {
                primary: '#10B981',
                secondary: '#FFF8DC',
              },
            },
            error: {
              iconTheme: {
                primary: '#EF4444',
                secondary: '#FFF8DC',
              },
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;
