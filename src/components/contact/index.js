import './index.css';

const Contact=()=>{
    
    return(
        <div className='contact-container' id="contact">
            <div className='contact-left'>
                <h1>Contact Us</h1>
                <p>
                    Welcome to car trust, your trusted destination for comprehensive automotive services. We specialize in providing expert maintenance, repairs, and diagnostic solutions to keep your vehicle running smoothly. Our team of certified technicians is dedicated to delivering top-tier service and support, ensuring that your car remains in optimal condition. Whether you need routine maintenance, advanced diagnostics, or specialized repairs, AutoPro is here to serve you with precision and care. Reach out today, and let us help keep your vehicle at its best.
                </p>
     </div>
            <form className='contact-right'>
                <div className='form-group contact-form'>
                    <div className=''>
                        <label>First Name</label>
                        <input type="" placeholder="Enter your First name" required />
                    </div>
                    <div className=''>
                        <label>Last Name</label>
                        <input type="" placeholder="Enter your Last name" />
                    </div>
                </div>
                
                <label>Email</label>
                <input type="email" placeholder="Enter your Email" required />
                <label>Message</label>
                <textarea placeholder='Type message...' ></textarea>
                <button className='contact-sendbtn'>Send</button>
            </form>
        </div>
    )
}

export default Contact;