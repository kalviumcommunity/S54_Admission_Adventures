import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './SignUpForm.css';
import axios from "axios";
import { AppContext } from './ParentContext';

const SignUpForm = () => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { login, setLogin } = useContext(AppContext);

  useEffect(() => {
    let isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      navigate('/');
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const usercheck = await axios.post("https://admission-adventure.onrender.com/login", formData);
      console.log(usercheck.data.Message);

      if (usercheck.data.Message === "Login success") {
        alert("Login success");
        setLogin(true);
        const newData = { ...formData }; 
        document.cookie = `user=${formData.email}`;
        document.cookie = `JWT=${usercheck.data.token}`;
        localStorage.setItem('LoginData', JSON.stringify(newData));
        localStorage.setItem('isLoggedIn', true);

        
        navigate('/main'); 
      } else {
        alert("Please enter correct credentials");
      }
    } catch (error) {
      console.error('Error:', error);
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
