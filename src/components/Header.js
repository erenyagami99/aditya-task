import React from "react";
import SocialMedia from "./common/SocialMedia";

const Header = () => {
  return (
    <div className="header">
      <div className="width-70 flex center-div space-between items-center">
        <div style={{ width: "100px" }} className="flex">
          <img className="logo" src="/images/urban-logo.png" alt="/logo" />
          <h1 className="white font-20" style={{ paddingLeft: "10px" }}>
            URBAN NEST
          </h1>
        </div>

        <p className="orange-text contact-text" style={{ fontWeight: 600 }}>
          Make a call: +1 (212) 255-5511
        </p>

        <SocialMedia parentClass="special-icon" />
        <img
          style={{ display: "none" }}
          className="menu-icon"
          src="/images/menu-icon.png"
          alt="menu"
        />
      </div>
    </div>
  );
};

export default Header;
