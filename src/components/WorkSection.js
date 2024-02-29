import React from "react";

const WorkSection = () => {
    return(
    <div style={{padding:"40px 0"}}>
        <div className='width-70 center-div flex column'>
            <h1>Heading</h1>
            <div className='width-full space-between flex items-center' style={{padding:"40px 0"}}>
                <h1>Second Heading</h1>
                <button className='button'>Click Here</button>
            </div>
        </div>
        <div className='width-full flex justify-center banner-container' style={{ color: "white" }}>         
                <div className='first-construction-div'>
                    <h1>Science Lab Building</h1>
                    <p>New York, USA</p>
                </div>
                <div className='second-construction-div'>
                    <h1>Long Gate Bridge</h1>
                    <p>Malmo, SE</p>
                </div>
        
        
                <div className='third-construction-div'>
                    <h1>Enix Lawyer Building</h1>
                    <p>Toronto, CA</p>
                </div>
                <div className='fourth-construction-div'>
                    <h1>Deep Sea Bridge</h1>
                    <p>Athens, GR</p>
                </div>
            
        </div>
    </div>
    )
}

export default WorkSection;