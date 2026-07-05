import React, { useState, useEffect } from 'react';
import { Search, MapPin } from 'lucide-react';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1551918120-9739cb430c6d?crop=entropy&cs=tinysrgb&fit=crop&q=80&w=1920&h=800",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?crop=entropy&cs=tinysrgb&fit=crop&q=80&w=1920&h=800",
  "https://images.unsplash.com/photo-1559508551-44bff1de756b?crop=entropy&cs=tinysrgb&fit=crop&q=80&w=1920&h=800",
  "https://images.unsplash.com/photo-1596436889106-be35e843f974?crop=entropy&cs=tinysrgb&fit=crop&q=80&w=1920&h=800"
];

const Hero = ({ onSearchChange, searchValue }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={styles.heroContainer}>
      {/* Background Slideshow */}
      {HERO_IMAGES.map((src, index) => (
        <div
          key={src}
          style={{
            ...styles.backgroundImage,
            backgroundImage: `url(${src})`,
            opacity: index === currentImageIndex ? 1 : 0,
            zIndex: index === currentImageIndex ? 1 : 0,
          }}
        />
      ))}
      {/* Overlay Mask */}
      <div style={styles.overlay} />

      {/* Content */}
      <div className="container" style={styles.content}>
        <div style={styles.badgeWrapper}>
          <span className="badge" style={styles.heroBadge}>
            ✨ Find Your Next Sanctuary
          </span>
        </div>
        
        <h1 style={styles.title}>
          Discover Extraordinary <br />
          <span style={styles.accentText}>Stays Worldwide</span>
        </h1>
        
        <p style={styles.subtitle}>
          Immerse yourself in handpicked boutique hotels, luxury resorts, and architectural marvels.
        </p>

        {/* Search Bar Overlay */}
        <div className="glass-panel" style={styles.searchPanel}>
          <div style={styles.searchInner}>
            <div style={styles.inputWrapper}>
              <Search size={20} color="var(--primary)" style={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search hotels by name, location or amenity..."
                style={styles.searchInput}
                value={searchValue}
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </div>
            <button className="btn btn-primary" style={styles.searchButton}>
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  heroContainer: {
    position: 'relative',
    height: '65vh',
    minHeight: '450px',
    maxHeight: '600px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginBottom: '40px',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    transition: 'opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
    filter: 'brightness(60%)',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom, rgba(8, 6, 13, 0.4) 0%, rgba(8, 6, 13, 0.8) 100%)',
    zIndex: 2,
  },
  content: {
    position: 'relative',
    zIndex: 3,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeWrapper: {
    marginBottom: '16px',
  },
  heroBadge: {
    background: 'rgba(255, 255, 255, 0.15)',
    color: '#fff',
    backdropFilter: 'blur(4px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    padding: '8px 16px',
    fontSize: '0.85rem',
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: '800',
    color: '#fff',
    letterSpacing: '-1.5px',
    lineHeight: '1.15',
    marginBottom: '16px',
  },
  accentText: {
    background: 'linear-gradient(135deg, #c084fc 0%, #a855f7 50%, #6366f1 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: 'rgba(255, 255, 255, 0.8)',
    maxWidth: '600px',
    marginBottom: '32px',
    lineHeight: '1.5',
  },
  searchPanel: {
    width: '100%',
    maxWidth: '750px',
    padding: '12px',
    borderRadius: '16px',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
  },
  searchInner: {
    display: 'flex',
    gap: '12px',
    background: 'var(--bg-secondary)',
    borderRadius: '12px',
    padding: '6px',
    border: '1px solid var(--border)',
  },
  inputWrapper: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    paddingLeft: '12px',
  },
  searchIcon: {
    marginRight: '8px',
  },
  searchInput: {
    width: '100%',
    border: 'none',
    background: 'transparent',
    color: 'var(--text-primary)',
    outline: 'none',
    fontSize: '1rem',
    padding: '8px 0',
  },
  searchButton: {
    padding: '12px 24px',
    borderRadius: '8px',
  },
};

export default Hero;
