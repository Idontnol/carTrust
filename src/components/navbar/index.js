import { useNavigate } from 'react-router-dom';
import './index.css';
import {useState} from 'react';
import { MdMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
 
 const Navbar=(props)=>{
    const {setShowSignUpModal}=props;
    const navigate=useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    const [currentTab,setCurrentTab]=useState("");
    
    return(
        <>
        <header className="navbar">
            <div className="navbar-logo" onClick={()=>{navigate("/")}}>
                <h1 >Car Trust</h1>
            </div>
         
                <ul className='tabs'>
                    <li><div 
                    className={currentTab==='1'? 'tab-active' : ''} onClick={()=>{setCurrentTab('1');navigate('/cars-for-sale')}}>Cars for sale</div></li>
                    <li><div href="/free-beats"
                    className={currentTab==='2'? 'tab-active' : ''} onClick={()=>{setCurrentTab('2');navigate('/sell-your-car')}}>Sell your car</div></li>
                    <li><div href="/premium-beats"
                    className={currentTab==='3'? 'tab-active' : ''} onClick={()=>{setCurrentTab('3');navigate('/insurance')}}>Car Insurance</div></li>
                    <li><div href="/my-garage"
                    className={currentTab==='4'? 'tab-active' : ''} onClick={()=>{setCurrentTab('3');navigate('/my-garage')}}>My Garage</div></li>
                    <li><div href="/my-garage"
                    className={currentTab==='5'? 'tab-active' : ''} onClick={()=>{setCurrentTab('3');navigate('/inspection')}}>Pre Purchase Inspection</div></li>
                    {/* <li><a href="#faq"
                    className={currentTab==='5'? 'tab-active' : ''} onClick={()=>{setCurrentTab('5')}}>FAQ</a></li> */}
                    {/* <li><a href="#contact"
                    className={currentTab==='6'? 'tab-active' : ''} onClick={()=>{setCurrentTab('6')}}>Contact</a></li> */}
                </ul>
              
            <div className="navbar-cta">
                <button className="cta-button" onClick={()=>{setShowSignUpModal(t=>!t)}}>Sign Up / Log In</button>
            </div>

            <div className='navbar-cta-mob-right'>
                <div className="navbar-cta-mobile">
                    <button className="cta-button" onClick={()=>{setShowSignUpModal(t=>!t)}}>Sign Up / Log In</button>
                </div>

                <div className="menu-toggle hamburger" onClick={toggleMenu}>
                {isOpen ? <IoCloseSharp />:<MdMenu style={{color:"white"}} />}
                </div>
            </div>
            
        </header>
        {isOpen && (
                    <div className="mobile-menu">
                        <ul className='tabs-mobile'>
                            <li><div 
                            className={currentTab==='1'? '' : ''} onClick={()=>{setCurrentTab('1');navigate('/cars-for-sale');toggleMenu();}}>Cars for sale</div></li>
                            <li><div 
                            className={currentTab==='2'? '' : ''} onClick={()=>{setCurrentTab('2');navigate('/sell-your-car');toggleMenu();}}>Sell your car</div></li>
                              <li><div href="/insurance"
                    className={currentTab==='3'? 'tab-active' : ''} onClick={()=>{setCurrentTab('3');navigate('/insurance');toggleMenu();}}>Car Insurance</div></li>
                             <li><div href="/my-garage"
                    className={currentTab==='4'? 'tab-active' : ''} onClick={()=>{setCurrentTab('3');navigate('/my-garage');toggleMenu();}}>My Garage</div></li>
                    <li><div href="/my-garage"
                    className={currentTab==='5'? 'tab-active' : ''} onClick={()=>{setCurrentTab('3');navigate('/inspection');toggleMenu();}}>Pre Purchase Inspection</div></li>
                    {/* <li><a href="#faq"
                            {/* <li><a 
                            href="#faq" className={currentTab==='5'? '' : ''} onClick={()=>{setCurrentTab('5');toggleMenu();}}>FAQ</a></li> */}
                            {/* <li><a 
                            href="#contact" className={currentTab==='6'? '' : ''} onClick={()=>{setCurrentTab('6');toggleMenu();}}>Contact</a></li> */}
                        </ul>
                    </div>
                )}
        </>
    )
}

export default Navbar;