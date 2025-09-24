import React, { useState, useEffect } from 'react';
import { useDebounce } from './Myhook'; // Assuming you have a custom hook for debouncing
const SearchBar = () => {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery) {
      console.log('Searching for:', debouncedQuery);
      // API call or logic goes here
    }
  }, [debouncedQuery]);

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search users"
        className="border p-2 w-full rounded"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;