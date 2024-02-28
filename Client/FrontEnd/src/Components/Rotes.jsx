import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import HomePage from "./HomePage"
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function Rotes() {
  return (
    <div>
  <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
  </Routes>
    </div>
  );
}

export default Rotes;
