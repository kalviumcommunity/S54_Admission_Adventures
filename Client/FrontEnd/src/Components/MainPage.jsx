import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MainPage.css';

const MainPage = () => {
  const [colleges, setColleges] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredColleges, setFilteredColleges] = useState([]);

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const response = await axios.get('https://admission-adventure.onrender.com/colleges');
        if (Array.isArray(response.data.colleges)) { // Access response.data.colleges
          console.log('Fetched colleges:', response.data.colleges);
          setColleges(response.data.colleges);
          setFilteredColleges(response.data.colleges);
        } else {
          console.error('Data fetched is not an array:', response.data);
        }
      } catch (error) {
        console.error('Error fetching colleges:', error);
      }
    };

    fetchColleges();
  }, []);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    const filtered = colleges.filter(college =>
      college.state.toLowerCase() === searchTerm.toLowerCase()
    );
    console.log('Filtered colleges:', filtered);
    setFilteredColleges(filtered);
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
