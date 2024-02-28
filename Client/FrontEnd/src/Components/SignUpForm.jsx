import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUpForm.css'; 
import axios from "axios"

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const usercheck = await axios.post("https://admission-adventure.onrender.com/login", formData);
        console.log(usercheck.data.Message);

        if (usercheck.data.Message === "Login success") {
            alert("Login success");
            console.log(formData);
        } else {
            alert("Please enter correct credentials"); // corrected spelling of "credentials"
        }
    } catch (error) {
        console.error('Error:', error); // changed console.log to console.error for better error handling
    }


    setFormData({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <div className="Signform-container">
      <h2 className='SignupTxt'>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input className='SighnUpFormInput' type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <input className='SighnUpFormInput' type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <input className='SighnUpFormInput' type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
        <button className='SighnupBtn' type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
