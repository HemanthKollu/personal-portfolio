import "./index.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import TransitionEffect from "../TransitionEffect";

const Home = () => {
  return (
    <>
      <TransitionEffect/>
      <div className="home-container">
        <div className="text-content-container">
          <h1 className="head">
            Hi, I'm <span className="name">Hemanth</span>
          </h1>
          <div className="typing-animation">
            <span>Frontend Developer</span>
            <span className="cursor"></span>
          </div>
          <p className="description">
            I'm a Web Designer, I'm Passionate about technology with my skills
            and experience, expertise to create webiste design and frontend
            design and many more...
          </p>
          <div className="icons-container">
            <a
              href="https://github.com/HemanthKollu"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <FaGithub size={20} className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/hemanth-kollu-390b5518b"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <FaLinkedinIn size={20} className="icon" />
            </a>
          </div>
          <div className="btn-container">
            <a
              href="/HemanthResume.pdf"
              target={"_blank"}
              // download={true}
              className="resume-link"
            >
              <button className="resume-btn">My Resume</button>
            </a>
          </div>
        </div>
        <div className="img-container">
          <img src="/IMG_20240415_150855.png" alt="img" className="image" />
        </div>
      </div>
      {/* Mobile view */}
      <div className="sm-home-container">
        <div className="img-container">
          <img src="/IMG_20240415_150855.png" alt="img" className="image" />
        </div>
        <div className="text-content-container">
          <h1 className="head">
            Hi, I'm <span className="name">Hemanth</span>
          </h1>
          <div className="typing-animation">
            <span>Frontend Developer</span>
            <span className="cursor"></span>
          </div>
          <p className="description">
            I'm a Web Designer, I'm Passionate about technology with my skills
            and experience, expertise to create webiste design and frontend
            design and many more...
          </p>
          <div className="sm-icons-container">
            <a
              href="https://github.com/HemanthKollu"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <FaGithub size={20} className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/hemanth-kollu-390b5518b"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <FaLinkedinIn size={20} className="icon" />
            </a>
          </div>
          <div className="btn-container">
            <a
              href="/HemanthResume.pdf"
              target={"_blank"}
              // download={true}
              className="resume-link"
            >
              <button className="resume-btn">My Resume</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
