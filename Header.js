

import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1><u>Travelista</u></h1>
        <nav>
          <ul>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
