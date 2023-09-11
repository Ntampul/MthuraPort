//import { useEffect } from 'react';
//import Typed from 'typed.js';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa6';
import {AiFillDribbbleCircle  } from "react-icons/ai";
import './Home.css'
import CV from '../assets/mthunzi.pdf'




const Home = () => {


  return (

      <section className="page-section home" id="home">
        <div className="home__content rain">
          <div className="home__content">
            <h2 className="home__title"></h2>
            <h1 className="home__name"></h1>
            <h2 className="home__title">
               <span className="multiple-text"></span>
            </h2>

            <div className="home__social social-media">
              <a href="https://github.com/Ntampul" className="social-media__link animated">
                <FaGithub className="icon" /> <br></br>
              </a>
              <a href="https://www.linkedin.com/in/mthunzi-ntampula-7b194522b/" className="social-media__link animated">
                <FaLinkedin className="icon" /> <br></br>
              </a>
              <a href="" className="social-media__link animated">
                <AiFillDribbbleCircle className="icon" /><br></br>
              </a>
              <a href="https://www.instagram.com/bhut_mthunz/" className="social-media__link animated">
                <FaInstagram className="icon" /><br></br>
              </a>
            </div>
          </div>
        </div>
        <div className="home__description">
                                   <p>
                                    Hi. i’M MTHUNZI NTAMPULA
                                     Welcome to my portfolio as i am looking for a job as a software DEVELOPER..
                                   </p>
            </div>
        <div className="home__image">
          <img src="https://i.ibb.co/3SVW3Ch/Whats-App-Image-2023-08-21-at-14-23-34.jpg"alt="home-image" />
         <div className="cv"> <a href={CV} target='_blank' className="btn">My Resume</a></div>
        </div>
      </section>
  );
};

export default Home;

