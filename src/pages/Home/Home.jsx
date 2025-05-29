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
              "https://i.postimg.cc/FFMW9hK6/Whats-App-Image-2025-05-29-at-10-32-35-PM.jpg",
          },
          {
            imageUrl:
              "https://i.postimg.cc/hGY8p0zY/Whats-App-Image-2025-05-29-at-10-32-47-PM.jpg",
          },
          {
            imageUrl:
              "https://i.postimg.cc/PJsWkrMz/Whats-App-Image-2025-05-29-at-6-00-50-PM-2.jpg",
          },
          {
            imageUrl:
              "https://i.postimg.cc/kgtJQbDM/Whats-App-Image-2025-05-29-at-12-37-58-PM-1.jpg",
          },

          {
            imageUrl:
              "https://i.postimg.cc/LXCLW8Zs/Whats-App-Image-2025-05-29-at-6-00-49-PM-2.jpg",
          },
          {
            imageUrl:
              "https://i.postimg.cc/Hngyhvp6/Whats-App-Image-2025-05-29-at-10-34-37-PM.jpg",
          },
          {
            imageUrl:
              "https://i.postimg.cc/J4VR5nVR/Whats-App-Image-2025-05-29-at-12-37-58-PM.jpg",
          },
          {
            imageUrl:
              "https://i.postimg.cc/KztBGhjP/Whats-App-Image-2025-05-29-at-11-15-15-PM.jpg",
          },
        ]}
        direction="left"
      />
    </div>
  );
};

export default Home;
