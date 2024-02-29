import React from "react";

const Stats=()=>{
    return(
        <div className='second-div'>
          <div className='orange-div width-full flex column justify-center'>
            <p>Enter the details here</p>
            <h1>Enter the heading here</h1>
            <p>Enter the remaining Details here</p>
            <button className='black-button'>Black button</button>
          </div>
          <div className='width-full white-div flex column justify-center'>
            <div className='flex space-between' style={{ borderBottom: "1px solid gray" }}>
              <div>
                <h1>512</h1>
                <p>Number of Goods</p>
              </div>
              <div>
                <h1>512</h1>
                <p>Number of Goods</p>
              </div>
            </div>
            <div className='flex space-between'>
              <div>
                <h1>19</h1>
                <p>Number of Goods</p>
              </div>
              <div>
                <h1>10,223</h1>
                <p>Number of Goods</p>
              </div>
            </div>
          </div>
        </div>
    )
}
export default Stats;