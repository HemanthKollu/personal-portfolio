import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Navbar from "./Components/Navbar";
import HireMe from "./Components/HireMe";
const App = () => (
  <>
    <Navbar />

    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/projects" element={<Projects />} />
      <Route exact path="/skills" element={<Skills />} />
      <Route exact path="/education" element={<Education />} />
      <Route exact path="/hireme" element={<HireMe />} />
    </Routes>
  </>
);

export default App;
