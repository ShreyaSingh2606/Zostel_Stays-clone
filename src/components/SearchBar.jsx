import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import { useZotel } from '../context/ZotelContext';

const SearchBar = () => {
 
 
  const [localQuery, setLocalQuery] = useState('');
 const [checkIn, setCheckIn] = useState('');
const [checkOut, setCheckOut] = useState('');
const [guests, setGuests] = useState(1);
const today = new Date().toISOString().split('T')[0];
  const { setSearchQuery } = useZotel();

  const handleSearch = () => {
    setSearchQuery(localQuery);
    const element = document.querySelector('#destinations');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={styles.searchWrapper}>
      <div className={`container ${styles.searchContainer}`}>
       
        
        <div className={styles.searchBar}>
          <div className={styles.inputGroup}>
            <label>DESTINATION</label>
            <input 
              type="text" 
              placeholder="Where do you want to go?" 
              value={localQuery}
              onChange={(e) => setLocalQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
          </div>
          <div className={styles.divider}></div>
         <div className={styles.inputGroup}>
  <label>CHECK IN</label>
  <input
    type="date"
    value={checkIn}
    min={today}
    onChange={(e) => setCheckIn(e.target.value)}
  />
</div>
<div className={styles.divider}></div>
<div className={styles.inputGroup}>
  <label>CHECK OUT</label>
  <input
    type="date"
    value={checkOut}
    min={checkIn || today}
    onChange={(e) => setCheckOut(e.target.value)}
  />
</div>
<div className={styles.divider}></div>
<div className={styles.inputGroup}>
  <label>GUESTS</label>
  <input
    type="number"
    value={guests}
    min={1}
    max={10}
    onChange={(e) => setGuests(e.target.value)}
  />
</div>
         
          <button className={styles.searchBtn} onClick={handleSearch}>
            <span className={styles.icon}>🔍</span>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
