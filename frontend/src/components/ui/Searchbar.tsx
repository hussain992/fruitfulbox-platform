// components/SearchBar.js
"use client";
import { useState } from 'react';
// import { useRouter } from 'next/navigation';
import { Search, X } from 'lucide-react';
// import { filter } from 'framer-motion/client';
import ProductList from './ProductList';
import { Product } from '@/types';
// import { Product } from '@/types';

interface SearchBarProps {
  isMobile?: boolean;
}

export default function SearchBar({ isMobile = false }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  // const router = useRouter();
  // const [products, setProducts] = useState<Product[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      fetch(`${apiBaseUrl}/search?q=${encodeURIComponent(query)}`)
        .then((res) => {
          if (!res.ok) {
            // setIsInvalidCategory(true);
            // setIsLoading(false);
            return null;
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          if (data && Array.isArray(data)) {
            // setProducts(data);
            const result = data.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));
            console.log("Filtered data:", result);
            setFilteredProducts(result);
            // router.push(`/search?q=${encodeURIComponent(query)}`);
          } else {
            // setIsInvalidCategory(true);
          }
          // setIsLoading(false);
        })
      // router.push(`/search?q=${encodeURIComponent(query)}`);
      // setQuery('');
    }
  };

  const clearSearch = () => {
    setQuery('');
  };

  if (isMobile) {
    return (
      <form onSubmit={handleSearch} className="w-full">
        <div className="relative flex items-center">
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search fruits..."
            className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {query && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-12 text-gray-400 hover:text-gray-600"
            >
              <X size={18} />
            </button>
          )}
          <button
            type="submit"
            className="absolute right-3 text-green-600 hover:text-green-700"
          >
            <Search size={18} />
          </button>
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={handleSearch} className="hidden md:block">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search fruits..."
          className="px-4 py-2 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
        />
        {query && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-12 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X size={18} />
          </button>
        )}
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-green-600 hover:text-green-700"
        >
          <Search size={18} />
        </button>
      </div>
        {filteredProducts.length > 0 && (<ProductList products={filteredProducts} />)}
    </form>
  );
}
