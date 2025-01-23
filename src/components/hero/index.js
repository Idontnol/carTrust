import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'; // Import the CSS

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="background-image23">
        <div className="overlay">
          <h1>Welcome to Auto Services</h1>
          <div className="services-container">
            <div className="service-card">
              <h2>Pre-purchase Inspection</h2>
              <p>Get detailed car inspections before you buy.</p>
              <ul>
                <li>Thorough engine diagnostics</li>
                <li>Structural integrity checks</li>
                <li>Comprehensive inspection report</li>
            </ul>
              <Link to="/inspection">Learn More</Link>
            </div>
            <div className="service-card">
                <h2>Car Insurance</h2>
                <p>Find the best insurance plans for your vehicle.</p>
                <ul>
                    <li>We compare various insurance providers to find the best coverage for your needs.</li>
                    <li>Get competitive rates tailored to your budget.</li>
                    <li>Advice on comprehensive, collision, and liability coverage options.</li>
                </ul>
                <Link to="/insurance">Learn More</Link>
                </div>

                <div className="service-card">
                <h2>Sell Your Car</h2>
                <p>Easy and fast way to sell your car.</p>
                <ul>
                    <li>Guidance through the entire selling process.</li>
                    <li>Connect with potential buyers quickly and securely.</li>
                    <li>Ensure you get the best price for your vehicle.</li>
                </ul>
                <Link to="/sell-your-car">Learn More</Link>
                </div>

                <div className="service-card">
                <h2>Car Valuation</h2>
                <p>Get a fair valuation for your vehicle.</p>
                <ul>
                    <li>Comprehensive market data for precise valuations.</li>
                    <li>Know the true value of your car before selling or trading in.</li>
                    <li>Expert insights to support your decision-making.</li>
                </ul>
                <Link to="/valuation">Learn More</Link>
                </div>

                {/* <div className="service-card">
                <h2>Key Duplication</h2>
                <p>We offer key duplication services.</p>
                <ul>
                    <li>Quick and reliable key duplication for most makes and models.</li>
                    <li>High-quality duplicates that work perfectly.</li>
                    <li>Convenient service to ensure you’re never locked out.</li>
                </ul>
                <Link to="/key-duplication">Learn More</Link>
                </div> */}
                <div className="service-card">
                <h2>Cars for Sale</h2>
                <p>Find the best deals on used cars with a wide variety of makes and models.</p>
                <ul>
                    <li>Choose from a wide range of vehicles, including sedans, SUVs, and trucks.</li>
                    <li>Thoroughly inspected and certified cars with detailed information.</li>
                    <li>Competitive prices to fit any budget, with financing options available.</li>
                </ul>
                <Link to="/cars-for-sale">Browse Cars</Link>
                </div>

                <div className="service-card">
                <h2>My Garage</h2>
                <p>Manage your vehicles easily and privately.</p>
                <ul>
                    <li>List your cars for sale and track maintenance records.</li>
                    <li>Access exclusive offers and personalized services.</li>
                    <li>Join our garage community for updates and insights.</li>
                </ul>
                <Link to="/my-garage">Learn More</Link>
                </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
