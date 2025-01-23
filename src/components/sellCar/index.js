import React, { useState } from "react";
import "./index.css";
import { indianStates } from "../utils";

const SellCar = () => {
  const [option, setOption] = useState("vin");

  const handleOptionChange = (e) => {
    setOption(e.target.value);
  };

  return (
    <div className="container">
      <div className="content">
        <h1>Sell Your Car Today – Fast, Easy, and Secure!</h1>
        <p>
          Enter your car details to get an instant value estimate and sell it in
          just a few clicks. Choose between providing your VIN or license plate
          number for accurate car information.
        </p>
        {/* <div className="car-icon"></div> */}
      </div>
      <div className="form-section">
        <form>
          <div className="form-option">
            <label>
              <input
                type="radio"
                value="vin"
                checked={option === "vin"}
                onChange={handleOptionChange}
              />
              <p>VIN</p>
              
            </label>
            <label>
              <input
                type="radio"
                value="license"
                checked={option === "license"}
                onChange={handleOptionChange}
              />
              <p>License Plate</p>
               
            </label>
          </div>

          {option === "vin" ? (
            <div className="form-group vin-box">
              <label htmlFor="vin">Enter your 17-digit VIN</label>
              <input
                type="text"
                id="vin"
                placeholder="17-digit VIN"
                maxLength="17"
                required
              />
            </div>
          ) : (
            <div>
              <div className="form-group">
                {/* <label htmlFor="license">License Plate Number</label> */}
                <input
                  type="text"
                  id="license"
                  placeholder="Enter License Plate Number"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="state">State</label>
                <select id="state" required>
                  <option value="" disabled>Select State</option>
                  {indianStates.map(s=>   <option value={`${s}`}>{s}</option>)}
               
                 
                  {/* Add other states */}
                </select>
              </div>
            </div>
          )}

          <button type="submit" className="submit-btn">
            Get My Car Value
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellCar;
