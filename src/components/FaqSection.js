import React from "react";

const FaqSection =()=>{
    return(
        <div className='width-full faq-div' style={{ marginTop: "200px", paddingBottom: "80px" }}>
          <div className='person-div center-div flex'>
            <div className='faq-form'>
              <h1 className='white'>Request a Quote</h1>
              <p className='orange-text'>Ready to Work Together?</p>
              <div className='flex column' style={{ gap: "30px" }}>
                <input className='input' type='text' placeholder='Answer Here' />
                <input className='input' type='text' placeholder='Answer Here' />
                <input className='input' type='text' placeholder='Answer Here' />
                <textarea type='text' placeholder='Answer Here' rows={10}></textarea>
              </div>
              <button className='button' style={{ marginTop: "20px" }}>Submit</button>
            </div>
            <div className='questions center-div'>
              <h1>Question Here</h1>
              <h1 className='orange-text'>Frequently Asked Questions</h1>
            </div>
          </div>
        </div>
    )
}

export default FaqSection;