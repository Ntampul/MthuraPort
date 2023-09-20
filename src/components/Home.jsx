import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa6';
import { AiFillDribbbleCircle } from "react-icons/ai";
import './Home.css';
import CV from '../assets/mthunzi.pdf';
import Wall from '../assets/port.jpeg';

const Home = () => {
  return (
    <div
      className="wallpaper"
      style={{
        backgroundImage: `url(${Wall})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        width: '100vw',
      }}
    >
      <section className="page-section home" id="home">
        <div className="home__content rain">
          <div className="home__content">
            <div className="home__social social-media">
              <a
                href="https://github.com/Ntampul"
                className="social-media__link animated"
              >
                <FaGithub className="icon" />
                <br />
              </a>
              <a
                href="https://www.linkedin.com/in/mthunzi-ntampula-7b194522b/"
                className="social-media__link animated"
              >
                <FaLinkedin className="icon" />
                <br />
              </a>
             
            </div>
          </div>
        </div>
        <div className="home__description">
          <p>
            Hi. i’M <span className="name">MTHUNZI NTAMPULA</span> <br />
            Welcome to my portfolio as I am looking for a job as a{' '}
            <span className="job">SOFTWARE DEVELOPER</span>.
          </p>
        </div>

        <div className="home__image">
          <img
            src="https://i.ibb.co/3SVW3Ch/Whats-App-Image-2023-08-21-at-14-23-34.jpg"
            alt="home-image"
            className="responsive-image" // Added className for the image
          />
          <div className="cv">
            {' '}
            <a href={CV} target="_blank" className="btn">
              My Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
