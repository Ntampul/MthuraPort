//import React from 'react';
import web from '../assets/MZAMOMTSHA.png'; // Import your image files
import Calc from '../assets/TaxCalc.jpg';
import bank from '../assets/BANK.jpg';
import './Projects.css';

const Projects = () => {
  return (
    
    <div className='my-work'id="projects">
        <h3 className="Proj">My Projects</h3>
      <div className='description-icons'>
        <div className='project-image'><img src={web} alt='School Website' /></div>
        <div className='description'>
          <h2>School Website</h2>
          <p>We were tasked to create a website for the school to improve their online presence. We used HTML, CSS and JS tools to achieve this</p>
          <a href="https://symphonious-fudge-fafa73.netlify.app/"><button>View Web</button></a>
        </div>
      </div>

      <div className='description-icons'>
        <div className='project-image'><img src={bank} alt='Banking System' /></div>
        <div className='description'>
          <h2>Banking System</h2>
          <p className='para'>Here is a mobile banking system app. This was created using the Tkinter Python library. The app can create an account and allows account holders to make transactions while recording the data and more.</p>
          <a href=''><button>View Code</button></a>
        </div>
      </div>

      <div className='description-icons'>
        <div className='project-image'><img src={Calc} alt=' TaxCalculater' /></div>
        <div className='description'>
          <h2>TaxCalculater</h2>
          <p>The chat app was created using ReactJS, NodeJS and Socket.IO. It allows users to create a chat room and join using the created RoomID. Users can successfully send and receive messages, showing timestamps and sender’s name</p>
          <a href=''><button>View Code</button></a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
