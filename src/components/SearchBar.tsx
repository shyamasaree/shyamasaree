import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';

interface SearchBarProps {
  className?: string;
  placeholder?: string;
}

export default function SearchBar({ className = 'w-full', placeholder = 'Search for sarees, fabrics, occasions...' }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<typeof products>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Popular searches
  const popularSearches = [
    'Banarasi silk saree',
    'Wedding sarees',
    'Cotton sarees under 2000',
    'Party wear sarees',
    'Red silk saree'
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Search products
  useEffect(() => {
    if (query.length > 0) {
      const searchQuery = query.toLowerCase();
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery) ||
        product.fabric.toLowerCase().includes(searchQuery) ||
        product.color.toLowerCase().includes(searchQuery) ||
        product.occasion.toLowerCase().includes(searchQuery) ||
        product.description.toLowerCase().includes(searchQuery)
      ).slice(0, 5); // Show top 5 results

      setResults(filtered);
      setIsOpen(true);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/products?search=${encodeURIComponent(query)}`);
      setIsOpen(false);
      setQuery('');
    }
  };

  const handlePopularSearch = (search: string) => {
    setQuery(search);
    navigate(`/products?search=${encodeURIComponent(search)}`);
    setIsOpen(false);
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <form onSubmit={handleSearch} className="relative w-full">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onClick={() => setIsOpen(true)}
          placeholder={placeholder}
          autoComplete="off"
          className="w-full px-4 py-2 pr-10 border-2 border-[#D4AF37] rounded-lg focus:outline-none focus:border-[#8B0000] transition-colors bg-white"
        />
        {query ? (
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setResults([]);
            }}
            className="absolute right-3 top-2.5 text-gray-400 hover:text-[#8B0000] transition-colors"
          >
            <X size={20} />
          </button>
        ) : (
          <button type="submit" className="absolute right-3 top-2.5 text-[#8B0000]">
            <Search size={20} />
          </button>
        )}
      </form>

      {/* Autocomplete Dropdown */}
      <AnimatePresence>
        {isOpen && (query.length > 0 || results.length > 0 || true) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-2xl border-2 border-[#D4AF37] max-h-96 overflow-y-auto z-[100]"
          >
            {query.length === 0 ? (
              // Show popular searches when no query
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Popular Searches</h3>
                <div className="space-y-2">
                  {popularSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handlePopularSearch(search)}
                      className="flex items-center space-x-3 w-full p-2 hover:bg-[#FFF8DC] rounded-lg transition-colors text-left"
                    >
                      <Search size={16} className="text-gray-400" />
                      <span className="text-sm text-gray-700">{search}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : results.length > 0 ? (
              // Show product results
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">
                  Products ({results.length})
                </h3>
                <div className="space-y-2">
                  {results.map((product) => (
                    <Link
                      key={product.id}
                      to={`/product/${product.id}`}
                      onClick={() => {
                        setIsOpen(false);
                        setQuery('');
                      }}
                      className="flex items-center space-x-3 p-2 hover:bg-[#FFF8DC] rounded-lg transition-colors"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {product.name}
                        </p>
                        <p className="text-sm text-[#8B0000] font-semibold">
                          ₹{product.price.toLocaleString('en-IN')}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <button
                    onClick={handleSearch}
                    className="w-full text-center text-sm text-[#8B0000] hover:text-[#6B0000] font-medium"
                  >
                    See all results for "{query}" →
                  </button>
                </div>
              </div>
            ) : (
              // No results
              <div className="p-4 text-center">
                <p className="text-sm text-gray-500">No products found for "{query}"</p>
                <p className="text-xs text-gray-400 mt-1">Try searching for fabric type, color, or occasion</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
