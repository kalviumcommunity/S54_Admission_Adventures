import React, { useState, useEffect ,useContext} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';
import RatingPopup from './RatingPopup';
import { AppContext } from './ParentContext';

const MainPage = () => {
  const [colleges, setColleges] = useState([]);
  const [states, setStates] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const {id, setId,update,setUpdate} = useContext(AppContext); // State to hold the selected college ID
  const navigate = useNavigate();
  const fetchColleges = async () => {
    try {
      const response = await axios.get('https://admission-adventure.onrender.com/colleges',);
      if (Array.isArray(response.data.colleges)) {
        setColleges(response.data.colleges);

        const uniqueStates = [...new Set(response.data.colleges.map(college => college.state))];
        setStates(uniqueStates);
      } else {
        console.error('Data fetched is not an array:', response.data);
      }
    } catch (error) {
      console.error('Error fetching colleges:', error);
    }
  };



  useEffect(() => {
   fetchColleges()
  }, []);
  const handleContext=(data)=>{
    setId(data);
    setUpdate(true)
    console.log(update);
    
  }
  const handleStateClick = (state) => {
    setSelectedState(state);
  };

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    if (searchTerm.trim() === '') {
      alert('Please enter a valid state name');
      return;
    }

    setSelectedState(searchTerm);
  };

  const handleAddCollegeClick = () => {
    navigate('/add-college');
  };

 




  return (
    <div className="main-page">
      <h2>Colleges List</h2>
{/* console.log(update) */}
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
      {selectedState && (
        <div className="college-list">
          {colleges
            .filter(college => college.state.toLowerCase() === selectedState.toLowerCase())
            .slice(0, 10) // Limit to the first 10 colleges
            .map((college, index) => (
              <div key={index} className="college">
                <h3>{college.name}</h3>
                <p>NIRF Ranking: {college.NIRF_ranking}</p>
                <p>Average Package: {college.average_package}</p>
                <p>Highest Package: {college.highest_package}</p>
                <p>Fee: {college.fee}</p>
                <p>Ratings: {college.ratings}</p>
                <button onClick={()=>handleContext(college._id)}>Add Ratings</button> {/* Use setId function here */}
              </div>
            ))}
            <div style={{
              display:update ? "block" : 'none'
            }}>
            <RatingPopup fetchdata={fetchColleges}/>

            </div>
        </div>
      )}

      
    </div>
  );
};

export default MainPage;
