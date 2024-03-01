import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './DataAddingForm.css';

const DataAddingForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('https://admission-enquirey.onrender.com/createcolleges', data);
      console.log(response.data);
      console.log(data);
      
      reset(); // Clear the form after successful submission
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      <h2>Add a College</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>College Name:</label>
          <input
            type="text"
            {...register('name', { required: true })}
          />
          {errors.name && <p>This field is required</p>}
        </div>
        {/* Repeat the pattern for other form inputs */}
        <div className="form-group">
          <label>State Located At:</label>
          <input
            type="text"
            {...register('state', { required: true })}
          />
          {errors.state && <p>This field is required</p>}
        </div>
        <div className="form-group">
          <label>NIRF Rankings:</label>
          <input
            type="number"
            {...register('NIRF_ranking', { required: true, min: 101 })}
          />
          {errors.NIRF_ranking && <p>NIRF ranking must be greater than 100</p>}
        </div>
        <div className="form-group">
          <label>Average Package (in LPA):</label>
          <input
            type="text"
            {...register('average_package', { required: true, max: 4 })}
          />
          {errors.average_package && <p>Average package must be less than or equal to 4 LPA</p>}
        </div>
        <div className="form-group">
          <label>Highest Package (in LPA):</label>
          <input
            type="text"
            {...register('highest_package', { required: true })}
          />
          {errors.highestPackage && <p>This field is required</p>}
        </div>
        <div className="form-group">
          <label>Overall Ratings:</label>
          <input
            type="number"
            {...register('ratings', { required: true })}
          />
          {errors.ratings && <p>This field is required</p>}
        </div>
        <div className="form-group">
          <label>Fees:</label>
          <input
            type="text"
            {...register('fee', { required: true })}
          />
          {errors.fee && <p>This field is required</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DataAddingForm;
