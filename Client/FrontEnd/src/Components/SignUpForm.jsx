import React, { useState } from 'react';
import './SignUpForm.css'; 

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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
    
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
