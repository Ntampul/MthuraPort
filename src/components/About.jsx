// src/components/About.js
import React from 'react';
import { FaCode, FaDatabase, FaServer } from 'react-icons/fa'; // Import icons

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <p>
        Hi there! I'm [Your Name], a passionate developer with a knack for building awesome web applications.
      </p>
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill">
          <FaCode className="skill-icon" />
          <h3>Frontend Development</h3>
          <p>I specialize in creating engaging and responsive user interfaces using modern frontend technologies.</p>
        </div>
        <div className="skill">
          <FaDatabase className="skill-icon" />
          <h3>Database Management</h3>
          <p>I'm experienced in designing and managing databases, ensuring efficient data storage and retrieval.</p>
        </div>
        <div className="skill">
          <FaServer className="skill-icon" />
          <h3>Backend Development</h3>
          <p>I have a strong backend development background, building robust server-side logic for applications.</p>
        </div>
      </div>
    </div>
  );
};

export default About;




