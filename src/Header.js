import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <img 
        className="header__logo" 
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
        alt="Netflix logo" 
      />
      <img 
        className="header__avatar" 
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
        alt="User avatar" 
      />
    </header>
  );
}

export default Header;
