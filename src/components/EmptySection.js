import React from "react";

const EmptySection=()=>{
    return(
        <div className='third-div empty-container'>
        <h1>Sustainablity</h1>
        <div className='flex empty-heading'>
          <h1>Transform Communities Across the Globe</h1>
          <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. </p>
        </div>
        <div className='card-container center-div'>
          <div className='card'>
            <h1>Canada</h1>
            <p>Details of this card</p>
          </div>
          <div className='card'>
            <h1>United States</h1>
            <p>Details of this card</p>
          </div>
          <div className='card'>
            <h1>Australia</h1>
            <p>Details of this card</p>
          </div>
        </div>
        <button style={{ marginTop: "50px" }} className='button center-div'>
          View Offices
        </button>
        <div className='text-center'>
          <h1>About Founders</h1>
          <h1>We Are Leading International Company In The World</h1>
        </div>
      </div>
    )
}

export default EmptySection;