import React, { Component } from 'react';
import "./DataAddingForm.css";

class DataAddingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      state: '',
      nirfRanking: '',
      averagePackage: '',
      highestPackage: '',
      ratings: '',
      fees: '',
      isValid: false,
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, this.validateForm);
  };

  validateForm = () => {
    const { nirfRanking, averagePackage } = this.state;
    const isNirfValid = nirfRanking > 100;
    const isPackageValid = averagePackage < 4;
    this.setState({ isValid: isNirfValid && isPackageValid });
  };

  handleSubmit = event => {
    event.preventDefault();
    // You can handle form submission here, e.g., send data to a server
    console.log('Form submitted:', this.state);
    // Clear form fields after submission if needed
    this.setState({
      name: '',
      state: '',
      nirfRanking: '',
      averagePackage: '',
      highestPackage: '',
      ratings: '',
      fees: '', // Changed field name from imageLink to fees
      isValid: false,
    });
  };

  render() {
    const { name, state, nirfRanking, averagePackage, highestPackage, ratings, fees, isValid } = this.state;

    return (
      <div className="form-container">
        <h2>Add a College</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>College Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              required
            />
          </div>
          {/* Repeat the pattern for other form inputs */}
          <div className="form-group">
            <label>State Located At:</label>
            <input
              type="text"
              name="state"
              value={state}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>NIRF Rankings:</label>
            <input
              type="number"
              name="nirfRanking"
              value={nirfRanking}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Average Package (in LPA):</label>
            <input
              type="number"
              name="averagePackage"
              value={averagePackage}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Highest Package (in LPA):</label>
            <input
              type="number"
              name="highestPackage"
              value={highestPackage}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Overall Ratings:</label>
            <input
              type="number"
              name="ratings"
              value={ratings}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Fees:</label> {/* Changed label from Image Link to Fees */}
            <input
              type="text"
              name="fees" // Changed field name from imageLink to fees
              value={fees}
              onChange={this.handleChange}
              required
            />
          </div>
          <button className={`submit-button ${isValid ? 'valid' : ''}`} type="submit" disabled={!isValid}>
            Submit
          </button>
        </form>
        {!isValid && (
          <p className="validation-message">
            Please ensure that the NIRF ranking is greater than 100 and the average package is less than 4 LPA.
          </p>
        )}
      </div>
    );
  }
}

export default DataAddingForm;
