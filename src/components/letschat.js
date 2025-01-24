import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./letschat.css";

const LetsChat = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/chatpage');
    };

    return (
        <div className="lets-chat-container">
            <div className="welcome-message">Welcome! Let’s connect and chat.</div>
            <button 
                onClick={handleClick} 
                className="lets-have-a-chat" 
                type="button"
            >
                Let's Chat
            </button>
        </div>
    );
};

export default LetsChat;
