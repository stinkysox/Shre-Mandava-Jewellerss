import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import "./Products.css";

const dummyImages = [
  "https://i.postimg.cc/fbVwvqC9/Whats-App-Image-2025-05-29-at-6-00-49-PM-1.jpg",
  "https://i.postimg.cc/J4YvQr2p/Whats-App-Image-2025-05-29-at-6-00-49-PM.jpg",
  "https://i.postimg.cc/1zhWWfcr/Whats-App-Image-2025-05-29-at-6-00-48-PM.jpg",
  "https://i.postimg.cc/7hfMPknL/Whats-App-Image-2025-05-29-at-6-00-47-PM-1.jpg",
];

const Products = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="products-gallery-wrapper">
      <h2 className="products-title">Our Products</h2>

      <p className="products-description">
        At <strong>Shre Mandava Jewellers</strong>, we take pride in offering a
        wide array of finely crafted jewelry that blends timeless tradition with
        modern sophistication. Our collections are regularly updated with fresh
        designs, inspired by global trends and local heritage. Whether you're
        looking for statement gold pieces, elegant silver ornaments, or
        exquisite diamond jewelry, you'll find designs that match your taste —
        all at competitive prices. Experience quality, style, and trust under
        one roof.
      </p>

      <div className="products-grid">
        {dummyImages.map((img, index) => (
          <div
            key={index}
            className="product-card"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img}
              alt={`Product ${index + 1}`}
              className="product-img"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <div className="instagram-section">
        <a
          href="https://www.instagram.com/shre_mandava_jewellerss"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-button"
        >
          <FaInstagram className="instagram-icon" />
          View more collections on Instagram
        </a>
      </div>

      {selectedImage && (
        <div className="popup-overlay" onClick={() => setSelectedImage(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Selected Product"
              className="popup-img"
            />
            <button
              className="close-btn"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
