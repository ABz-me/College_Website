import React, { useState } from 'react';
import './menu.css';
import SearchContainer from './Search-System/SearchContainer';

const Menu = () => {
  const [recentSearches, setRecentSearches] = useState([]);

  const addRecentSearch = (search) => {
    setRecentSearches((prevSearches) => {
      const updatedSearches = [...prevSearches];
      if (!updatedSearches.includes(search)) {
        if (updatedSearches.length >= 5) {
          updatedSearches.shift(); // Keep only the latest 5 searches
        }
        updatedSearches.push(search);
      }
      return updatedSearches;
    });
  };

  return (
    <div className="side-menu">
      <div className="search-bar-container">
        <span>Explore websites</span>
        <SearchContainer addRecentSearch={addRecentSearch} />
      </div>
      <div className="recent-search">
        <span>Recent Searches</span>
        <ul className='recent-points'>
          {recentSearches.map((search, index) => (
            <li key={index}>{search}</li>
          ))}
        </ul>
      </div>
      <div className="about">
        <strong>Academy of Technology</strong>
        <div className="address">
          <a href="">
            Grand Trunk Rd, Adisaptagram, Krishnapur Chandanpur, Dakshin Hazipur, West Bengal 712502
          </a>
        </div>
        <div className="about_links link-1">
          <a href="">Visit</a>
          <a href="">Map</a>
          <a href="">Events</a>
          <a href="">People</a>
          <a href="">Carrier</a>
          <a href="">Contact</a>
        </div>
        <div className="about_links link-2">
          <a href="">Privacy</a>
          <a href="">Accessibility</a>
          <a href="">Social Media Hub</a>
        </div>
      </div>
    </div>
  );
};

export { Menu };
