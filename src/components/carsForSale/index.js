import { useState } from 'react';
import { availableFilters, carData } from '../utils';
import { FaAngleDown,FaAngleUp } from "react-icons/fa6";
import './index.css';

const CarsForSale=()=>{
    const [selectedFilters, setSelectedFilters] = useState({
        brand: [],
        priceRange: [],
    });
    const toggleFilter = (category, value) => {
        setSelectedFilters((prev) => {
            const isSelected = prev[category].includes(value);
            const updatedCategory = isSelected
                ? prev[category].filter((item) => item !== value)
                : [...prev[category], value];
            return { ...prev, [category]: updatedCategory };
        });
    };
    const [openFilter, setOpenFilter] = useState(null); // State to handle dropdown toggle

    const toggleDropdown = (filter) => {
        setOpenFilter(openFilter === filter ? null : filter); // Toggle the clicked filter dropdown
    };
    
    return(
        <div className="cars-for-sale-container">
    
        {/* Filter Section */}
        <div className="filters-section">
    <h2 style={{marginBottom:"10px"}}>Filters</h2>

    {/* Filters list */}
    {Object.keys(availableFilters).map((filterCategory) => (
        <div key={filterCategory} className="filter-group">
            <div className='filter-head'>
                <h3 onClick={() => toggleDropdown(filterCategory)} className="filter-heading">
                    {filterCategory.charAt(0).toUpperCase() + filterCategory.slice(1)}
                </h3>
                {openFilter === filterCategory ?<FaAngleUp />: <FaAngleDown />}
            </div>

            {/* Show options if filter is open */}
            {openFilter === filterCategory && (
                <div className="filter-options">
                    {availableFilters[filterCategory].map((option) => (
                        <label key={option} className="filter-label">
                            <input
                                type="checkbox"
                                // Use a fallback for undefined filters
                                checked={selectedFilters[filterCategory]?.includes(option) || false}
                                onChange={() => toggleFilter(filterCategory, option)}
                            />
                            <p>{option}</p>
                        </label>
                    ))}
                </div>
            )}
        </div>
    ))}
</div>


        {/* Main Content Section */}
        <div className="cars-gallery-section">
            {/* Scrollable filter summary */}
            <div className="selected-filters-scrollable">
                {/* <h4>Selected Filters:</h4> */}
                <div className="pill-container">
                    {Object.keys(selectedFilters).map((category) =>
                        selectedFilters[category].map((filter, index) => (
                            <div key={`${category}-${index}`} className="pill">
                                {filter}
                                <span className="pill-remove" onClick={() => toggleFilter(category, filter)}>×</span>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Car Gallery */}
            <div className="cars-gallery">
                {carData.map((car) => (
                    <div key={car.id} className="car-card">
                        <img src={`./images/${car.image}`} alt={car.name} className="car-image" />
                        <div className="car-details">
                            <h3>{car.name}</h3>
                            <p className="car-price">{car.price}</p>
                            <p className="car-year-mileage">{car.year} | {car.mileage}</p>
                            <p className="car-transmission-fuel">{car.transmission} | {car.fuelType}</p>
                            <p className="car-location">{car.location}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </div>
    )
}

export default CarsForSale;