import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useContext } from "react";
import { AppContext } from "./ParentContext";




const HomePage = () => {

  const {login}=useContext(AppContext)

  return (
    <div className="HomePage">
      <div className="HomePage_navbar">
        <h1 className="title">Admission Adventures</h1>
        <div className="top_btns"></div>
      </div>
      <h2 className="HomePage_Quote">Choose wisely</h2>
      <p className="Home_para">Explore our site for a comedic twist on higher education, where we unveil the pitfalls of questionable colleges with a dash of humor. Proceed with caution - laughter and enlightenment await!</p>
      <div className="buttons-container" style={{
        display:login ? "none" : "block"
      }}>
       
        <Link to="/signup"><Button colorScheme='purple'>Sign Up</Button></Link>
        <Link to="/login"><Button colorScheme='messenger' className="signinbtn">Sign In</Button></Link>
      </div><Link to="/main">
        <Button colorScheme='blue' style={{
        display:login ? "block" : "none"
      }}  >Explore</Button></Link>
    </div>
  );
};

export default HomePage;
