import React from "react";

const EmptySection = () => {
  return (
    <div className="third-div width-70 empty-container">
      <h1 className="blue-text-heading">Sustainablity</h1>
      <div className="flex empty-heading">
        <h1 className="blue-heading font-40">
          Transform Communities Across the Globe
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget
          consectetur sed, convallis at tellus.{" "}
        </p>
      </div>
      <div className="card-container center-div flex width-full">
        <div className="card">
          <div>
            <h1 className="blue-heading font-40">Canada</h1>
            <p>4446 Noble Rd, Cortes Island</p>
          </div>
          <div className="flex items-center gap-10">
            <p>DIRECTION</p>
            <img
              className="icon-image"
              src="/images/right-arrow.png"
              alt="arrow"
            />
          </div>
        </div>
        <div className="card">
          <div>
            <h1 className="blue-heading font-40">United States</h1>
            <p>2367 Speers Road, Brampton</p>
          </div>
          <div className="flex items-center gap-10">
            <p>DIRECTION</p>
            <img
              className="icon-image"
              src="/images/right-arrow.png"
              alt="arrow"
            />
          </div>
        </div>
        <div className="card">
          <div>
            <h1 className="blue-heading font-40">Australia</h1>
            <p>3851 49th Avenue, Kugluktuk</p>
          </div>
          <div className="flex items-center gap-10">
            <p>DIRECTION</p>
            <img
              className="icon-image"
              src="/images/right-arrow.png"
              alt="arrow"
            />
          </div>
        </div>
      </div>
      <button style={{ margin: "50px auto" }} className="button center-div">
        View Offices
      </button>
      <div className="text-center founder-heading center-div gap-10 flex column">
        <h1 className="blue-text-heading">About Founders</h1>
        <h1 className="blue-heading font-40">
          We Are Leading International Company In The World
        </h1>
      </div>
    </div>
  );
};

export default EmptySection;
