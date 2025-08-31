import React from 'react';
import { useScrollToTop } from '../hooks/useScrollToTop';
import './Contact.css';

const Contact = () => {
  // Use custom hook to scroll to top
  useScrollToTop();

  return (
    <>
      {/* Contact Header */}
      <section className="contact-header">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">Get in touch to discuss your 3D printing project</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>
                Ready to bring your 3D printing ideas to life? We're here to help! 
                Reach out to us through any of the channels below, and we'll get back to you promptly.
              </p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <div className="contact-details">
                    <h3>WhatsApp</h3>
                    <p>+91 505 629 86</p>
                    <a 
                      href="https://wa.me/9150562986?text=Hi! I'm interested in your 3D printing services." 
                      className="btn btn-whatsapp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-whatsapp"></i> Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">
                    <i className="fab fa-instagram"></i>
                  </div>
                  <div className="contact-details">
                    <h3>Instagram</h3>
                    <p>@casty_labz</p>
                    <a 
                      href="https://www.instagram.com/casty_labz/" 
                      className="btn btn-instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram"></i> Follow Us
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-details">
                    <h3>Email</h3>
                    <p>info@castylabz.com</p>
                    <a 
                      href="mailto:info@castylabz.com" 
                      className="btn btn-email"
                    >
                      <i className="fas fa-envelope"></i> Send Email
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h2>Send Us a Message</h2>
              <p>Have a specific project in mind? Tell us about it!</p>
              
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input type="text" id="name" name="name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" />
              </div>
              
              <div className="form-group">
                <label htmlFor="project">Project Description *</label>
                <textarea id="project" name="project" rows="5" required 
                  placeholder="Tell us about your 3D printing project, requirements, and any specific details..."></textarea>
              </div>
              
              <div className="form-group">
                <label htmlFor="category">Product Category</label>
                <select id="category" name="category">
                  <option value="">Select a category</option>
                  <option value="keychains">Keychains</option>
                  <option value="lamps">Lamps</option>
                  <option value="decor">Decor</option>
                  <option value="gifts">Gifts</option>
                  <option value="custom">Custom Orders</option>
                </select>
              </div>
              
              <button type="submit" className="btn btn-primary">
                <i className="fas fa-paper-plane"></i> Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="business-hours">
        <div className="container">
          <h2>Business Hours</h2>
          <div className="hours-grid">
            <div className="hours-item">
              <span className="day">Monday - Friday</span>
              <span className="time">9:00 AM - 6:00 PM</span>
            </div>
            <div className="hours-item">
              <span className="day">Saturday</span>
              <span className="time">10:00 AM - 4:00 PM</span>
            </div>
            <div className="hours-item">
              <span className="day">Sunday</span>
              <span className="time">Closed</span>
            </div>
          </div>
          <p className="hours-note">
            * Response times may vary. For urgent inquiries, please use WhatsApp for immediate assistance.
          </p>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="whatsapp-float">
        <a 
          href="https://wa.me/9150562986?text=Hi! I'm interested in your 3D printing services." 
          target="_blank" 
          className="whatsapp-btn"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </>
  );
};

export default Contact;
