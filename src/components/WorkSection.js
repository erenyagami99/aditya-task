import React from "react";

const WorkSection = () => {
  return (
    <div style={{ padding: "80px 0" }}>
      <div className="width-70 center-div flex column">
        <h1 className="blue-text-heading">About Founders</h1>
        <div className="width-full space-between flex items-center button-heading">
          <h1 className="blue-heading font-40">Our Latest Works</h1>
          <button className="button">Click Here</button>
        </div>
      </div>
      <div
        className="width-full flex justify-center banner-container"
        style={{ color: "white" }}
      >
        <div className="first-construction-div construction-image width-full">
          <div className="padding-25">
            <h1>Science Lab Building</h1>
            <p>New York, USA</p>
          </div>
        </div>
        <div className="second-construction-div construction-image width-full">
          <div className="padding-25">
            <h1>Long Gate Bridge</h1>
            <p>Malmo, SE</p>
          </div>
        </div>

        <div className="third-construction-div construction-image width-full">
          <div className="padding-25">
            <h1>Enix Lawyer Building</h1>
            <p>Toronto, CA</p>
          </div>
        </div>
        <div className="fourth-construction-div construction-image width-full">
          <div className="padding-25">
            <h1>Deep Sea Bridge</h1>
            <p>Athens, GR</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
