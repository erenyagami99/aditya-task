import React, { useState } from "react";

const iconImages = [
  { orange: "/images/facebook-icon.png", white: "/images/white-facebook.png" },
  { orange: "/images/twitter-icon.png", white: "/images/white-twitter.png" },
  { orange: "/images/whatsapp-icon.png", white: "/images/white-whatsapp.png" },
  { orange: "/images/linked-icon.png", white: "/images/white-linked.png" },
];

const SocialMedia = ({ parentClass }) => {
  const [hoveredIcons, setHoveredIcons] = useState([
    false,
    false,
    false,
    false,
  ]);

  const handleMouseEnter = (index) => {
    setHoveredIcons((prevState) => {
      return prevState.map((prev, idx) => idx === index);
    });
  };

  const handleMouseLeave = () => {
    setHoveredIcons([false, false, false, false]);
  };
  return (
    <div className={"image-container " + parentClass + " flex"}>
      {iconImages.map((images, index) => (
        <img
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave()}
          key={index}
          src={hoveredIcons[index] ? images.white : images.orange}
          alt={`icon-${index}`}
        />
      ))}
    </div>
  );
};

export default SocialMedia;
