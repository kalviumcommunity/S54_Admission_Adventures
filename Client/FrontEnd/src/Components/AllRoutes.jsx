import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import MainPage from './MainPage';
import DataAddingForm from './DataAddingForm'; // Import DataAddingForm

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/add-college" element={<DataAddingForm />} /> {/* Add DataAddingForm route */}
      </Routes>
    </div>
  );
}

export default AllRoutes;
