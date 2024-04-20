import "./index.css";
import { MdLocationPin } from "react-icons/md";
import { FaCalendarDays } from "react-icons/fa6";
import TransitionEffect from "../TransitionEffect";

const educationDetails = [
  {
    id: 1,
    schoolName: "Master E.K Bala Bhanu Vidhyalam",
    location: "Machilipatnam",
    year: "2013 - 2014",
  },
  {
    id: 2,
    schoolName: "Sri Chaitanya Junior College",
    location: "Machilipatnam",
    year: "2014 - 2016",
  },
  {
    id: 1,
    schoolName: "Bala Sai Degree Kalashala",
    location: "Machilipatnam",
    year: "2016 - 2022",
  },
];

const Education = () => {
  return (
    <>
    <TransitionEffect/>
    <div className="education-container">
      <h1 className="education-head">Education</h1>
      <div className="eduction-column-details-container">
        <div className="education-column-container">
          <ul className="content-list-container">
            {educationDetails.map((eachData) => (
              <li key={eachData.id} className="content-list-card">
                <h1 className="school-name">{eachData.schoolName}</h1>
                <div className="details-icon-container">
                  <MdLocationPin size={24} className="education-icon"/>
                  <p className="location">{eachData.location}</p>
                </div>
                <div className="details-icon-container">
                  <FaCalendarDays size={23} className="education-icon" />
                  <p className="location">{eachData.year}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default Education;
