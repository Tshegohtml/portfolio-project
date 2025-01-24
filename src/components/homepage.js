import React from "react";
import  Image from "./IMG_20240408_084521.jpg";
import { useNavigate } from 'react-router-dom';
import "./homepage.css"

function Homepage() {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate('/letschat'); 
};
  return (

    
    <div className="container">
      <div className="heading">
        <h1>HI, I'M YVETTE TSHEGOFATSO MOTLHALANE</h1>

        <div className="columns">
            <div className="home-para">
              <p>
                As a student passionate about coding and web development, I am
                dedicated to honing my skills in creating dynamic and user-friendly
                websites. Throughout my studies, I have gained hands-on experience
                with various web technologies, including React, Node.js, and
                databases like Firestore and SQLite. My journey has involved working
                on a variety of projects, from building weather apps and to-do list
                applications to developing complex systems like employee management
                dashboards and hotel booking platforms. I am constantly learning and
                experimenting with new tools and techniques, which allows me to
                improve both my technical abilities and my problem-solving skills.
                This experience has fueled my enthusiasm for web development and
                continues to shape my future in the field.{" "}
              </p>
            </div>
            <div className="image">
            <img src={Image} alt="Yvette Tshegofatso Motlhalane" className="image" />
            </div>
        </div>
        <div className="lets-chat-btn">
        <button 
            onClick={handleClick} 
            style={styles.button} 
            type="button"
        >
            Let's Chat
        </button>
        </div>
        
      </div>
      
    </div>
  );
}

const styles = {
  button: {
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
  },
};

export default Homepage;
