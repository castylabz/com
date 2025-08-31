import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, currentCategory }) => {
  const getDetailUrl = () => {
    const isAbsolute = process.env.PUBLIC_URL && process.env.PUBLIC_URL.startsWith('http');
    const base = isAbsolute ? process.env.PUBLIC_URL : window.location.origin + (process.env.PUBLIC_URL || '');
    const normalized = base.replace(/\/$/, '');
    return `${normalized}/products/${product.id}`;
  };

  const handleWhatsAppOrder = () => {
    const detailUrl = getDetailUrl();
    const message = `Hi! I'm interested in the ${product.name}.\n\nProduct page: ${detailUrl}\nImage: ${product.image}`;
    const whatsappUrl = `https://wa.me/9150562986?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInstagramOrder = async () => {
    const detailUrl = getDetailUrl();
    const message = `Hi! I'm interested in the ${product.name}.\n\nProduct page: ${detailUrl}\nImage: ${product.image}`;
    try {
      await navigator.clipboard.writeText(message);
    } catch (e) {}

    const username = 'casty_labz';
    const deeplink = `instagram://user?username=${username}`;
    const webUrl = `https://www.instagram.com/${username}/`;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      const timeout = setTimeout(() => {
        window.open(webUrl, '_blank');
      }, 800);
      window.location.href = deeplink;
      window.addEventListener('pagehide', () => clearTimeout(timeout), { once: true });
    } else {
      window.open(webUrl, '_blank');
    }
  };

  const fallbackImage = 'data:image/svg+xml;utf8,%3Csvg xmlns=%22http%3A//www.w3.org/2000/svg%22 width=%22500%22 height=%22500%22 viewBox=%220 0 500 500%22%3E%3Crect width=%22500%22 height=%22500%22 fill=%22%23f2f2f2%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23999%22 font-family=%22Arial%2Csans-serif%22 font-size=%2220%22%3ENo image%3C/text%3E%3C/svg%3E';

  return (
    <div className="product-card" data-category={product.category}>
      <div className="product-image">
        <Link to={`/products/${product.id}${currentCategory && currentCategory !== 'all' ? `?category=${encodeURIComponent(currentCategory)}` : ''}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            loading="lazy"
            onError={(e) => {
              try { console.warn('Image failed to load:', product.image); } catch (_) {}
              e.currentTarget.onerror = null;
              e.currentTarget.src = fallbackImage;
            }}
          />
        </Link>
        <div className="product-overlay">
          <span className="product-category">{product.category}</span>
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-name">
          <Link to={`/products/${product.id}${currentCategory && currentCategory !== 'all' ? `?category=${encodeURIComponent(currentCategory)}` : ''}`}>
            {product.name}
          </Link>
        </h3>
        <p className="product-description">{product.description}</p>
        <div className="order-buttons">
          <button className="btn btn-whatsapp" onClick={handleWhatsAppOrder}>
            <i className="fab fa-whatsapp"></i> WhatsApp
          </button>
          <button className="btn btn-instagram" onClick={handleInstagramOrder}>
            <i className="fab fa-instagram"></i> Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
