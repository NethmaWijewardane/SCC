import logo from './logo.svg';
// import './App.css';
import "react-bootstrap/dist/react-bootstrap.min.js"
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import NavbarComponent from './Components/Navbar'
import Form1 from "./Pages/Form";
import JobPreferences from "./Pages/Job Preferences";
import ExperienceandQualifications from "./Pages/Experience & Qualification";
import UserType from "./Pages/Home";
import Personality1 from "./Pages/Adventurer";
import Personality2 from "./Pages/Advocate";
import Personality3 from "./Pages/Architect";
import Personality4 from "./Pages/Campaigner";
import Personality5 from "./Pages/Commander";
import Personality6 from "./Pages/Consul";
import Personality7 from "./Pages/Debater";
import Personality8 from "./Pages/Defender";
import Personality9 from "./Pages/Entertainer";
import Personality10 from "./Pages/Entreprenuer";
import Personality11 from "./Pages/Executive";
import Personality12 from "./Pages/Logician";
import Personality13 from "./Pages/Logistician";
import Personality14 from "./Pages/Mediator";
import Personality15 from "./Pages/Protagonist";
import Personality16 from "./Pages/Virtuoso";

function App() {
  return (
    <Router>
      <div className="">
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<UserType/>} />
          <Route path="/register" element={<Form1/>} />
          <Route path="/jobPreferences" element={<JobPreferences/>} />
          <Route path="/experienceandQualifications" element={<ExperienceandQualifications/>} />
          <Route path="/Personality1" element={<Personality1/>} />
          <Route path="/Personality2" element={<Personality2/>} />
          <Route path="/Personality3" element={<Personality3/>} />
          <Route path="/Personality4" element={<Personality4/>} />
          <Route path="/Personality5" element={<Personality5/>} />
          <Route path="/Personality6" element={<Personality6/>} />
          <Route path="/Personality7" element={<Personality7/>} />
          <Route path="/Personality8" element={<Personality8/>} />
          <Route path="/Personality9" element={<Personality9/>} />
          <Route path="/Personality10" element={<Personality10/>} />
          <Route path="/Personality11" element={<Personality11/>} />
          <Route path="/Personality12" element={<Personality12/>} />
          <Route path="/Personality13" element={<Personality13/>} />
          <Route path="/Personality14" element={<Personality14/>} />
          <Route path="/Personality15" element={<Personality15/>} />
          <Route path="/Personality16" element={<Personality16/>} />
        </Routes>
        
        
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    </Router>
  );
}

export default App;
