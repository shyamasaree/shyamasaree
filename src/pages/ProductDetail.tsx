import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, ShoppingBag, Truck, ChevronRight, Minus, Plus, ZoomIn, X, Play } from 'lucide-react';
import { products } from '../data/products';
import { useCartStore } from '../store/cartStore';
import ProductCard from '../components/ProductCard';
import toast from 'react-hot-toast';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product?.color || '');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [isZoomed, setIsZoomed] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const addToCart = useCartStore((state) => state.addToCart);
  const toggleWishlist = useCartStore((state) => state.toggleWishlist);
  const isInWishlist = useCartStore((state) => state.isInWishlist(product?.id || ''));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#3E2723] mb-4">Product not found</h2>
          <Link to="/products" className="text-[#8B0000] hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);
  const similarProducts = products.filter(p => p.fabric === product.fabric && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedColor);
    }
    toast.success(`Added ${quantity} item(s) to cart!`, { icon: '🛍️' });
  };

  // Sample product video URL (you can replace with actual product videos)
  const productVideo = `https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&rel=0`;

  return (
    <div className="min-h-screen bg-[#FFF8DC]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-[#8B0000]">Home</Link>
          <ChevronRight size={16} />
          <Link to="/products" className="hover:text-[#8B0000]">Products</Link>
          <ChevronRight size={16} />
          <span className="text-[#3E2723]">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-4 relative group">
              <div className="relative">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-[600px] object-cover cursor-zoom-in"
                  onClick={() => setIsZoomed(true)}
                />
                {product.badge && (
                  <div className={`absolute top-4 left-4 px-4 py-2 rounded-full text-sm font-bold ${
                    product.badge === 'BESTSELLER' ? 'bg-[#D4AF37] text-[#3E2723]' :
                    product.badge === 'NEW' ? 'bg-[#8B0000] text-white' :
                    'bg-[#FF6B6B] text-white'
                  }`}>
                    {product.badge}
                  </div>
                )}
                <button
                  onClick={() => setIsZoomed(true)}
                  className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-[#3E2723] px-4 py-2 rounded-lg font-medium shadow-lg hover:bg-white transition-all flex items-center space-x-2 opacity-0 group-hover:opacity-100"
                >
                  <ZoomIn size={20} />
                  <span>View Full Size</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`bg-white rounded-lg overflow-hidden shadow-md border-2 transition-all hover:border-[#D4AF37] ${
                    selectedImage === index ? 'border-[#8B0000]' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-20 object-cover" />
                </button>
              ))}
              <button
                onClick={() => setShowVideo(true)}
                className="bg-gradient-to-br from-[#8B0000] to-[#6B0000] rounded-lg overflow-hidden shadow-md border-2 border-transparent transition-all hover:border-[#D4AF37] flex items-center justify-center relative group"
              >
                <Play size={24} className="text-white fill-white" />
                <span className="absolute bottom-1 left-0 right-0 text-[10px] text-white font-medium text-center">VIDEO</span>
              </button>
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-[#3E2723] mb-4">{product.name}</h1>

            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < Math.floor(product.rating) ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="text-[#3E2723] font-medium">{product.rating}</span>
              <span className="text-gray-600">({product.reviews} reviews)</span>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md mb-6">
              <div className="flex items-baseline space-x-4 mb-2">
                <span className="text-4xl font-bold text-[#8B0000]">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                <span className="text-xl text-gray-500 line-through">
                  ₹{product.mrp.toLocaleString('en-IN')}
                </span>
                <span className="bg-[#8B0000] text-white px-3 py-1 rounded-full text-sm font-bold">
                  {discount}% OFF
                </span>
              </div>
              <p className="text-green-600 font-medium mb-1">
                Save ₹{(product.mrp - product.price).toLocaleString('en-IN')}
              </p>
              <p className="text-sm text-gray-600">Inclusive of all taxes</p>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-[#3E2723] mb-3">Select Color</h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-lg border-2 transition-all ${
                      selectedColor === color
                        ? 'border-[#8B0000] bg-[#FFF8DC]'
                        : 'border-gray-300 hover:border-[#D4AF37]'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-2">Selected: <span className="font-medium">{selectedColor}</span></p>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-[#3E2723] mb-3">Quantity</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border-2 border-[#D4AF37] rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-[#FFF8DC] transition-colors"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="px-6 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="p-3 hover:bg-[#FFF8DC] transition-colors"
                  >
                    <Plus size={20} />
                  </button>
                </div>
                <span className="text-sm text-gray-600">
                  {product.stock < 10 ? `Only ${product.stock} left in stock` : 'In Stock'}
                </span>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <button
                onClick={handleAddToCart}
                className="w-full bg-[#8B0000] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#6B0000] transition-colors flex items-center justify-center space-x-2"
              >
                <ShoppingBag size={24} />
                <span>Add to Cart</span>
              </button>

              <button
                onClick={() => toggleWishlist(product.id)}
                className={`w-full py-4 rounded-lg font-bold text-lg border-2 transition-all flex items-center justify-center space-x-2 ${
                  isInWishlist
                    ? 'bg-[#FFF8DC] border-[#8B0000] text-[#8B0000]'
                    : 'bg-white border-[#D4AF37] text-[#3E2723] hover:bg-[#FFF8DC]'
                }`}
              >
                <Heart size={24} className={isInWishlist ? 'fill-current' : ''} />
                <span>{isInWishlist ? 'In Wishlist' : 'Add to Wishlist'}</span>
              </button>
            </div>

            <div className="bg-[#FFF8DC] rounded-lg p-4 border-2 border-[#D4AF37]">
              <div className="flex items-center space-x-3">
                <Truck className="text-[#8B0000]" size={24} />
                <div>
                  <p className="font-bold text-[#3E2723]">Free Delivery</p>
                  <p className="text-sm text-gray-600">On orders above ₹999</p>
                  <p className="text-sm text-[#8B0000] font-medium mt-1">
                    Estimated delivery: 3-7 business days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <div className="border-b-2 border-gray-200 mb-6">
            <div className="flex space-x-8">
              {['description', 'specifications', 'care', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 font-medium capitalize transition-colors ${
                    activeTab === tab
                      ? 'text-[#8B0000] border-b-2 border-[#8B0000]'
                      : 'text-gray-600 hover:text-[#3E2723]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div>
            {activeTab === 'description' && (
              <div>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="border-b border-gray-200 pb-2">
                    <span className="font-medium text-[#3E2723] capitalize">{key}: </span>
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'care' && (
              <div className="space-y-3">
                <p className="text-gray-700">• Dry clean recommended</p>
                <p className="text-gray-700">• Store in cool, dry place</p>
                <p className="text-gray-700">• Avoid direct sunlight</p>
                <p className="text-gray-700">• Iron on low heat if needed</p>
                <p className="text-gray-700">• Keep away from perfumes and deodorants</p>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center space-x-8 mb-8">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-[#8B0000] mb-2">{product.rating}</div>
                    <div className="flex items-center justify-center mb-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(product.rating) ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">{product.reviews} reviews</p>
                  </div>
                  <div className="flex-1">
                    {[5, 4, 3, 2, 1].map((stars) => (
                      <div key={stars} className="flex items-center space-x-3 mb-2">
                        <span className="text-sm w-12">{stars} star</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-[#D4AF37] h-2 rounded-full"
                            style={{ width: `${(stars / 5) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B0000] to-[#D4AF37]" />
                      <div>
                        <p className="font-medium text-[#3E2723]">Priya S.</p>
                        <div className="flex items-center">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} size={14} className="fill-[#D4AF37] text-[#D4AF37]" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      Beautiful saree! The quality is excellent and the color is exactly as shown. Very happy with my purchase.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {similarProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-[#3E2723] mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {similarProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Image Zoom Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setIsZoomed(false)}
        >
          <button
            onClick={() => setIsZoomed(false)}
            className="absolute top-4 right-4 bg-white text-[#3E2723] p-3 rounded-full hover:bg-[#FFF8DC] transition-colors z-10"
          >
            <X size={24} />
          </button>
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(index);
                  }}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-[#D4AF37]' : 'border-white/30'
                  }`}
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <button
            onClick={() => setShowVideo(false)}
            className="absolute top-4 right-4 bg-white text-[#3E2723] p-3 rounded-full hover:bg-[#FFF8DC] transition-colors z-10 shadow-lg"
          >
            <X size={24} />
          </button>
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="bg-white rounded-lg p-6 shadow-2xl">
              <h3 className="text-2xl font-bold text-[#3E2723] mb-4">{product.name} - Product Video</h3>
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={productVideo}
                  title="Product Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Watch how this beautiful saree drapes and flows. See the intricate details and craftsmanship up close.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
