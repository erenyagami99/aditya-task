import React from "react";

const Stats = () => {
  return (
    <div className="second-div">
      <div className="orange-div flex column space-between">
        <h1 className="blue-text-heading">Build Your Dream</h1>
        <h1 className="blue-heading font-40">25 Years of Undefeated Success</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget
          consectetur sed, convallis .
        </p>
        <button className="black-button">Work With Us</button>
      </div>
      <div className="width-full white-div flex column justify-center">
        <div className="flex space-between">
          <div>
            <h1 className="blue-heading font-40">512&#43;</h1>
            <p>Successfully Project Finished.</p>
          </div>
          <div>
            <h1 className="blue-heading font-40">2&#43;</h1>
            <p>Years of experience with proud</p>
          </div>
        </div>
        <div className="flex space-between">
          <div>
            <h1 className="blue-heading">19&#43;</h1>
            <p>Revenue in 2017 investment</p>
          </div>
          <div>
            <h1 className="blue-heading">10,223&#43;</h1>
            <p>Colleagues & counting more daily</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Stats;
