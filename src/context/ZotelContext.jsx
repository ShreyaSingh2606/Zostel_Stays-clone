import React, { createContext, useContext, useState, useEffect } from 'react';
import { properties as initialProperties } from '../data/properties';

const ZotelContext = createContext();

export const ZotelProvider = ({ children }) => {
  // Theme state with localStorage persistence
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('zotel-theme') || 'light';
  });

  // Auth state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Search and Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [wishlist, setWishlist] = useState(() => {
  const saved = localStorage.getItem('zotel-wishlist');
  return saved ? JSON.parse(saved) : [];
});
  const [filteredProperties, setFilteredProperties] = useState(initialProperties);
  const [loading, setLoading] = useState(true);

  // Sync theme with localStorage and document attribute
  useEffect(() => {
    localStorage.setItem('zotel-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Handle Search & Filter logic
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      let result = initialProperties;

      if (searchQuery) {
        result = result.filter(p => 
          p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      if (activeCategory !== 'All') {
        result = result.filter(p => p.category === activeCategory);
      }

      setFilteredProperties(result);
      setLoading(false);
    }, 500); // Simulate network delay for skeleton

    return () => clearTimeout(timer);
  }, [searchQuery, activeCategory]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

const toggleWishlist = (id) => {
  setWishlist(prev => {
    const updated = prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id];
    localStorage.setItem('zotel-wishlist', JSON.stringify(updated));
    return updated;
  });
};

  const login = (email) => {
    setIsLoggedIn(true);
    setUser({ name: email.split('@')[0], email });
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <ZotelContext.Provider value={{
      theme, toggleTheme,
      isLoggedIn, user, login, logout,
      searchQuery, setSearchQuery,
      activeCategory, setActiveCategory,
      wishlist, toggleWishlist,
      properties: filteredProperties,
      loading
    }}>
      {children}
    </ZotelContext.Provider>
  );
};

export const useZotel = () => useContext(ZotelContext);
