import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about">
      {/* About Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>About Aajini Fancies</h1>
            <p>Your trusted neighborhood shop in the heart of Guruvayoor</p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Aajini Fancies was established with a simple mission: to provide quality products 
                and exceptional service to the wonderful community of Guruvayoor. Located in the 
                bustling area of East Nada, we have become a trusted destination for families 
                and individuals seeking reliable shopping experiences.
              </p>
              <p>
                What started as a small venture has grown into a comprehensive store that caters 
                to diverse needs. We understand the importance of having a reliable local shop 
                where customers can find what they need without compromise on quality or service.
              </p>
              <p>
                Our commitment goes beyond just selling products – we aim to build lasting 
                relationships with our customers by understanding their needs and exceeding 
                their expectations every single day.
              </p>
            </div>
            <div className="story-image">
              <div className="placeholder-image">
                <span>Our Journey</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="our-values">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h3>Quality First</h3>
              <p>
                We carefully select every product in our inventory to ensure our customers 
                receive only the best quality items that offer great value for money.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Customer Trust</h3>
              <p>
                Building and maintaining trust with our customers is at the core of everything 
                we do. We believe in honest dealings and transparent pricing.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🏘️</div>
              <h3>Community Focus</h3>
              <p>
                As a local business, we're deeply committed to serving our community and 
                contributing to the growth and prosperity of Guruvayoor.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>
                We continuously adapt and improve our services to meet the evolving needs 
                of our customers while maintaining our traditional values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Service Area */}
      <section className="location-service">
        <div className="container">
          <div className="location-content">
            <div className="location-info">
              <h2>Our Location</h2>
              <div className="address-card">
                <div className="address-icon">📍</div>
                <div className="address-details">
                  <h3>Aajini Fancies</h3>
                  <p>East Nada, Guruvayoor</p>
                  <p>Thrissur, Kerala 680103</p>
                </div>
              </div>
              <p>
                Strategically located in East Nada, we're easily accessible to customers 
                from all parts of Guruvayoor and surrounding areas. Our prime location 
                ensures convenience for daily shopping needs.
              </p>
            </div>
            <div className="service-area">
              <h2>Service Areas</h2>
              <div className="areas-list">
                <div className="area-item">🏪 Guruvayoor Center</div>
                <div className="area-item">🏘️ East Nada</div>
                <div className="area-item">🏡 West Nada</div>
                <div className="area-item">🌳 Temple Surroundings</div>
                <div className="area-item">🚗 Adjacent Communities</div>
                <div className="area-item">📦 Home Delivery Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <div className="container">
          <h2 className="section-title">Why Choose Aajini Fancies?</h2>
          <div className="choose-content">
            <div className="choose-list">
              <div className="choose-item">
                <div className="choose-number">01</div>
                <div className="choose-text">
                  <h3>Local Expertise</h3>
                  <p>Deep understanding of local preferences and needs</p>
                </div>
              </div>
              <div className="choose-item">
                <div className="choose-number">02</div>
                <div className="choose-text">
                  <h3>Personal Service</h3>
                  <p>Friendly, personalized attention to every customer</p>
                </div>
              </div>
              <div className="choose-item">
                <div className="choose-number">03</div>
                <div className="choose-text">
                  <h3>Competitive Pricing</h3>
                  <p>Fair prices with great value across all product categories</p>
                </div>
              </div>
              <div className="choose-item">
                <div className="choose-number">04</div>
                <div className="choose-text">
                  <h3>Convenient Location</h3>
                  <p>Easily accessible location in the heart of East Nada</p>
                </div>
              </div>
            </div>
            <div className="choose-image">
              <div className="placeholder-image">
                <span>Happy Customers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Visit Us Today!</h2>
            <p>Experience the difference of shopping at Aajini Fancies</p>
            <div className="cta-buttons">
              <button className="btn-primary">Get Directions</button>
              <button className="btn-secondary">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;