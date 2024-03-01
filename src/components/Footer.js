import React from "react";
import SocialMedia from "./common/SocialMedia";

const Footer = () => {
  return (
    <div className="footer">
      <div
        className="flex space-between center-div footer-container"
        style={{ borderBottom: "1px solid gray" }}
      >
        <div className="width-70 flex center-div footer-details">
          <div className="footer-section">
            <div className="single-footer">
              <h1 className="font-20">Build With Urban Nest</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque in ipsum id orc.
              </p>
              <div>
                <p>Mon - Sat 8:00 - 17:30,</p>
                <p>Sunday - CLOSED</p>
              </div>
            </div>
            <div className="single-footer">
              <h1 className="font-20">Our Services</h1>
              <div>
                <p>Chemical Engineering Projects</p>
                <p>Mining Engineering Construction</p>
                <p>Engineering Welding Engineering</p>
                <p>Welding Engineering</p>
                <p>Space Program XYZ</p>
              </div>
            </div>
          </div>
          <div className="footer-section">
            <div className="single-footer">
              <h1 className="font-20">Office in Canada</h1>
              <p>7300-7398 Colonial Rd, Brooklyn, NY 11209</p>
              <div>
                <p>(123) 1234-567-8901</p>
                <p>(123) 1234-567-8901</p>
                <p>office@example.com</p>
                <p>office@example.com</p>
              </div>
            </div>
            <div className="single-footer">
              <h1 className="font-20">Our Locations</h1>
              <div>
                <p>United States</p>
                <p>Australia</p>
                <p>Canada</p>
                <p>Europe</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="width-70 flex space-between center-div items-center copy-div">
        <p>Copyrght @ 2024 Construction Company</p>
        <SocialMedia />
      </div>
    </div>
  );
};

export default Footer;
