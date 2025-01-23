import React, { useState } from 'react';
import './index.css'; // Import the CSS file
import { IoMdTime } from "react-icons/io";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoPricetagsOutline } from "react-icons/io5";

const GaragePage = () => {
  const [cars, setCars] = useState([]);
  const [carDetails, setCarDetails] = useState({
    licensePlate: '',
    vin: '',
    make: '',
    model: '',
    year: '',
    style: '',
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCarDetails({
      ...carDetails,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
    setCarDetails({
      ...carDetails,
      image: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCars([...cars, carDetails]);
    setCarDetails({
      licensePlate: '',
      vin: '',
      make: '',
      model: '',
      year: '',
      style: '',
      image: null,
    });
  };

  return (
    <div className="garage-container">
      <h1 style={{marginBottom:"10px"}}>Your Garage</h1>
      <div className='garage-con'>
      <div className="garage-form">
    <h2>Add your car. Track its value</h2>
      <p style={{textAlign:'left',width:"70%"}}>Add your car to Your Garage to track its market value and cash in when the time is right to sell.</p>
        {/* <h2>Add Your Car</h2> */}
        <form onSubmit={handleSubmit} className=''>
          {/* Form fields here */}
            
          <label htmlFor="licensePlate">License Plate:</label>
          <input
            type="text"
            id="licensePlate"
            name="licensePlate"
            value={carDetails.licensePlate}
            onChange={handleInputChange}
            placeholder='Enter License Plate'
            required
          />
          
          <label htmlFor="vin">VIN:</label>
          <input
            type="text"
            id="vin"
            name="vin"
            value={carDetails.vin}
            placeholder='Enter your VIN'
            onChange={handleInputChange}
            required
          />

          <label htmlFor="make">Make:</label>
          <select
            id="make"
            name="make"
            value={carDetails.make}
            onChange={handleInputChange}
            required
          >
            <option value="">Choose a make</option>
            <option value="Toyota">Toyota</option>
            <option value="Honda">Honda</option>
            <option value="Ford">Ford</option>
            {/* Add more makes as needed */}
          </select>

          <label htmlFor="model">Model:</label>
          <select
            id="model"
            name="model"
            value={carDetails.model}
            onChange={handleInputChange}
            required
          >
            <option value="">Choose a model</option>
            <option value="Corolla">Corolla</option>
            <option value="Civic">Civic</option>
            <option value="Mustang">Mustang</option>
            {/* Add more models based on make */}
          </select>

          <label htmlFor="year">Year:</label>
          <select
            id="year"
            name="year"
            value={carDetails.year}
            onChange={handleInputChange}
            required
          >
            <option value="">Choose a year</option>
            {/* Populate year dropdown */}
            {Array.from({ length: 35 }, (_, i) => (
              <option key={i} value={new Date().getFullYear() - i}>
                {new Date().getFullYear() - i}
              </option>
            ))}
          </select>

          <label htmlFor="style">Style:</label>
          <select
            id="style"
            name="style"
            value={carDetails.style}
            onChange={handleInputChange}
            required
          >
            <option value="">Choose a style</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Truck">Truck</option>
            {/* Add more styles as needed */}
          </select>

          <label htmlFor="carImage">Upload Car Image:</label>
          <input
            type="file"
            id="carImage"
            accept="image/*"
            onChange={handleImageUpload}
            required
          />

          <button type="submit" className='garage-btn'>Add Car</button>
        </form>
          {/* Remaining fields */}
         
      </div>

      <img src="cargarage2.jpg" alt="car-garage" className='car-garage-image'/>

      </div>
      
      
{/* 
      <div className="garage-list">
        <h2>Your Added Cars</h2>
        {cars.map((car, index) => (
          <div key={index} className="car-item">
            <div className="car-details">
              <h3>{`${car.year} ${car.make} ${car.model}`}</h3>
              <p>License Plate: {car.licensePlate}</p>
              <p>VIN: {car.vin}</p>
              <p>Style: {car.style}</p>
            </div>
            {car.image && <img src={car.image} alt="Car" className="car-image" />}
          </div>
        ))}
      </div> */}

      {/* New Section */}
      <div className="garage-value-section">
        <h2>Always Know How Much is in Your Garage</h2>
        <div className="garage-value-content">
          <div className="garage-value-item">
        
            <BsGraphUpArrow  className="garage-icon"/>
            <h3>Track its market value</h3>
            <p>Access real-time insight into how much your car is worth.</p>
          </div>
          <div className="garage-value-item">
          <IoMdTime  className="garage-icon"/>
            <h3>Know the right time to sell</h3>
            <p>View its historical and projected value to decide when to sell.</p>
          </div>
          <div className="garage-value-item">
            <IoPricetagsOutline  className="garage-icon"/>
            <h3>Sell your car your way</h3>
            <p>Secure an instant offer from a local dealership or sell it yourself on Cars.com.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GaragePage;
