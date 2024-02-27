import React from 'react';
import "./DummyData.css";

const collegesData = [
  {
    image: "https://www.static-contents.youth4work.com/university/Documents/Colleges/newsEvent/8d55864e-694f-464a-8091-721635687551.jpg",
    state: "Bihar",
    name: "Bihar College of Engineering, Patna",
    fee: "₹80,000",
    NIRF_ranking: "150+",
    highest_package: "₹6,00,000",
    average_package: "₹3,00,000",
    ratings: "3.7"
  },
  {
    image: "https://images.shiksha.com/mediadata/images/1667974195phpZgIF1d.jpeg",
    state: "Uttar Pradesh",
    name: "Gautam Buddha University, Greater Noida",
    fee: "₹1,20,000",
    NIRF_ranking: "150+",
    highest_package: "₹5,50,000",
    average_package: "₹2,50,000",
    ratings: "3.8"
  },
  {
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Rajiv_Gandhi_Proudyogiki_Vishwavidyalaya_%28RGPV%29_Admin_building_1.jpg/1200px-Rajiv_Gandhi_Proudyogiki_Vishwavidyalaya_%28RGPV%29_Admin_building_1.jpg",
    state: "Madhya Pradesh",
    name: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal",
    fee: "₹90,000",
    NIRF_ranking: "150+",
    highest_package: "₹5,00,000",
    average_package: "₹2,00,000",
    ratings: "3.6"
  },
  {
    image: "https://www.collegebatch.com/static/clg-gallery/rajasthan-college-of-engineering-for-women-jaipur-236905.jpg",
    state: "Rajasthan",
    name: "Rajasthan College of Engineering for Women, Jaipur",
    fee: "₹1,10,000",
    NIRF_ranking: "150+",
    highest_package: "₹4,50,000",
    average_package: "₹2,20,000",
    ratings: "3.5"
  }
];

const DummyData = () => {
  return (
    <>
      <h2 className='DummypageQuote'>Empowering Futures Through Informed Choices</h2>
    <div className="DummyData">
      {collegesData.map((college, index) => (
        <div key={index}>
          <div className='DummyPage'>
            <strong className='NameOfCollege'>{college.name}</strong>
            
          </div>
          <div className='DummyPage'>
            <img src={college.image} alt={college.name} />
          </div>
          <div className='bottomdata'>
          <div className='DummyPage' id='samedata1'>
            <strong>State:</strong>
            <h6>{college.state}</h6>
          </div>
          <div className='DummyPage' id='samedata2'>
            <strong>Fee:</strong>
            <h6>{college.fee}</h6>
          </div>
          <div className='DummyPage' id='samedata3'>
            <strong>NIRF Ranking:</strong>
            <h6>{college.NIRF_ranking}</h6>
          </div>
          <div className='DummyPage' id='samedata4'>
            <strong>Highest Package:</strong>
            <h6>{college.highest_package}</h6>
          </div>
          <div className='DummyPage' id='samedata5'>
            <strong>Average Package:</strong>
            <h6>{college.average_package}</h6>
          </div>
          <div className='DummyPage' id='samedata6'>
            <strong>Ratings:</strong>
            <h6>{college.ratings}</h6>
          </div>
          <div className='DummyPage' id='samedata6'>
           <button className='DummyPage' id='RateButtton'>Rate The College</button>
          </div>
          </div>
         
        </div>
      ))}
    </div>
    </>
  );
};

export default DummyData;
