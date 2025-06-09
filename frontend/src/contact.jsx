import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="contact">
      {/* Contact Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1>Contact Aajini Fancies</h1>
            <p>We're here to help with all your shopping needs</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-details">
              <h2>Get In Touch</h2>
              <p>
                Have questions about our products or services? Need assistance with your order? 
                We're always happy to help! Reach out to us through any of the following methods.
              </p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">📍</div>
                  <div className="method-details">
                    <h3>Visit Our Store</h3>
                    <p>Aajini Fancies</p>
                    <p>East Nada, Guruvayoor</p>
                    <p>Thrissur, Kerala 680103</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">📞</div>
                  <div className="method-details">
                    <h3>Call Us</h3>
                    <p>Anil MK</p>
                    <p><a href="tel:+919633182909">9633182909</a></p>
                    <p>Available during business hours</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">💬</div>
                  <div className="method-details">
                    <h3>WhatsApp</h3>
                    <p>Quick Support & Inquiries</p>
                    <p><a href="https://wa.me/919747040677">9747040677</a></p>
                    <p>Fast response guaranteed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-section">
              <h2>Send Us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button type="submit" className="btn-submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="business-hours">
        <div className="container">
          <h2 className="section-title">Business Hours</h2>
          <div className="hours-grid">
            <div className="hours-card">
              <h3>Store Hours</h3>
              <div className="hours-list">
                <div className="hour-item">
                  <span className="day">Monday - Saturday</span>
                  <span className="time">9:00 AM - 8:00 PM</span>
                </div>
                <div className="hour-item">
                  <span className="day">Sunday</span>
                  <span className="time">10:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>

            <div className="hours-card">
              <h3>Phone Support</h3>
              <div className="hours-list">
                <div className="hour-item">
                  <span className="day">Monday - Saturday</span>
                  <span className="time">9:00 AM - 8:00 PM</span>
                </div>
                <div className="hour-item">
                  <span className="day">Sunday</span>
                  <span className="time">10:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>

            <div className="hours-card">
              <h3>WhatsApp Support</h3>
              <div className="hours-list">
                <div className="hour-item">
                  <span className="day">Every Day</span>
                  <span className="time">8:00 AM - 9:00 PM</span>
                </div>
                <div className="hour-item special">
                  <span className="day">Quick responses</span>
                  <span className="time">Usually within 30 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Directions */}
      <section className="location-section">
        <div className="container">
          <div className="location-content">
            <div className="location-info">
              <h2>Find Us</h2>
              <p>
                Aajini Fancies is conveniently located in East Nada, Guruvayoor, making it 
                easily accessible from all parts of the city and surrounding areas.
              </p>
              
              <div className="location-details">
                <div className="detail-item">
                  <strong>Address:</strong>
                  <span>East Nada, Guruvayoor, Thrissur, Kerala 680103</span>
                </div>
                <div className="detail-item">
                  <strong>Landmark:</strong>
                  <span>Near Guruvayoor Temple, East Nada area</span>
                </div>
                <div className="detail-item">
                  <strong>Parking:</strong>
                  <span>Available nearby</span>
                </div>
              </div>

              <div className="direction-buttons">
                <button className="btn-primary">Get Directions</button>
                <button className="btn-secondary">Call Now</button>
              </div>
            </div>

            <div className="map-placeholder">
              <div className="map-container">
                <div className="map-icon">🗺️</div>
                <h3>Interactive Map</h3>
                <p>Click to view detailed directions and location</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What products do you offer?</h3>
              <p>We offer a wide range of quality products including household essentials, personal care items, and specialty products to meet all your daily needs.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer home delivery?</h3>
              <p>Yes, we provide home delivery services within Guruvayoor and surrounding areas. Contact us for delivery details and charges.</p>
            </div>
            <div className="faq-item">
              <h3>What are your payment options?</h3>
              <p>We accept cash, UPI payments, and major debit/credit cards for your convenience.</p>
            </div>
            <div className="faq-item">
              <h3>Can I place orders over WhatsApp?</h3>
              <p>Absolutely! You can place orders, check product availability, and get quick support through our WhatsApp number.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;