import React from "react";

const Footer = () => {  
    return (
        <div className='footer'>
        <div style={{ borderBottom: "2px solid gray" }}>
          <div className='width-70 flex space-between center-div footer-container'>
            <div className="footer-section">
              <div >
                <h1>Services</h1>
                <p>Transport</p>
                <p>Delivery</p>
                <p>Goods</p>
                <p>Communication</p>
              </div>
              <div>
                <h1>Accessories</h1>
                <p>Building</p>
                <p>Machines</p>
                <p>Electricians</p>
                <p>Media</p>
              </div>
            </div>
            <div className="footer-section">
            <div>
              <h1>Electrical</h1>
              <p>Systems</p>
              <p>Laptops</p>
              <p>E-Billings</p>
            </div>
            <div>
              <h1>Social Media</h1>
              <p>Facebook</p>
              <p>Twitter</p>
              <p>LinkedIn</p>
              <p>Instagram</p>
            </div>
            </div>
          </div>
        </div>
        <div className='width-70 flex space-between center-div items-center'>
          <p>Contact Us On</p>
          <div>
            <div className='image-container'>
              <img src='/images/whatsapp-icon.png' alt='whatsapp' />
              <img src='/images/facebook-icon.png' alt='facebook' />
              <img src='/images/twitter-icon.png' alt='twitter' />
              <img src='/images/whatsapp-icon.png' alt='whatsapp' />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer;