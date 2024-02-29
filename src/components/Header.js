import React from "react";

const Header = () => {
    return (
        <div className='header'>
        <div>
          <img className="logo" src='/images/preview.jpg' alt='/' />
          <h1 style={{paddingLeft:"10px"}}>URBAN NEST</h1>
        </div>
        <div className="services">
          <p>Make a Call</p>
          <p>&nbsp;+19-2298</p>
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