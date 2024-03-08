import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./MainPage.css";
import RatingPopup from "./RatingPopup";
import { AppContext } from "./ParentContext";
import { Input, Grid } from "@chakra-ui/react";

import {
  Card,
  CardBody,
  Button,
  Text,
  Select,
} from "@chakra-ui/react";

const MainPage = () => {
  const [colleges, setColleges] = useState([]);
  const [states, setStates] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [selectedNIRFRanking, setSelectedNIRFRanking] = useState(""); // Changed to string for dropdown
  const { id, setId, setLogin, login, setUpdate, update } = useContext(AppContext);
  const navigate = useNavigate();

  const fetchColleges = async () => {
    try {
      const response = await axios.get(
        "https://admission-adventure.onrender.com/colleges"
      );
      if (Array.isArray(response.data.colleges)) {
        setColleges(response.data.colleges);

        const uniqueStates = [
          ...new Set(response.data.colleges.map((college) => college.state)),
        ];
        setStates(uniqueStates);
      } else {
        console.error("Data fetched is not an array:", response.data);
      }
    } catch (error) {
      console.error("Error fetching colleges:", error);
    }
  };

  useEffect(() => {
    fetchColleges();
  }, []);

  const handleLogin = () => {
    if (login) {
      localStorage.setItem("isLoggedIn", "false");
      setLogin(false);
      alert("You are logging out ");
      localStorage.removeItem("LoginData");
      navigate("/signup");
    }
  };

  const handleStateClick = (state) => {
    setSelectedState(state);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    if (searchTerm.trim() === "") {
      alert("Please enter a valid state name");
      return;
    }

    setSelectedState(searchTerm);
  };

  const handleNIRFRankingChange = (event) => {
    setSelectedNIRFRanking(event.target.value);
  };

  const handleAddCollegeClick = () => {
    navigate("/add-college");
  };

  return (
    <div className="main-page">
      <h2>Colleges List</h2>
      <Button colorScheme="cyan" onClick={handleLogin} className="logout">
        Log Out
      </Button>

      <div className="search-container">
        <Input
          variant="filled"
          placeholder="Search by state..."
          value={searchTerm}
          onChange={handleSearchChange}
          type="text"
          style={{ width: "40vw", marginLeft: "10vw" }}
          className="input"
        />

        <Button
          colorScheme="yellow"
          onClick={handleSearchClick}
          className="searchbtn"
        >
          Search
        </Button>
        <Button
          colorScheme="green"
          onClick={handleAddCollegeClick}
          className="addcollegebtn"
        >
          Add College
        </Button>
      </div>

      <Grid templateColumns="repeat(2, 1fr)" gap={4} className="states-list" bg={"	rgb(169, 132, 103)"}>
        {states.map((item, id) => (
          <Card bg={"rgb(112, 141, 129)"} key={id} className="statescard">
            <CardBody className="cardbody" bg={"rgb(112, 141, 129)"} onClick={() => handleStateClick(item)}>
              <Text bg={"rgb(112, 141, 129)"} className="cards">{item}</Text>
            </CardBody>
          </Card>
        ))}
      </Grid>

          <Select
            placeholder="Select NIRF Ranking Range"
            onChange={handleNIRFRankingChange}
            value={selectedNIRFRanking}
            className="dropdown">
            <option value="">All</option>
            <option value="100">100 - 120</option>
            <option value="120">120 - 140</option>
            <option value="140">140 - 160</option>
            <option value="160">160 - 180</option>
            <option value="180">180 - 200</option>
          </Select>
      {login && ( 
        <div className="college-list">
          {colleges
            .filter((college) => (!selectedState || college.state.toLowerCase() === selectedState.toLowerCase()) && (!selectedNIRFRanking || (college.NIRF_ranking >= parseInt(selectedNIRFRanking) && college.NIRF_ranking < parseInt(selectedNIRFRanking) + 20)))
            .map((college, index) => (
              <div key={index} className="college">
                <h2>{college.name}</h2>
                <h3>State : {college.state}</h3>
                <p>NIRF Ranking: {college.NIRF_ranking}</p>
                <p>Average Package: {college.average_package}</p>
                <p>Highest Package: {college.highest_package}</p>
                <p>Fee: {college.fee}</p>
                <p>Ratings: {college.ratings}</p>

                <Button
                  onClick={() => { setId(college._id); setUpdate(true) }}
                  colorScheme="cyan"
                >
                  Add Ratings
                </Button>
              </div>
            ))}
          {update && (
            <div>
              <RatingPopup fetchColleges={fetchColleges} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MainPage;
