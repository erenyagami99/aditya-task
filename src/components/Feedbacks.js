import React from "react";
import Persons from "../Data";

const Feedback=()=>{
    return(
        <div className='text-center width-70 center-div'>
          <h1>What Our Clients Say</h1>
          <h1>Testimonials</h1>
          <div className='details-div-container'>

            {Persons.map((person) => (
              <div className='details-div' key={person.id}>
                <img className='person-icon' src={person.image} alt='image' />
                <p className='orange-text'>{person.name}</p>
                <p> {person.details}</p>
              </div>
            ))}
          </div>
        </div>
    )
}

export default Feedback