import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">logo</div>

      <div className="nav-links">
        <NavLink to="/homepage" activeClassName="active-link">HOMEPAGE</NavLink>
        <NavLink to="/about" activeClassName="active-link">ABOUT</NavLink>
        <NavLink to="/skills" activeClassName="active-link">SKILLS</NavLink>
        <NavLink to="/projects" activeClassName="active-link">PROJECTS</NavLink>
        <NavLink to="/feedback" activeClassName="active-link">FEEDBACK</NavLink>
      </div>

      <div className="button">
        <a href="/path/to/your/cv.pdf" download style={{ textDecoration: 'none' }}>
          <button>Download CV</button>
        </a>
      </div>

      <div className="nav-icons">
        <FaGithub />
        <FaLinkedin />
      </div>
    </div>
  );
}

export default Navbar;
