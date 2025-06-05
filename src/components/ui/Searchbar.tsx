// components/SearchBar.js
"use client";
import { useState } from 'react';

// interface SearchBarProps {
//   onSearch: (query: string) => void;
// }

export default function SearchBar() {
  const [query, setQuery] = useState('');


function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const value = e.target.value;
    setQuery(value);
    // onSearch(value);
}

  return (
    <input
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Search for fruits..."
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
    />
  );
}
