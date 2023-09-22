import React from 'react';
import web from '../assets/MZAMOMTSHA.png';
import Calc from '../assets/TaxCalc.jpg';
import bank from '../assets/BANK.jpg';
import './Projects.css';

const Projects = () => {
  return (
    <div className='my-work' id="projects">
      <h3 className="Proj pad">My Projects</h3>
      <div className='description-icons'>
        <div className='project-image'><img src={web} alt='School Website' /></div>
        <div className='description'>
          <h2>School Website</h2>
     
          <p></p>
          <a href="https://symphonious-fudge-fafa73.netlify.app/" target='_blank' rel="noreferrer"><button>View Web</button></a>
        </div>
      </div>

      <div className='description-icons'>
        <div className='project-image'><img src={bank} alt='Banking System' /></div>
        <div className='description'>
          <h2>Banking System</h2>
          <p className='para'></p>
          <a href='https://github.com/Ntampul/BankingApp' target='_blank' rel="noreferrer"><button>View Code</button></a>
        </div>
      </div>

      <div className='description-icons'>
        <div className='project-image'><img src={Calc} alt='Tax Calculator' /></div>
        <div className='description'>
          <h2>Tax Calculator</h2>
          <p></p>
          <a href='https://github.com/Ntampul/taxCalculater'><button>View Code</button></a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
