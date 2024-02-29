import React from "react";

const ProcessSection =()=>{
    return(
        <div className='third-div' style={{gap:"40px"}}>
          <h1>Build Your Dreams</h1>
          <div className='flex width-full space-between'>
            <h1>Quality Services</h1>
            <div className='flex items-center'>
              <p style={{ color: "green", fontWeight: "bold" }}>Click Me</p>
              <img src='/images/right-arrow.png' alt='arrow' />
            </div>
          </div>
          <div className='flex image-wrap space-between justify-center'>
            <div className="flex column">
              <img className='image' src='https://websitedemos.net/construction-company-02/wp-content/uploads/sites/977/2021/11/service-1.jpg' alt='preview' />
              <h1>Land Mining</h1>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div className="flex column">
              <img className='image' src='https://websitedemos.net/construction-company-02/wp-content/uploads/sites/977/2021/11/service-2.jpg' alt='preview' />
              <h1>Building Staffs</h1>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div className="flex column">
              <img className='image' src='https://websitedemos.net/construction-company-02/wp-content/uploads/sites/977/2021/11/service-3.jpg' alt='preview' />
              <h1>Material Supply</h1>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div className="flex column">
              <img className='image' src='https://websitedemos.net/construction-company-02/wp-content/uploads/sites/977/2021/11/services-4.jpg' alt='preview' />
              <h1>Consultancy</h1>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div className="flex column">
              <img className='image' src='https://websitedemos.net/construction-company-02/wp-content/uploads/sites/977/2021/11/services-6.jpg' alt='preview' />
              <h1>Architecture</h1>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div className="flex column">
              <img className='image' src='https://websitedemos.net/construction-company-02/wp-content/uploads/sites/977/2021/11/services-5.jpg' alt='preview' />
              <h1>Crane Service</h1>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
          </div>
        </div>
    )
}

export default ProcessSection;