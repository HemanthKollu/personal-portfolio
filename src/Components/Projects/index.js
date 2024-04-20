import './index.css'
import { FaEye } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import TransitionEffect from '../TransitionEffect';

const projectsImages = [
  {
    id: 1,
    src: '/netflix-bg.svg',
    alt: "netflix-clone",
    name: 'Netflix-Clone',
    sourceCode: 'https://github.com/HemanthKollu/Netflix-Clone',
    websiteLink: 'https://hemanthkollu2.ccbp.tech/'
  },
  {
    id: 2,
    src: '/jobby-bg.png',
    alt: 'jobby-clone',
    name: 'Jobby-Clone',
    sourceCode: 'https://github.com/HemanthKollu/JobbyApp',
    websiteLink: 'https://hemanthkollu.ccbp.tech/'
  },
  {
    id: 3,
    src: '/E-Commerce-bg.png',
    alt: 'e-commerce-clone',
    name: 'E-commerce-Clone',
    sourceCode: 'https://github.com/HemanthKollu/NxtTrendzApp',
    websiteLink: 'https://hemanthkollu1.ccbp.tech/login'
  },
  {
    id: 4,
    src: '/calculator-bg.png',
    alt: 'calculator',
    name: 'Calculator',
    sourceCode: 'https://github.com/HemanthKollu/calculator',
    websiteLink: 'https://calsykh.netlify.app/'
  },
]

const Projects = () =>{
  return(
    <>
    <TransitionEffect/>
    <ul className='projects-list-container'>
      {
        projectsImages.map((eachProject) =>(
          <li className='projects-list' key={eachProject.id}>
            <img src={eachProject.src} alt={eachProject.alt} className='project-image'/>
            <div className='visit-container'>
              <div className='projects-icon-container'>
                <a href={eachProject.websiteLink} target={'_blank'} rel={'noreferrer'}><FaEye size={25} className='view-icon'/></a>
                <a href={eachProject.sourceCode} target={'_blank'} rel={'noreferrer'}><FaCode size={25} className='view-icon'/></a>
              </div>
              <p className='project-name'>{eachProject.name}</p>
            </div>
          </li>
        ))
      }
    </ul>
    </>
  )
}

export default Projects