import React, { useState } from "react";
import "./Contact.css";

const galleryImages = [
  "https://i.postimg.cc/LXCLW8Zs/Whats-App-Image-2025-05-29-at-6-00-49-PM-2.jpg",
  "https://i.postimg.cc/Hn8cP4gS/Whats-App-Image-2025-05-29-at-6-00-52-PM.jpg",
  "https://i.postimg.cc/gjbXQL2m/Whats-App-Image-2025-05-29-at-6-00-50-PM-3.jpg",
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
        <div className="contact-info">
          <p>
            <strong>Phone:</strong> +91 9121415999
          </p>
          <p>
            <strong>Email:</strong> shremandavajewellerss@gmail.com
          </p>
          <p>
            <strong>Store Address:</strong> Sidhartha Nagar, Kalyan Nagar,
            Hyderabad, Sindh, 500038
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
            href="https://www.instagram.com/shre_mandava_jewellerss"
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
