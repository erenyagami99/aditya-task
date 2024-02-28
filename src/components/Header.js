import React from 'react';

const Header = () => {
    return (
        <div className='main-container'>
        <div className='center'>
          <div className='header'>
            <div>
              <img className="logo" src='/images/preview.jpg' alt='/' />
              <p>Company Name</p>
            </div>
            <div>
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
          <div className='header'>
            <div className='image-container'>
              <img src='/images/facebook-icon.png' alt='facebook' />
              <img src='/images/twitter-icon.png' alt='twitter' />
              <img src='/images/whatsapp-icon.png' alt='whatsapp' />
            </div>
            <button className='button'>Click Here</button>
          </div>
          <h1 className="white" style={{ fontSize: "30px" }}>Company Motto</h1>
          <h1 className='heading'>Company Heading</h1>
          <p className='white'>Company details and work done and services provided are explained here. These details need to be filled and can be changed again whenever there is requirement...</p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className='vertical-border'>
              <button className='button'>Click Here</button>
            </div>
            <p className='white'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10,699</p>
          </div>
        </div>
      </div>
    );
}

export default Header;