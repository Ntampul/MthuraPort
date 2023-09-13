import { useState, useEffect, } from 'react';
import './Hearder.css';
//import menu from './menu.jpg';
import open_menu from './navbar.js';
import {IoReorderThreeSharp} from 'react-icons/io5'
//fixed flex justify-between bg-transparent
export default function Header() {
//console.log('navbar is revcieving about page:', myAboutIsVisible)

const [headerId, setHeaderId] = useState('header');

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setHeaderId('header1');
    } else {
      setHeaderId('header');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  //{aboutMeContent${myAboutIsVisible ? "-active":""}}


  return (
    <>
      <section id='header-section'>
        <nav>
          <div id={headerId} className='w-screen'>
            <div className="logo">
              <a href="#" className="logo"></a>
            </div>


              <div className="navlist">
                  <a href="#home"> Home</a>
                  <a href="#Mthunzi">About</a>
                  <a href="#projects">Projects</a>
                  <a href="#co">Contact</a>
              </div>


            <div className="" id='nav-icon' onClick={open_menu}>
              <IoReorderThreeSharp size="50" />
            </div>
          </div>
        </nav>
      </section>
    </>
  )
}