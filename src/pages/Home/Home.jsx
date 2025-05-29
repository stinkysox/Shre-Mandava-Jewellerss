import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import JewelryHomePage from "../../components/JewelryHomePage/JewelryHomePage";
import MarqueeImages from "../../components/MarqueeImages/MarqueeImages";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <JewelryHomePage />
      <MarqueeImages
        images={[
          {
            imageUrl:
              "https://i.postimg.cc/J4VR5nVR/Whats-App-Image-2025-05-29-at-12-37-58-PM.jpg",
          },
          {
            imageUrl:
              "https://i.postimg.cc/wvFgq542/Whats-App-Image-2025-05-29-at-12-37-57-PM.jpg",
          },
          {
            imageUrl:
              "https://i.postimg.cc/rmqq2Zjz/Whats-App-Image-2025-05-29-at-12-37-57-PM-1.jpg",
          },

          {
            imageUrl:
              "https://i.postimg.cc/kgtJQbDM/Whats-App-Image-2025-05-29-at-12-37-58-PM-1.jpg",
          },
        ]}
        direction="left"
      />
    </div>
  );
};

export default Home;
