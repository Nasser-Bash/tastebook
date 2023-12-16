import React, { useState } from 'react';
import { useEffect } from 'react';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
  
    setIsOpen(!isOpen);
  
  };

  return (
    <div className="mobile-menu">
      <button className="menu-button" onClick={handleMenuClick}>
        Menu
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>Home</li>
          <li>About</li>
          <li>
            Services
            <ul className="sub-menu">
              <li>Service 1</li>
              <li>Service 2</li>
              <li>Service 3</li>
            </ul>
          </li>
          <li>Contact</li>
        </ul>
      )}
    </div>
  );
};

export default MobileMenu;