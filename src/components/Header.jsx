import React, { useState } from 'react';
import {FaHome, FaAddressBook, FaBuffer } from "react-icons/fa";
import {BsPersonCircle  } from "react-icons/bs";
import './Hearder.css';



const NavBar = () => {
  const [active, setActive] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(false);
  const [currentPage, setCurrentPage] = useState('Home'); // Initialize with the default active page (e.g., 'Home')

  const navToggle = () => {
    setActive(!active);
    setToggleIcon(!toggleIcon);
  };

  const handleNavLinkClick = (page) => {
    setCurrentPage(page);
    setActive(false); // Close the navigation menu when a link is clicked
    setToggleIcon(false);
  };

  return (
    <nav className={`nav ${active ? 'nav__active' : ''}`}>
      <a href="contacts" className="nav__brand">
        Ntampula Mthunzi
      </a>
      <div onClick={navToggle} className={toggleIcon ? 'nav_toggler toggle' : 'nav_toggler'}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className="nav__menu">
        <li className="nav__item">
          <a
            href="#home"
            className={`nav__link ${currentPage === 'Home' ? 'active' : ''}`}
            onClick={() => handleNavLinkClick('Home')}
          ><FaHome size='1.5rem' />
            Home
          </a>
        </li>
        <li className="nav__item">
          <a
            href="#about"
            className={`nav__link ${currentPage === 'About' ? 'active' : ''}`}
            onClick={() => handleNavLinkClick('About')}
          ><BsPersonCircle size='1.5rem' />
             About
          </a>
        </li>
        <li className="nav__item">
          <a
            href="#projects"
            className={`nav__link ${currentPage === 'Projects' ? 'active' : ''}`}
            onClick={() => handleNavLinkClick('projects')}
          > <FaBuffer size='1.5rem'/>
            Projects
          </a>
        </li>
        <li className="nav__item">
          <a
            href="#contact"
            className={`nav__link ${currentPage === 'Contact' ? 'active' : ''}`}
            onClick={() => handleNavLinkClick('contacts')}
          ><FaAddressBook size='1.5rem'/>
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;




