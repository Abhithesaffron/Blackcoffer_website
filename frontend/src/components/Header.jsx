import React, { useState, useRef, useEffect } from 'react';
import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronDown, faPhone } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(true);
  };

  // Close search box when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <img src='https://blackcoffer.com/wp-content/uploads/2023/10/Black-720x172-4.png' alt="Logo" />
      </div>
      <nav className="navbar">
        {isSearchOpen && (
          <input
            ref={searchRef}
            type="text"
            className="search-input"
            placeholder="Search..."
          />
        )}
        <ul className={`menu ${isMenuOpen ? 'menu-open' : ''}`}>
          <li>
            Who we are
            <FontAwesomeIcon icon={faChevronDown} className="arrow-icon" />
          </li>
          <li>
            What we do
            <FontAwesomeIcon icon={faChevronDown} className="arrow-icon" />
          </li>
          <li>
            Insights
            <FontAwesomeIcon icon={faChevronDown} className="arrow-icon" />
          </li>
          <li>
            Careers
            <FontAwesomeIcon icon={faChevronDown} className="arrow-icon" />
          </li>
        </ul>
        <div className="actions">
          <span className="search-icon" onClick={toggleSearch}>
            <FontAwesomeIcon icon={faSearch} size="x" />
          </span>
          <span className="contact-container animated-border">
            <button className="contact-btn">
                <FontAwesomeIcon icon={faPhone} className="phone-icon" />
                Contact Us
            </button>
          </span>
          <div className="hamburger" onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
