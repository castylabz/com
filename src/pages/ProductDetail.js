import React, { useMemo, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { products } from '../data/products';
import { useScrollToTop } from '../hooks/useScrollToTop';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const currentCategory = search.get('category') || 'all';
  const product = useMemo(() => products.find(p => String(p.id) === String(id)), [id]);
  const [activeImage, setActiveImage] = useState(product?.image);

  // Use custom hook to scroll to top
  useScrollToTop();

  if (!product) {
    return (
      <section className="product-detail">
        <div className="container">
          <p>Product not found.</p>
          <Link to={`/products${currentCategory && currentCategory !== 'all' ? `?category=${encodeURIComponent(currentCategory)}` : ''}`} className="btn btn-primary">Back to Products</Link>
        </div>
      </section>
    );
  }

  const images = product.images && product.images.length > 0 ? product.images : [product.image];
  const firstImage = images[0];

  const getDetailUrl = () => {
    const isAbsolute = process.env.PUBLIC_URL && process.env.PUBLIC_URL.startsWith('http');
    const base = isAbsolute ? process.env.PUBLIC_URL : window.location.origin + (process.env.PUBLIC_URL || '');
    const normalized = base.replace(/\/$/, '');
    return `${normalized}/products/${product.id}`;
  };

  const handleWhatsApp = () => {
    const detailUrl = getDetailUrl();
    const message = `Hi! I'm interested in the ${product.name}.\n\nProduct page: ${detailUrl}\nImage: ${firstImage}`;
    const url = `https://wa.me/9150562986?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleInstagram = async () => {
    const detailUrl = getDetailUrl();
    const message = `Hi! I'm interested in the ${product.name}.\n\nProduct page: ${detailUrl}\nImage: ${firstImage}`;
    try {
      await navigator.clipboard.writeText(message);
    } catch (e) {}
    window.open('https://www.instagram.com/casty_labz/', '_blank');
  };

  const fallbackImage = 'data:image/svg+xml;utf8,%3Csvg xmlns=%22http%3A//www.w3.org/2000/svg%22 width=%22500%22 height=%22375%22 viewBox=%220 0 500 375%22%3E%3Crect width=%22500%22 height=%22375%22 fill=%22%23f2f2f2%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%23999 font-family=%22Arial%2Csans-serif%22 font-size=%2220%22%3ENo image%3C/text%3E%3C/svg%3E';

  return (
    <section className="product-detail">
      <div className="container">
        <div className="breadcrumbs">
          <Link to="/">Home</Link> / <Link to={`/products${currentCategory && currentCategory !== 'all' ? `?category=${encodeURIComponent(currentCategory)}` : ''}`}>Products</Link> / <span>{product.name}</span>
        </div>

        <div className="detail-grid">
          <div className="image-gallery">
            <div className="main-image">
              <img 
                src={activeImage || images[0]} 
                alt={product.name} 
                onError={(e) => {
                  try { console.warn('Image failed to load:', activeImage || images[0]); } catch (_) {}
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = fallbackImage;
                }}
              />
            </div>
            <div className="thumbnails">
              {images.map((src, idx) => (
                <button
                  key={idx}
                  className={`thumb ${src === activeImage ? 'active' : ''}`}
                  onClick={() => setActiveImage(src)}
                  aria-label={`View image ${idx + 1}`}
                >
                  <img 
                    src={src} 
                    alt={`${product.name} ${idx + 1}`} 
                    onError={(e) => {
                      try { console.warn('Thumbnail failed to load:', src); } catch (_) {}
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = fallbackImage;
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="detail-info">
            <h1 className="detail-title">{product.name}</h1>
            <p className="detail-description">{product.description}</p>

            <div className="detail-actions">
              <button className="btn btn-whatsapp" onClick={handleWhatsApp}>
                <i className="fab fa-whatsapp"></i> Order Now
              </button>
              <button className="btn btn-instagram" onClick={handleInstagram}>
                <i className="fab fa-instagram"></i> Order Now
              </button>
            </div>
          </div>
        </div>

        <div className="back-link">
          <Link to={`/products${currentCategory && currentCategory !== 'all' ? `?category=${encodeURIComponent(currentCategory)}` : ''}`} className="btn btn-secondary">Back to Products</Link>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
