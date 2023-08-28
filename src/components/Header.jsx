import { useState } from 'react';
import {FaHome, FaAddressBook, FaAccessibleIcon, FaBuffer } from "react-icons/fa";
import {BsPersonCircle  } from "react-icons/bs";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = (event) => {
    event.preventDefault();
    const target = event.target.getAttribute('data-goto');
    const targetElement = document.getElementById(target);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
      setMenuOpen(false); // Close the menu after clicking a link
    }
  };

  return (
    <header className={`header ${menuOpen ? 'menu-open' : ''}`}>
      <img
        src="https://i.ibb.co/zX1PNBY/mthura-veed-remove-background.png"
        alt="header__logo"
        className="header__logo"
      />

      <div className={`header__menu menu ${menuOpen ? 'open' : ''}`}>
        <div className="menu__icon" onClick={handleMenuToggle}>
          <span></span>
        </div>
        <nav className="menu__body">
          <ul className="menu__list">
            <li>
              <a href="#" data-goto="home" onClick={handleMenuClick} className="menu__link"><FaHome size='1.5rem' />
                Home
              </a>
            </li>
            <li>
              <a href="#" data-goto="about" onClick={handleMenuClick} className="menu__link">
                <BsPersonCircle/>About
              </a>
            </li>
            <li>
              <a href="#" data-goto="services" onClick={handleMenuClick} className="menu__link">
                <FaAccessibleIcon/>Skills
              </a>
            </li>
            <li>
              <a href="#" data-goto="portfolio" onClick={handleMenuClick} className="menu__link">
                <FaBuffer/>Projects
              </a>
            </li>
            
            <li>
              <a href="#" data-goto="contact" onClick={handleMenuClick} className="menu__link">
                <FaAddressBook/>Contacts
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;