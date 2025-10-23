import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showFilters, setShowFilters] = useState(false);

  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 50000,
    fabrics: [] as string[],
    occasions: [] as string[],
    colors: [] as string[],
    sortBy: 'newest'
  });

  const fabrics = ['Silk', 'Cotton', 'Georgette', 'Chiffon', 'Linen', 'Art Silk'];
  const occasions = ['Wedding', 'Party', 'Casual', 'Office', 'Festive'];
  const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Pink', 'Black', 'White', 'Multi', 'Maroon'];

  useEffect(() => {
    const fabricParam = searchParams.get('fabric');
    const occasionParam = searchParams.get('occasion');
    const searchParam = searchParams.get('search');

    if (fabricParam) {
      setFilters(prev => ({ ...prev, fabrics: [fabricParam] }));
    }
    if (occasionParam) {
      setFilters(prev => ({ ...prev, occasions: [occasionParam] }));
    }

    // Handle search query
    if (searchParam) {
      const searchQuery = searchParam.toLowerCase();
      const searchResults = products.filter(p =>
        p.name.toLowerCase().includes(searchQuery) ||
        p.fabric.toLowerCase().includes(searchQuery) ||
        p.color.toLowerCase().includes(searchQuery) ||
        p.occasion.toLowerCase().includes(searchQuery) ||
        p.description.toLowerCase().includes(searchQuery)
      );
      setFilteredProducts(searchResults);
      return;
    }
  }, [searchParams]);

  useEffect(() => {
    let filtered = [...products];

    if (filters.fabrics.length > 0) {
      filtered = filtered.filter(p => filters.fabrics.includes(p.fabric));
    }

    if (filters.occasions.length > 0) {
      filtered = filtered.filter(p => filters.occasions.includes(p.occasion));
    }

    if (filters.colors.length > 0) {
      filtered = filtered.filter(p => filters.colors.some(color => p.colors.includes(color)));
    }

    filtered = filtered.filter(p => p.price >= filters.minPrice && p.price <= filters.maxPrice);

    const filterParam = searchParams.get('filter');
    if (filterParam === 'bestseller') {
      filtered = filtered.filter(p => p.badge === 'BESTSELLER');
    } else if (filterParam === 'new') {
      filtered = filtered.filter(p => p.badge === 'NEW');
    }

    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'popular':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [filters, searchParams]);

  const toggleFilter = (category: 'fabrics' | 'occasions' | 'colors', value: string) => {
    setFilters(prev => {
      const current = prev[category];
      const updated = current.includes(value)
        ? current.filter(item => item !== value)
        : [...current, value];
      return { ...prev, [category]: updated };
    });
  };

  const clearFilters = () => {
    setFilters({
      minPrice: 0,
      maxPrice: 50000,
      fabrics: [],
      occasions: [],
      colors: [],
      sortBy: 'newest'
    });
    setSearchParams({});
    toast.success('All filters cleared');
  };

  const removeFilter = (category: 'fabrics' | 'occasions' | 'colors', value: string) => {
    toggleFilter(category, value);
    toast('Filter removed', { icon: '🗑️' });
  };

  const activeFilterCount = filters.fabrics.length + filters.occasions.length + filters.colors.length;

  return (
    <div className="min-h-screen bg-[#FFF8DC]/30">
      <div className="bg-gradient-to-r from-[#8B0000] to-[#6B0000] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">
            {searchParams.get('search') ? `Search Results for "${searchParams.get('search')}"` : 'Our Collection'}
          </h1>
          <p className="text-[#FFF8DC]/80">
            {filteredProducts.length === 0 ? 'No' : filteredProducts.length} beautiful sarees found
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border-2 border-[#D4AF37] text-[#3E2723] font-medium"
          >
            <SlidersHorizontal size={20} />
            <span>Filters</span>
            {activeFilterCount > 0 && (
              <span className="bg-[#8B0000] text-white px-2 py-0.5 rounded-full text-xs">
                {activeFilterCount}
              </span>
            )}
          </button>

          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Showing {filteredProducts.length} products</span>
            <select
              value={filters.sortBy}
              onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
              className="border-2 border-[#D4AF37] rounded-lg px-4 py-2 focus:outline-none focus:border-[#8B0000] bg-white"
            >
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="popular">Most Popular</option>
              <option value="rating">Best Rated</option>
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          <aside className={`${
            showFilters ? 'fixed inset-0 z-50 bg-white p-6 overflow-y-auto' : 'hidden'
          } lg:block lg:relative lg:w-64 flex-shrink-0`}>
            {showFilters && (
              <div className="flex items-center justify-between mb-6 lg:hidden">
                <h2 className="text-xl font-bold text-[#3E2723]">Filters</h2>
                <button onClick={() => setShowFilters(false)}>
                  <X size={24} />
                </button>
              </div>
            )}

            <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-[#3E2723]">Filters</h3>
                {activeFilterCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-[#8B0000] hover:underline"
                  >
                    Clear All
                  </button>
                )}
              </div>

              <div>
                <h4 className="font-medium text-[#3E2723] mb-3">Price Range</h4>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm text-gray-600">Min: ₹{filters.minPrice}</label>
                    <input
                      type="range"
                      min="0"
                      max="50000"
                      step="500"
                      value={filters.minPrice}
                      onChange={(e) => setFilters({ ...filters, minPrice: parseInt(e.target.value) })}
                      className="w-full accent-[#8B0000]"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Max: ₹{filters.maxPrice}</label>
                    <input
                      type="range"
                      min="0"
                      max="50000"
                      step="500"
                      value={filters.maxPrice}
                      onChange={(e) => setFilters({ ...filters, maxPrice: parseInt(e.target.value) })}
                      className="w-full accent-[#8B0000]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-[#3E2723] mb-3">Fabric Type</h4>
                <div className="space-y-2">
                  {fabrics.map(fabric => (
                    <label key={fabric} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.fabrics.includes(fabric)}
                        onChange={() => toggleFilter('fabrics', fabric)}
                        className="w-4 h-4 accent-[#8B0000]"
                      />
                      <span className="text-sm text-gray-700">{fabric}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-[#3E2723] mb-3">Occasion</h4>
                <div className="space-y-2">
                  {occasions.map(occasion => (
                    <label key={occasion} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.occasions.includes(occasion)}
                        onChange={() => toggleFilter('occasions', occasion)}
                        className="w-4 h-4 accent-[#8B0000]"
                      />
                      <span className="text-sm text-gray-700">{occasion}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-[#3E2723] mb-3">Color</h4>
                <div className="grid grid-cols-4 gap-3">
                  {colors.map(color => (
                    <button
                      key={color}
                      onClick={() => toggleFilter('colors', color)}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${
                        filters.colors.includes(color) ? 'border-[#8B0000] scale-110' : 'border-gray-300'
                      }`}
                      style={{
                        backgroundColor: color.toLowerCase() === 'multi' ? '#FF6B6B' :
                          color.toLowerCase() === 'maroon' ? '#800000' :
                          color.toLowerCase()
                      }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              {showFilters && (
                <button
                  onClick={() => setShowFilters(false)}
                  className="w-full bg-[#8B0000] text-white py-3 rounded-lg font-medium hover:bg-[#6B0000] transition-colors lg:hidden"
                >
                  Apply Filters
                </button>
              )}
            </div>
          </aside>

          <main className="flex-1">
            {/* Active Filters Chips */}
            {activeFilterCount > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 flex flex-wrap gap-2"
              >
                <span className="text-sm text-gray-600 py-2">Active Filters:</span>
                {filters.fabrics.map(fabric => (
                  <motion.button
                    key={fabric}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    onClick={() => removeFilter('fabrics', fabric)}
                    className="flex items-center space-x-2 bg-[#8B0000] text-white px-3 py-1 rounded-full text-sm hover:bg-[#6B0000] transition-colors"
                  >
                    <span>{fabric}</span>
                    <X size={14} />
                  </motion.button>
                ))}
                {filters.occasions.map(occasion => (
                  <motion.button
                    key={occasion}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    onClick={() => removeFilter('occasions', occasion)}
                    className="flex items-center space-x-2 bg-[#D4AF37] text-[#3E2723] px-3 py-1 rounded-full text-sm hover:bg-[#C49B2D] transition-colors"
                  >
                    <span>{occasion}</span>
                    <X size={14} />
                  </motion.button>
                ))}
                {filters.colors.map(color => (
                  <motion.button
                    key={color}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    onClick={() => removeFilter('colors', color)}
                    className="flex items-center space-x-2 bg-gray-600 text-white px-3 py-1 rounded-full text-sm hover:bg-gray-700 transition-colors"
                  >
                    <span>{color}</span>
                    <X size={14} />
                  </motion.button>
                ))}
              </motion.div>
            )}

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-2xl text-gray-600 mb-4">No products found</p>
                <p className="text-gray-500 mb-6">Try adjusting your filters</p>
                <button
                  onClick={clearFilters}
                  className="bg-[#8B0000] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#6B0000] transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                <AnimatePresence>
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
