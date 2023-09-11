import './About.css';
import {
  FaCss3Alt,
  FaCss3,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import {
  BiLogoJavascript,
  BiLogoJava,
  BiLogoFigma,
  BiLogoPython,
  BiLogoCPlusPlus,
  BiLogoPhp,
  BiLogoAngular,
} from "react-icons/bi";
import { BsFiletypeSql } from "react-icons/bs";

const About = () => {
  return (
    <div className="about__content" id="about">
      <section className="page-section about">
        <h3 className="about__sub-title">Junior Software Developer</h3>
        <p className="descr">
          As a Junior Software Developer, I am enthusiastic and committed to
          honing my skills to deliver high-quality and efficient software
          applications. I specialize in front-end and back-end development,
          bringing pixel-perfect designs to life and building robust
          server-side logic. Lifelong learner and problem solver, always seeking
          new challenges and opportunities to grow.
        </p>
        <h4 className="skills">MY SKILLS</h4>
        <div className="Skills_Icon">
          <FaCss3Alt
            size="5rem"
            className="rotate-icon"
            style={{ color: "red" }}
          />
          <FaCss3
            size="5rem"
            className="rotate-icon"
            style={{ color: "blue" }}
          />
          <BiLogoJavascript
            size="5rem"
            className="rotate-icon"
            style={{ color: "green" }}
          />
          <FaReact
            size="5rem"
            className="rotate-icon"
            style={{ color: "purple" }}
          />
          <BiLogoPhp
            size="5rem"
            className="rotate-icon"
            style={{ color: "white" }}
          />
          <BiLogoAngular
            size="5rem"
            className="rotate-icon"
            style={{ color: "Yellow" }}
          />
          <BiLogoJava
            size="5rem"
            className="rotate-icon"
            style={{ color: "orange" }}
          />
          <BiLogoFigma
            size="5rem"
            className="rotate-icon"
            style={{ color: "pink" }}
          />
          <BiLogoPython
            size="5rem"
            className="rotate-icon"
            style={{ color: "teal" }}
          />
          <FaGitAlt
            size="5rem"
            className="rotate-icon"
            style={{ color: "yellow" }}
          />
          <BiLogoCPlusPlus
            size="5rem"
            className="rotate-icon"
            style={{ color: "teal" }}
          />
          <BsFiletypeSql
            size="5rem"
            className="rotate-icon"
            style={{ color: "" }}
          />
        </div>
      </section>
    </div>
  );
};

export default About;
