import "./index.css";
import TransitionEffect from "../TransitionEffect";

const Skills = () => {
  const skillsDetails = [
    {
      id: 1,
      title: "HTML5",
      src: "/html5-logo.png",
    },
    {
      id: 2,
      title: "CSS3",
      src: "/css3-logo.png",
    },
    {
      id: 3,
      title: "JAVASCRIPT",
      src: "/js-logo.png",
    },
    {
      id: 4,
      title: "REACT JS",
      src: "/react-logo.png",
    },
  ];

  const ToolsDetails = [
    {
      id: 1,
      title: "VS CODE",
      src: "/vscode-logo.png",
    },
    {
      id: 2,
      title: "GITHUB",
      src: "/github-logo.png",
    },
  ];

  return (
    <div>
      <TransitionEffect/>
      <div className="skills-header-container">
        <h1 className="skills-head">Skills</h1>
        <hr className="separator" />
        <p className="skills-des">These are technologies I have worked with</p>
      </div>
      <div className='Skills-logo-container'>
        <ul className="skills-list-container">
          {
            skillsDetails.map((eachSkill) =>(
              <li key={eachSkill.id} className="skill-card">
                <img src={eachSkill.src} alt={eachSkill.title} className="skill-img"/>
                <div className="content-container">
                <p className="skill-name">{eachSkill.title}</p>
              </div>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="tools-header-container">
        <h1 className="skills-head">Tools</h1>
        <hr className="separator" />
        <p className="skills-des">These are few tools I have worked with</p>
      </div>
      <div className='Skills-logo-container'>
        <ul className="skills-list-container">
          {
            ToolsDetails.map((eachTool) =>(
              <li key={eachTool.id} className="skill-card">
                <img src={eachTool.src} alt={eachTool.title} className="skill-img"/>
                <div className="content-container">
                <p className="skill-name">{eachTool.title}</p>
              </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default Skills;
