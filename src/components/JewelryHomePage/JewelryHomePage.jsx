import React from "react";
import "./JewelryHomePage.css";
const JewelryHomePage = () => {
  const collections = [
    {
      id: 1,
      title: "Gold Collection",
      description:
        "Timeless elegance in pure gold, crafted with traditional artistry",
      image:
        "https://i.pinimg.com/736x/2f/f2/39/2ff2393c294130759881e34904a110e3.jpg",
      category: "Gold",
      className: "gold",
    },
    {
      id: 2,
      title: "Diamond Collection",
      description: "Brilliant diamonds that capture light and hearts alike",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=300&fit=crop",
      category: "Diamond",
      className: "diamond",
    },
    {
      id: 3,
      title: "Silver Collection",
      description: "Contemporary silver pieces with modern sophistication",
      image:
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=300&fit=crop",
      category: "Silver",
      className: "silver",
    },
    {
      id: 4,
      title: "Custom Jewellery",
      description: "Handcrafted pieces designed uniquely for your story",
      image:
        "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=300&fit=crop",
      category: "Custom",
      className: "custom",
    },

    {
      id: 5,
      title: "Astrology Stone",
      description:
        "Precise stones selected to align with your zodiac and enhance your energies",
      image:
        "https://i.pinimg.com/736x/39/07/6e/39076ec09093ad23f20cb951f9d0434e.jpg",
      category: "Astrology",
      className: "astrology",
    },
  ];

  const features = [
    {
      title: "Heritage Craftsmanship",
      description:
        "Decades of traditional artistry passed down through generations",
      icon: "crown",
    },
    {
      title: "Purity Guaranteed",
      description: "100% certified pure gold, silver, and authentic diamonds",
      icon: "shield",
    },
    {
      title: "Custom Designs",
      description: "Personalized jewelry crafted to tell your unique story",
      icon: "heart",
    },
  ];

  const renderIcon = (iconName, className = "") => {
    const iconProps = {
      className,
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    };

    switch (iconName) {
      case "sparkles":
        return (
          <svg {...iconProps}>
            <path d="M5 3l3.057-3L5 0l3.057 3L5 6l-3.057-3L5 3zM19 3l2.121-2.121L19 0l2.121 2.121L19 5.243l-2.121-2.122L19 3zM13.314 17.314l-1.414-1.414L13.314 14.486l1.414 1.414-1.414 1.414zM6 18l1.5-1.5L6 15l1.5 1.5L6 18l-1.5-1.5L6 18z" />
          </svg>
        );
      case "mappin":
        return (
          <svg {...iconProps}>
            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case "star":
        return (
          <svg {...iconProps} fill="currentColor" stroke="currentColor">
            <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        );
      case "crown":
        return (
          <svg {...iconProps}>
            <path d="M5 13l4 4L19 7" />
          </svg>
        );
      case "shield":
        return (
          <svg {...iconProps}>
            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case "heart":
        return (
          <svg {...iconProps}>
            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="jewelry-home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <h1 className="hero-title">Shre Mandava Jewellerss</h1>
          <div class="arch-container">
            <img
              src="https://i.postimg.cc/Bn86mz70/Whats-App-Image-2025-05-29-at-12-55-36-PM.jpg"
              alt="Jewelry Display"
              class="arch-image"
            />
          </div>
          <p className="hero-description">
            Where heritage meets elegance. Discover the finest collections of{" "}
            <span className="hero-highlight gold">Gold</span>,{" "}
            <span className="hero-highlight silver">Silver</span>, and{" "}
            <span className="hero-highlight diamond">Diamond</span> jewellery,
            crafted with unmatched artistry and devotion.
          </p>
          <div className="hero-locations">
            <div className="location-item">
              {renderIcon("mappin", "location-icon")}
              <span className="location-text">Hyderabad</span>
            </div>
            <div className="location-item">
              {renderIcon("mappin", "location-icon")}
              <span className="location-text">Bangalore</span>
            </div>
          </div>
          <button className="hero-button">Explore Collections</button>
        </div>
      </section>

      {/* Collections Section */}
      <section className="collections-section">
        <div className="collections-container">
          <div className="section-header">
            <h2 className="section-title">Our Premium Collections</h2>
            <p className="section-description">
              From timeless traditional designs to contemporary pieces that
              speak to modern sensibilities, each creation reflects a legacy of
              trust, purity, and perfection.
            </p>
          </div>

          <div className="collections-grid">
            {collections.map((item) => (
              <div
                key={item.id}
                className={`collection-card ${item.className}`}
              >
                <img src={item.image} alt={item.title} className="card-image" />
                <div className="card-overlay" />
                <div className="card-content">
                  <div className="card-category">
                    {renderIcon("star", "card-star")}
                    <span className="card-category-text">{item.category}</span>
                  </div>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-description">{item.description}</p>
                </div>
                <div className="card-icon">
                  <div className="card-icon-bg">
                    {renderIcon("sparkles", "card-sparkle")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="features-container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-description-why">
              Experience the brilliance of jewelry that tells your story
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{renderIcon(feature.icon)}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default JewelryHomePage;
