import React, { useState } from 'react';
import './index.css'; // Import the CSS file


const CarInsurance = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');

  const handleInputChange = (e) => {
    setRegistrationNumber(e.target.value);
  };

  const handleRenew = () => {
    // Add logic for renewing insurance
    alert("Renewing insurance for " + registrationNumber);
  };

  const handleGetPrice = () => {
    // Add logic for getting insurance price
    alert("Getting price for " + registrationNumber);
  };

  return (
    <>
    <div className="car-insurance-container">
      <div className="car-image">
        <img src="insurance.png" alt="Insurance" className='' />
      </div>
      <div className="insurance-form">
        <h1>Insure Your Brand New Car</h1>
        <p style={{textAlign:"left"}}>Please enter your car's registration number to get started.</p>
        <form>
          <div className="form-group67">
            <label htmlFor="registration" style={{fontWeight:"bold"}}>Registration Number</label>
            <input
              type="text"
              id="registration"
              value={registrationNumber}
              onChange={handleInputChange}
              placeholder="Enter Registration Number"
              required
            />
          </div>
          <div className="button-group">
            <button type="button" className="renew-button" onClick={handleRenew}>
              Renew
            </button>
            <button type="button" className="get-price-button" onClick={handleGetPrice}>
              Get Price
            </button>
          </div>
        </form>
      </div>
    </div>
    <img src="carinsurance.png" alt="car-insurance" className='insurance-banner'/>
    </>
  );
};

export default CarInsurance;
