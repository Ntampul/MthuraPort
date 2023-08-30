import { useState } from 'react';
import { FaHome, FaAddressBook, FaAccessibleIcon, FaBuffer } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from 'react-router-dom'; // Import Link component

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // Remove handleMenuClick function since we'll use Link components for routing

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
              {/* Use Link component for routing */}
              <Link to="/home" className="menu__link">
                <FaHome size='1.5rem' />
                Home
              </Link>
            </li>
            <li>
              {/* Use Link component for routing */}
              <Link to="/about" className="menu__link">
                <BsPersonCircle/>About
              </Link>
            </li>
            <li>
              {/* Use Link component for routing */}
              <Link to="/skills" className="menu__link">
                <FaAccessibleIcon/>Skills
              </Link>
            </li>
            <li>
              {/* Use Link component for routing */}
              <Link to="/projects" className="menu__link">
                <FaBuffer/>Projects
              </Link>
            </li>
            <li>
              {/* Use Link component for routing */}
              <Link to="/contact" className="menu__link">
                <FaAddressBook/>Contacts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
