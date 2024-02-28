import React from "react";

const Header = () => {
    return (
        <div className='header'>
        <div>
          <img className="logo" src='/images/preview.jpg' alt='/' />
          <p>Company Name</p>
        </div>
        <div style={{gap:"15px"}}>
          <p>Services</p>
          <p>Contact</p>
          <p>List of Goods</p>
        </div>
        <div className='image-container'>
          <img src='/images/facebook-icon.png' alt='facebook' />
          <img src='/images/twitter-icon.png' alt='twitter' />
          <img src='/images/whatsapp-icon.png' alt='whatsapp' />
        </div>
      </div>
    );
    }

export default Header;