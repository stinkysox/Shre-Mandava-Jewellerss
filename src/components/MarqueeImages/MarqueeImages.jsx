import React from "react";
import Marquee from "react-fast-marquee";
import "./MarqueeImages.css";

const MarqueeImages = ({ images = [], direction = "left" }) => {
  // Generate empty placeholders if no images present
  const generateEmptyImages = (count = 5) =>
    Array.from({ length: count }, (_, i) => (
      <div key={`empty-${i}`} className="empty-img" />
    ));

  // Render images with lazy loading & descriptive alt text
  const renderImages = () => {
    if (!images || images.length === 0) return generateEmptyImages();

    return images.map((imgObj, idx) => (
      <img
        key={`${direction}-${idx}`}
        className="marquee-img"
        src={imgObj.imageUrl}
        alt={`${direction === "right" ? "Right" : "Left"} Slide Image ${
          idx + 1
        }`}
        loading="lazy"
        draggable={false}
      />
    ));
  };

  return (
    <div className="marquee-container">
      <Marquee
        speed={50}
        gradient={false}
        pauseOnHover={false}
        direction={direction}
      >
        {renderImages()}
      </Marquee>
    </div>
  );
};

export default MarqueeImages;
