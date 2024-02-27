import React, { useState } from 'react';
import './LoginForm.css';
import axios from "axios"
const LoginForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    state: '',
    gender: '',
    yearOf12thPass: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const statesList = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
    "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
    "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  const currentYear = new Date().getFullYear();
  const yearsList = Array.from({ length: 20 }, (_, index) => currentYear - index);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.name) {
      formErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.dateOfBirth) {
      formErrors.dateOfBirth = 'Date of Birth is required';
      isValid = false;
    }

    if (!formData.state) {
      formErrors.state = 'State is required';
      isValid = false;
    }

    if (!formData.gender) {
      formErrors.gender = 'Gender is required';
      isValid = false;
    }

    if (!formData.yearOf12thPass) {
      formErrors.yearOf12thPass = 'Year of 12th Pass is required';
      isValid = false;
    }

    if (!formData.phone) {
      formErrors.phone = 'Phone is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      formErrors.phone = 'Phone number must be 10 digits';
      isValid = false;
    }

    if (!formData.email) {
      formErrors.email = 'Email is required';
      isValid = false;
    }

    if (!formData.password) {
      formErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log(formData)
      try {
        const response=await axios.post("http://localhost:3000/createUser",formData)
        console.log(response);
      } catch (error) {
        
      }
      setFormData({
        name: '',
        dateOfBirth: '',
        state: '',
        gender: '',
        yearOf12thPass: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    }
  };

  return (
    <div className="form-container">
      <h2>Create a New Account</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        {errors.name && <span className="error">{errors.name}</span>}
        <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} placeholder="Date of Birth" required />
        {errors.dateOfBirth && <span className="error">{errors.dateOfBirth}</span>}
        <select name="state" value={formData.state} onChange={handleChange} required>
          <option value="">Select State</option>
          {statesList.map((state, index) => (
            <option key={index} value={state}>{state}</option>
          ))}
        </select>
        {errors.state && <span className="error">{errors.state}</span>}
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="Prefer not to state.">Prefer not to state</option>
        </select>
        {errors.gender && <span className="error">{errors.gender}</span>}
        <select name="yearOf12thPass" value={formData.yearOf12thPass} onChange={handleChange} required>
          <option value="">Select Year of 12th Pass</option>
          {yearsList.map((year, index) => (
            <option key={index} value={year}>{year}</option>
          ))}
        </select>
        {errors.yearOf12thPass && <span className="error">{errors.yearOf12thPass}</span>}
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
        {errors.phone && <span className="error">{errors.phone}</span>}
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        {errors.email && <span className="error">{errors.email}</span>}
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password (min. 6 characters)" minLength="6" required />
        {errors.password && <span className="error">{errors.password}</span>}
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" required />
        {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
