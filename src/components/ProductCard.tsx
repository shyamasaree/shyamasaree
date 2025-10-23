import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { Product } from '../data/products';
import { useCartStore } from '../store/cartStore';
import { handleImageError } from '../utils/imageUtils';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addToCart = useCartStore((state) => state.addToCart);
  const toggleWishlist = useCartStore((state) => state.toggleWishlist);
  const isInWishlist = useCartStore((state) => state.isInWishlist(product.id));

  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, product.color);
    toast.success('Added to cart!', {
      icon: '🛍️',
    });
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleWishlist(product.id);
    if (isInWishlist) {
      toast('Removed from wishlist', {
        icon: '💔',
      });
    } else {
      toast.success('Added to wishlist!', {
        icon: '❤️',
      });
    }
  };

  return (
    <Link to={`/product/${product.id}`} className="group">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ y: -8, transition: { duration: 0.2 } }}
        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
      >
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            onError={handleImageError}
            className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {product.badge && (
            <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold ${
              product.badge === 'BESTSELLER' ? 'bg-[#D4AF37] text-[#3E2723]' :
              product.badge === 'NEW' ? 'bg-[#8B0000] text-white' :
              'bg-[#FF6B6B] text-white'
            }`}>
              {product.badge}
            </div>
          )}

          <div className={`absolute top-3 right-3 px-2 py-1 bg-[#8B0000] text-white text-xs font-bold rounded`}>
            {discount}% OFF
          </div>

          <button
            onClick={handleToggleWishlist}
            className="absolute top-12 right-3 p-2 bg-white rounded-full shadow-md hover:bg-[#FFF8DC] transition-colors"
          >
            <Heart
              size={18}
              className={isInWishlist ? 'fill-[#8B0000] text-[#8B0000]' : 'text-[#3E2723]'}
            />
          </button>

          <button
            onClick={handleAddToCart}
            className="absolute bottom-0 left-0 right-0 bg-[#8B0000] text-white py-3 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2"
          >
            <ShoppingBag size={18} />
            <span>Add to Cart</span>
          </button>
        </div>

        <div className="p-4">
          <h3 className="text-[#3E2723] font-medium text-sm mb-2 line-clamp-2 h-10">
            {product.name}
          </h3>

          <div className="flex items-center space-x-2 mb-2">
            {product.colors.slice(0, 4).map((color, index) => (
              <div
                key={index}
                className="w-5 h-5 rounded-full border-2 border-gray-300"
                style={{
                  backgroundColor: color.toLowerCase() === 'multi' ? 'linear-gradient(45deg, red, blue, green)' :
                    color.toLowerCase() === 'maroon' ? '#800000' :
                    color.toLowerCase() === 'wine' ? '#722F37' :
                    color.toLowerCase()
                }}
                title={color}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-xs text-gray-500">+{product.colors.length - 4}</span>
            )}
          </div>

          <div className="flex items-center space-x-1 mb-3">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < Math.floor(product.rating) ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-gray-300'}
                />
              ))}
            </div>
            <span className="text-xs text-gray-600">({product.reviews})</span>
          </div>

          <div className="flex items-baseline space-x-2">
            <span className="text-xl font-bold text-[#8B0000]">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            <span className="text-sm text-gray-500 line-through">
              ₹{product.mrp.toLocaleString('en-IN')}
            </span>
          </div>

          <div className="mt-2 text-xs text-green-600 font-medium">
            Save ₹{(product.mrp - product.price).toLocaleString('en-IN')}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
