

import React from "react";
import "./HomePage.css"; 

const HomePage = () => {
  return (
   
   <>
  <div className="HomePage_navbar">
    
  <h1 className="tittle">Admission Adventures</h1>
   <div className="top_btns">  
  </div>
  </div>
    <h2 className="HomePage_Quote">Choose wisely</h2>
    <p className="Home_para">Explore our site for a comedic twist on higher education, where we unveil the pitfalls of questionable colleges with a dash of humor. Proceed with caution - laughter and enlightenment await!</p>
    <div style={{display:"flex",justifyContent:"center"}}>
    <button className="HomeSignup">Sign up</button>
    <button className="HomeSighnin">Sign in</button>
    </div>
   </>
  );
};

export default HomePage;
