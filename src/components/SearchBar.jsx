import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import { useZotel } from '../context/ZotelContext';

const SearchBar = () => {
 
  const [localQuery, setLocalQuery] = useState('');
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
            <label>CHECK IN - CHECK OUT</label>
            <div className={styles.datePicker}>Select Dates</div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.inputGroup}>
            <label>GUESTS</label>
            <div className={styles.guestPicker}>1 Guest</div>
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
