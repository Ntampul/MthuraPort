//import { useEffect } from 'react';
//import Typed from 'typed.js';
//import Video from './Video.mp4';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa6';


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
            <div className="home__description">
              <p>
              Hi. i’M MTHUNZI NTAMPULA
Welcome to my portfolio as i am looking for a job as a software DEVELOPER..
              </p>
            </div>
            <div className="home__social social-media">
              <a href="https://github.com/Ntampul" className="social-media__link animated">
                <FaGithub className="icon" /> <br></br>
              </a>
              <a href="https://www.linkedin.com/in/mthunzi-ntampula-7b194522b/" className="social-media__link animated">
                <FaLinkedin className="icon" /> <br></br>
              </a>
              <a href="https://web.facebook.com/profile.php?id=100063655705791" className="social-media__link animated">
                <FaFacebook className="icon" /><br></br>
              </a>
              <a href="https://www.instagram.com/scott_vincent98/" className="social-media__link animated">
                <FaInstagram className="icon" /><br></br>
              </a>
            </div>
            <a href="mbongwe cv (3).pdf" className="btn">Download CV</a>
          </div>
        </div>
        <div className="home__image">
          <img src="mthura.png" alt="home-image" />
        </div>
      </section>
  );
};

export default Home;

