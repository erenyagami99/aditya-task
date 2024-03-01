import React from "react";

const BannerSection = () => {
  return (
    <div className="fourth-div">
      <div className="first-image banner">
        <div className="banner-image">
          <h1 className="orange-text">Sustainablity</h1>
          <h1 className="font-40 white">Committed to Keep People Healthy</h1>
          <p className="white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque in ipsum id orci porta dapibus.{" "}
          </p>
          <button className="button">GET IN TOUCH</button>
        </div>
      </div>
      <div className="second-image banner">
        <div className="banner-image blue-heading">
          <h1 className="blue-text-heading">We Follow Best Practices</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque in ipsum id orci porta dapibus.{" "}
          </p>
          <div className="flex column gap-10">
            <div className="flex items-center gap-10">
              <img
                className="image-icon"
                src="/images/recycle-icon.png"
                alt="/"
              />
              <h1 className="font-20">Sustainablity</h1>
            </div>
            <div className="flex items-center gap-10">
              <img
                className="image-icon"
                src="/images/clock-icon.png"
                alt="/"
              />
              <h1 className="font-20">Project On Time</h1>
            </div>
            <div className="flex items-center gap-10">
              <img
                className="image-icon"
                src="/images/computer-icon.png"
                alt="/"
              />
              <h1 className="font-20">Modern Technology</h1>
            </div>
            <div className="flex items-center gap-10">
              <img
                className="image-icon"
                src="/images/pencil-icon.png"
                alt="/"
              />
              <h1 className="font-20">Latest Designs</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
