import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Wishlist() {
  const wishlist = useCartStore((state) => state.wishlist);
  const wishlistProducts = products.filter(p => wishlist.includes(p.id));

  if (wishlistProducts.length === 0) {
    return (
      <div className="min-h-screen bg-[#FFF8DC]/30 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-[#FFF8DC] w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-[#D4AF37]">
            <Heart size={64} className="text-[#8B0000]" />
          </div>
          <h2 className="text-3xl font-bold text-[#3E2723] mb-4">Your wishlist is empty</h2>
          <p className="text-gray-600 mb-8">Save your favorite sarees to view them later</p>
          <Link
            to="/products"
            className="inline-block bg-[#8B0000] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#6B0000] transition-colors"
          >
            Explore Sarees
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF8DC]/30">
      <div className="bg-gradient-to-r from-[#8B0000] to-[#6B0000] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">My Wishlist</h1>
          <p className="text-[#FFF8DC]/80">{wishlistProducts.length} {wishlistProducts.length === 1 ? 'item' : 'items'} saved</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {wishlistProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
