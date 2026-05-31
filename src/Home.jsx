import React from "react";
import heroimg from "./assets/hero2.png";
import "./Home.css";
const Home = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Ace Your Frontend Interviews with FrontAce
        </h1>
        <p className="hero-subtitle">
          Practice React, JavaScript, HTML, and CSS interview questions with
          interactive learning and progress tracking.
        </p>
      </div>
      <div className="hero-img">
        <img src={heroimg} alt="frontend learning" />
      </div>
    </div>
  );
};

export default Home;
