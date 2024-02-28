import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="HomePage_navbar">
        <h1 className="title">Admission Adventures</h1>
        <div className="top_btns"></div>
      </div>
      <h2 className="HomePage_Quote">Choose wisely</h2>
      <p className="Home_para">Explore our site for a comedic twist on higher education, where we unveil the pitfalls of questionable colleges with a dash of humor. Proceed with caution - laughter and enlightenment await!</p>
      <div className="buttons-container">
        <Link to="/signup">
          <button className="HomeSignup">Sign up</button>
        </Link>
        
        <Link to="/login" className="HomeSignin">Sign in </Link>
        
      </div>
    </div>
  );
};

export default HomePage;
