import React from 'react';
import Navbar from './components/navbar';
import { FaGithub } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Homepage from "./components/homepage"
import About from './components/about';
import Skills from "./components/skills";
import Projects from "./components/projects";
import Feedback from './components/feedback';



function App() {
  return (
    
    <Router>
    <Navbar />
    <Routes>
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/feedback" element={<Feedback/>}/>
      
    </Routes>
  </Router>
      
    
  );
}
export default App;