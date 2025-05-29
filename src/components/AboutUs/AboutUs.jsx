import React from "react";
import "./AboutUs.css";
import MarqueeImages from "../MarqueeImages/MarqueeImages";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  const leftImages = [
    {
      imageUrl:
        "https://i.postimg.cc/sfQTRY64/Whats-App-Image-2025-05-29-at-12-55-26-PM.jpg",
    },
    {
      imageUrl:
        "https://i.postimg.cc/50GpCy0z/Whats-App-Image-2025-05-29-at-12-55-44-PM.jpg",
    },
    {
      imageUrl:
        "https://i.postimg.cc/QM86LvwF/Whats-App-Image-2025-05-29-at-12-55-55-PM.jpg",
    },
  ];

  return (
    <div className="aboutus-wrapper">
      <div className="aboutus-container">
        <div className="aboutus-content">
          <div className="aboutus-title">
            <h1>About Us</h1>
          </div>

          {/* Marquee Images - Full Width */}
        </div>
      </div>

      <div className="marquee-fullwidth">
        <MarqueeImages images={leftImages} direction="right" />
      </div>

      <div className="aboutus-container">
        <div className="aboutus-box">
          <p className="intro">
            Welcome to{" "}
            <span className="highlight">Shre Mandava Jewellerss</span> — where
            heritage meets elegance.
          </p>

          <div className="aboutus-text">
            <p>
              With a proud presence in <span className="city">Hyderabad</span>{" "}
              and <span className="city">Bangalore</span>, we bring you the
              finest collections of <span className="gold">Gold</span>,{" "}
              <span className="silver">Silver</span>, and{" "}
              <span className="diamond">Diamond</span> jewellery, crafted with
              unmatched artistry and devotion.
            </p>
            <p>
              From timeless traditional designs to contemporary pieces that
              speak to modern sensibilities, each creation at Shre Mandava
              Jewellers reflects a legacy of trust, purity, and perfection.
            </p>
            <p>
              Whether you're celebrating a milestone, a festival, or simply
              yourself — our jewellery makes every moment shine brighter.
            </p>
            <p className="closing">
              Step into our stores or explore our exclusive collections online —
              and experience the brilliance of jewellery that tells your story.
            </p>
          </div>

          <div className="locations">
            <div className="location-card hyderabad">
              <h3>Hyderabad</h3>
              <p>Experience our heritage collection in the heart of the city</p>
            </div>
            <div className="location-card bangalore">
              <h3>Bangalore</h3>
              <p>Discover contemporary elegance in India's silicon valley</p>
            </div>
          </div>

          <div className="cta">
            <button onClick={navigate("/products")}>
              Explore Our Collections
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
