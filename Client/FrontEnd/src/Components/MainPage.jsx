import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';

const MainPage = () => {
  const [colleges, setColleges] = useState([]);
  const [states, setStates] = useState([]); // New state to hold the list of states
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredColleges, setFilteredColleges] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const response = await axios.get('https://admission-adventure.onrender.com/colleges');
        if (Array.isArray(response.data.colleges)) {
          console.log('Fetched colleges:', response.data.colleges);
          setColleges(response.data.colleges);
          setFilteredColleges(response.data.colleges);
          
          // Extracting unique states from the fetched data
          const uniqueStates = [...new Set(response.data.colleges.map(college => college.state))];
          setStates(uniqueStates);
        } else {
          console.error('Data fetched is not an array:', response.data);
        }
      } catch (error) {
        console.error('Error fetching colleges:', error);
      }
    };

    fetchColleges();
  }, []);

  const handleStateClick = (state) => {
    const filtered = colleges.filter(college =>
      college.state.toLowerCase() === state.toLowerCase()
    );
    setFilteredColleges(filtered);
  };

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    if (searchTerm.trim() === '') {
      alert('Please enter a valid state name');
      return;
    }

    const filtered = colleges.filter(college =>
      college.state.toLowerCase() === searchTerm.toLowerCase()
    );

    if (filtered.length === 0) {
      alert('State not found');
      return;
    }

    setFilteredColleges(filtered);
  };

  const handleAddCollegeClick = () => {
    navigate('/add-college');
  };

  return (
    <div className="main-page">
      <h2>Colleges List</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by state..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearchClick}>Search</button>
        <button onClick={handleAddCollegeClick}>Add College</button>
      </div>

      <div className="states-list">
        <h3>States:</h3>
        <ul>
          {states.map((state, index) => (
            <li key={index} onClick={() => handleStateClick(state)}>{state}</li>
          ))}
        </ul>
      </div>

      <div className="college-list">
        {filteredColleges.map((college, index) => (
          <div key={index} className="college">
            <h3>{college.name}</h3>
            <p className='state'>{college.state}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
