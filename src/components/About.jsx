import './About.css';
import {FaCss3Alt , FaCss3, FaReact, FaGitAlt  } from "react-icons/fa";
import {BiLogoJavascript ,BiLogoJava, BiLogoFigma,BiLogoPython  } from "react-icons/bi";


const About = () => {
  return (
    <section className="page-section about" id="about">
     
      <div className="about__content">
        <h3 className="about__sub-title">Junior Software Developer</h3>
        <p className='descr'> As a Junior Software Developer, I am an enthusiastic and mtted to honing my skills to deliver high-quality and efficient software applications.
     I specialize in front-end and back-end development, bringing pixel-perfect designs to life and building robust server-side logic.
      Lifelong learner and problem solver, always seeking new challenges and opportunities to grow.
    </p>
    <h4 className="skills">MYSKILLS</h4>

    <ul className="Skills_Icon">
            <li>
              <FaCss3Alt size='5rem' />  <FaCss3 size='5rem' /> <BiLogoJavascript size='5rem' /> <FaReact size='5rem' /> <br></br>
              <BiLogoJava size='5rem' />  <BiLogoFigma size='5rem' />  <BiLogoPython size='5rem'/> <FaGitAlt size='5rem' />

            </li>
            
            </ul>
        </div>
    
    </section>
  );
};

export default About;





