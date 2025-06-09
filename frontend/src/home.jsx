import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Aajini Fancies</h1>
          <p className="hero-subtitle">Your One-Stop Shop for Quality Products</p>
          <p className="hero-location">East Nada, Guruvayoor • Thrissur, Kerala</p>
          <div className="hero-buttons">
            <button className="btn-primary">Shop Now</button>
            <button className="btn-secondary">Contact Us</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="placeholder-image">
            <span>Featured Products</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Aajini Fancies?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🛍️</div>
              <h3>Quality Products</h3>
              <p>We offer only the finest quality products carefully selected for our customers.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>Quick and reliable delivery service across Guruvayoor and surrounding areas.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Best Prices</h3>
              <p>Competitive pricing with great value for money on all our products.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Customer Service</h3>
              <p>Dedicated customer support to help you with all your shopping needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Welcome to Aajini Fancies</h2>
              <p>
                Located in the heart of East Nada, Guruvayoor, Aajini Fancies has been serving 
                the local community with quality products and exceptional service. We pride ourselves 
                on being your trusted neighborhood shop for all your daily needs.
              </p>
              <p>
                From household essentials to specialty items, we carefully curate our inventory 
                to ensure you find exactly what you're looking for at competitive prices.
              </p>
              <button className="btn-outline">Learn More About Us</button>
            </div>
            <div className="about-image">
              <div className="placeholder-image">
                <span>Our Store</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="contact-preview">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3>Visit Our Store</h3>
              <p>East Nada, Guruvayoor<br />Thrissur, Kerala 680103</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Call Us</h3>
              <p>Anil MK<br />9633182909</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">💬</div>
              <h3>WhatsApp</h3>
              <p>Quick Support<br />9747040677</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;