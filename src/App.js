
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import CarsForSale from './components/carsForSale';
import EmptySpace from './components/EmptySpace';
import SellCar from './components/sellCar';
import { useState } from 'react';
import { carContext } from './context/carcontext';
import SignUpLoginModal from './components/authenticate';
import MyGarage from './components/myGarage';
import HomePage from './components/hero';
import Contact from './components/contact';
import CarValuation from './components/carValuation';
import PrePurchaseInspection from './components/purchaseInspection';
import CarInsurance from './components/carInsurance';

function App() {
  const [showSignUpModal,setShowSignUpModal]=useState(false);
  return (
    <div className="App">
       {/* <BrowserRouter basename="/car-trust"> */}
       <BrowserRouter >
       <carContext.Provider value={showSignUpModal}>
          <Navbar setShowSignUpModal={setShowSignUpModal} />
          <a href="https://wa.me/+919989786348?text=Hello! I need some assistance." target="_blank" rel="noreferrer">
            <img src="csupport1.png" className='customer-support' alt="customer-support" />
          </a>
          {showSignUpModal && <SignUpLoginModal setShowSignUpModal={setShowSignUpModal} />}
          <EmptySpace/>
          <Routes>
            <Route path="/cars-for-sale" element={<CarsForSale/>}/>
            <Route path="/sell-your-car" element={<SellCar/>}/>
            <Route path="/my-garage" element={<MyGarage/>}/>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/valuation" element={<CarValuation/>}/>
            <Route path="/inspection" element={<PrePurchaseInspection/>}/>
            <Route path="/insurance" element={<CarInsurance/>}/>
          </Routes>
          <Contact/>
        </carContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
