import React from "react";
import "./about.css";
import Image from "./IMG_20240408_084521.jpg";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img
            src={Image}
            alt="Yvette Tshegofatso Motlhalane"
            className="image"
          />
        </div>
        <div className="about-content">
          <h1>About Me</h1>
          <p>
            Hi! I am <strong>Tshego</strong>, an adept Web Developer with a love
            for creating engaging UI. I am skilled in JavaScript, React, and
            modern Web Development Tech Stacks.
          </p>
          <p>
            I enjoy tackling challenges, learning new programming languages, and
            continuously improving my craft and myself. When I am not coding,
            you can find me trying new things such as reading a book, gaming,
            gardening, having a proper hairline, or enjoying the outdoors.
          </p>
          <h2>Personal Details</h2>
          <ul>
            <li>
              <strong>Name:</strong> Yvette Motlhalane
            </li>
            <li>
              <strong>Email:</strong> ytmotlhalane@gmail.com
            </li>
            <li>
              <strong>Phone Number:</strong> 06455265428
            </li>
            <li>
              <strong>Location:</strong> Kimberley, South Africa
            </li>
            <li>
              <strong>Program Enrolled:</strong> Codetribe
            </li>
            <li>
              <strong>My Resume:</strong>{" "}
              <i>
                <a
                  href="https://drive.google.com/file/d/1JpkvKIFe5xwFhQlxnW7ANQh_RxOsDzws/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click here
                </a>
              </i>
            </li>
            <li>
              <strong>Interests:</strong> Coding, travelling, reading, and more
            </li>
            <li>
              <strong>Goals:</strong> To secure a job in web development and
              build 2-3 more portfolio projects.
            </li>
            <li>
              <strong>Long-Term Goals:</strong> Contribute to open-source
              projects and become a full-stack developer.
            </li>
          </ul>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1JpkvKIFe5xwFhQlxnW7ANQh_RxOsDzws/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
          >
            View My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
