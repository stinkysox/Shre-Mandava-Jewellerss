import React, { useState } from "react";
import "./Contact.css";

const galleryImages = [
  "https://i.postimg.cc/Hn8cP4gS/Whats-App-Image-2025-05-29-at-6-00-52-PM.jpg",
];

const Contact = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-description">
          At Shre Mandava Jewellers, we are committed to providing the best
          service to our valued customers. Whether you prefer to connect with us
          over the phone or visit our store in person, we are here to assist you
          with warmth and professionalism.
        </p>

        <p className="branch-intro">
          <strong>We have two branches:</strong>
        </p>

        <div className="contact-info">
          <p>
            <strong>Phone:</strong> +91 9121415999
          </p>
          <p>
            <strong>Email:</strong> shremandavajewellerss@gmail.com
          </p>
          <p>
            <strong>Hyderabad Branch:</strong> Plot no 69, Varahi Nilayam,
            Sanjeeva Reddy Nagar, Hyderabad, 500033
          </p>
          <p>
            <strong>Bangalore Branch:</strong> No:21/1, Ground Floor,
            Marathahalli Flyover Service Road, Opposite Purva Function Square,
            Bangalore - 560037
          </p>
        </div>

        <p className="contact-welcome">
          Feel free to reach out—we're ready to welcome you with open arms and
          exquisite collections!
        </p>

        {/* Gallery Section */}
        <div className="contact-gallery">
          <div className="gallery-grid">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="gallery-card"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="gallery-img"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Follow Us Button */}
        <div className="follow-us">
          <a
            href="https://www.instagram.com/shremandavajewellerss/"
            target="_blank"
            rel="noopener noreferrer"
            className="insta-btn"
          >
            Follow Us on Instagram
          </a>
        </div>

        {/* Modal Popup */}
        {selectedImage && (
          <div className="popup-overlay" onClick={() => setSelectedImage(null)}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImage}
                alt="Selected Gallery"
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
    </section>
  );
};

export default Contact;
