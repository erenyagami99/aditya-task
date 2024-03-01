import React from "react";

const Feedback = () => {
  return (
    <div className="text-center width-70 center-div">
      <h1 className="blue-text-heading">What Our Clients Say</h1>
      <h1 className="blue-heading font-40">Testimonials</h1>
      <div className="details-div-container">
        <div className="feed-div flex gap-25">
          <div className="details-div">
            <div>
              <img
                className="person-icon"
                src="https://websitedemos.net/construction-company-02/wp-content/uploads/sites/977/2021/11/h1-team-img-04-100x100-1.png"
                alt="image"
              />
              <h1 className="orange-text">Engineering Manager</h1>
            </div>
            <div>
              <h1>Alice Howard</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
          <div className="details-div">
            <div>
              <img
                className="person-icon"
                src="https://websitedemos.net/construction-company-02/wp-content/uploads/sites/977/2021/11/team-img-04-100x100-1.png"
                alt="image"
              />
              <h1 className="orange-text">Interior Designer</h1>
            </div>
            <div>
              <h1>Interior Designer</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
        </div>
        <div className="feed-div flex gap-25">
          <div className="details-div">
            <div>
              <img
                className="person-icon"
                src="https://websitedemos.net/construction-company-02/wp-content/uploads/sites/977/2021/11/h1-img-02-100x100-1.png"
                alt="image"
              />
              <h1 className="orange-text">Architect</h1>
            </div>
            <div>
              <h1>Ema Romero</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
          <div className="details-div">
            <div>
              <img
                className="person-icon"
                src="https://websitedemos.net/construction-company-02/wp-content/uploads/sites/977/2021/11/h2-team-img-04.png"
                alt="image"
              />
              <h1 className="orange-text">Manager</h1>
            </div>
            <div>
              <h1>Ann Smith</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
