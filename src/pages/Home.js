import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useScrollToTop } from '../hooks/useScrollToTop';
import './Home.css';

const Home = () => {
  // Use custom hook to scroll to top
  useScrollToTop();

  // Get featured products (first 3 products)
  const featuredProducts = products.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Transform Your Ideas Into Reality</h1>
            <p className="hero-subtitle">
              Professional 3D printing services with precision, quality, and creativity. 
              From custom keychains to decorative pieces, we bring your vision to life.
            </p>
            <div className="hero-buttons">
              <Link to="/products" className="btn btn-primary">
                View Products
              </Link>
              <a 
                href="https://wa.me/9150562986?text=Hi! I'm interested in your 3D printing services." 
                className="btn btn-secondary" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i> Get Quote
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="3D Printing Process" 
              className="hero-img"
            />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro">
        <div className="container">
          <div className="intro-content">
            <h2 className="section-title">Why Choose Our 3D Printing Services?</h2>
            <div className="intro-grid">
              <div className="intro-card">
                <div className="intro-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <h3>Fast Turnaround</h3>
                <p>Quick printing times with detailed time estimates for every project</p>
              </div>
              <div className="intro-card">
                <div className="intro-icon">
                  <i className="fas fa-gem"></i>
                </div>
                <h3>Premium Quality</h3>
                <p>High-grade PLA materials ensuring durability and perfect finish</p>
              </div>
              <div className="intro-card">
                <div className="intro-icon">
                  <i className="fas fa-palette"></i>
                </div>
                <h3>Custom Designs</h3>
                <p>Personalized creations tailored to your specific requirements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <div className="products-grid">
            {featuredProducts.map((product, index) => (
              <div key={product.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div className="featured-cta">
            <Link to="/products" className="btn btn-primary">
              View All Products
            </Link>
          </div>
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

export default Home;
