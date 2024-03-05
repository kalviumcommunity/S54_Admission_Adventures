import React from 'react'
import {useForm} from "react-hook-form"
import { useContext } from 'react';
import { AppContext } from './ParentContext';
import axios from "axios"
import "./RatingPopup.css"

const RatingPopup = (props) => {
  const {setUpdate,id}=useContext(AppContext)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
    } = useForm();
    const formSubmitHandler=async(data)=>{
      console.log(data);
      console.log(id);
      
try {
  const UpdatedData=await axios.put(`https://admission-adventure.onrender.com/updatecollege/${id}`,data)
  
  console.log(UpdatedData.data)
  if(UpdatedData){
    setUpdate(false)
    reset()
    props.fetchColleges()

  }
} catch (error) {
  console.log(error)
}

    }
   
  return (
    <div className="Datachangediv" 
    >

       <form onSubmit={handleSubmit(formSubmitHandler)}>
        {/* <h1>{id}</h1> */}
      
         <button className='close-btn' onClick={()=>{setUpdate(false)}}>X</button>
       
      <label className='text'>Add  Your Ratings:</label>
          <input className='input'
            type="text"
            name="ratings"
            {...register('ratings', {
              required: 'Enter rating',
              validate: (value) => parseFloat(value) <= 5 || 'Rating should be 5 or less'
            })}
            placeholder='Please Rate up to 5'
          />
          {errors.ratings && <p className="err">{errors.ratings.message}</p>}
          <button className='InputSubmit' type="submit" value={'Submit '}>Submit</button></form>
    </div>
  )
}

export default RatingPopup;
