import React, { useState } from 'react';
import { Star, MapPin, ChevronLeft, ChevronRight, Edit3, Trash2, Shield } from 'lucide-react';

const HotelCard = ({ hotel, onDetailsClick, onEditClick, onDeleteClick }) => {
  const [photoIndex, setPhotoIndex] = useState(0);

  // Safely get photos array
  const photos = hotel.photos && hotel.photos.length > 0 
    ? hotel.photos 
    : [hotel.thumbnail || "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500"];

  const handleNextPhoto = (e) => {
    e.stopPropagation();
    setPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const handlePrevPhoto = (e) => {
    e.stopPropagation();
    setPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const isTopRated = Number(hotel.rating) >= 4.5;
  const isBestValue = Number(hotel.price) <= 3500 && Number(hotel.rating) >= 4.0;

  return (
    <div style={styles.card} className="glass-panel">
      {/* Photo Carousel Container */}
      <div style={styles.imageContainer}>
        <img 
          src={photos[photoIndex]} 
          alt={`${hotel.name} - View ${photoIndex + 1}`} 
          style={styles.image}
        />
        
        {/* Navigation Arrows for Photos */}
        {photos.length > 1 && (
          <>
            <button onClick={handlePrevPhoto} style={styles.arrowLeft} aria-label="Previous image">
              <ChevronLeft size={16} color="var(--text-primary)" />
            </button>
            <button onClick={handleNextPhoto} style={styles.arrowRight} aria-label="Next image">
              <ChevronRight size={16} color="var(--text-primary)" />
            </button>
          </>
        )}

        {/* Carousel Indicators */}
        {photos.length > 1 && (
          <div style={styles.dotContainer}>
            {photos.map((_, i) => (
              <span 
                key={i} 
                style={{
                  ...styles.dot,
                  backgroundColor: i === photoIndex ? 'white' : 'rgba(255, 255, 255, 0.5)',
                  width: i === photoIndex ? '16px' : '6px',
                }}
              />
            ))}
          </div>
        )}

        {/* Badges Overlay */}
        <div style={styles.badgeOverlay}>
          {isTopRated && (
            <span style={{ ...styles.badge, background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)', color: 'white' }}>
              ⭐ Top Rated
            </span>
          )}
          {isBestValue && (
            <span style={{ ...styles.badge, background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', color: 'white' }}>
              💎 Best Value
            </span>
          )}
        </div>

        {/* Edit / Delete Hover Admin Menu */}
        <div style={styles.adminOverlay}>
          <button 
            onClick={(e) => { e.stopPropagation(); onEditClick(hotel); }}
            style={styles.adminBtn}
            title="Edit Hotel"
          >
            <Edit3 size={14} />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); onDeleteClick(hotel.id); }}
            style={{ ...styles.adminBtn, ...styles.deleteBtn }}
            title="Delete Hotel"
          >
            <Trash2 size={14} />
          </button>
        </div>
      </div>

      {/* Content details */}
      <div style={styles.cardContent}>
        <div style={styles.ratingRow}>
          <div style={styles.locationGroup}>
            <MapPin size={14} color="var(--text-secondary)" />
            <span style={styles.locationText}>{hotel.location}</span>
          </div>
          <div style={styles.ratingGroup}>
            <Star size={14} fill="#fbbf24" stroke="#fbbf24" />
            <span style={styles.ratingText}>{Number(hotel.rating).toFixed(1)}</span>
          </div>
        </div>

        <h3 style={styles.title} title={hotel.name}>{hotel.name}</h3>
        <p style={styles.description} title={hotel.description}>
          {hotel.description || "No description provided."}
        </p>

        <div style={styles.footerRow}>
          <div style={styles.priceContainer}>
            <span style={styles.priceValue}>₹{Math.round(hotel.price).toLocaleString('en-IN')}</span>
            <span style={styles.priceLabel}>/ night</span>
          </div>
          <button 
            className="btn btn-outline" 
            style={styles.actionBtn}
            onClick={() => onDetailsClick(hotel)}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    borderRadius: 'var(--radius-lg)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    transition: 'var(--transition)',
    border: '1px solid var(--border)',
    boxShadow: 'var(--shadow-sm)',
    position: 'relative',
    cursor: 'pointer',
  },
  imageContainer: {
    position: 'relative',
    height: '220px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  arrowLeft: {
    position: 'absolute',
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    border: 'none',
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 5,
    boxShadow: 'var(--shadow-sm)',
  },
  arrowRight: {
    position: 'absolute',
    right: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    border: 'none',
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 5,
    boxShadow: 'var(--shadow-sm)',
  },
  dotContainer: {
    position: 'absolute',
    bottom: '12px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '4px',
    zIndex: 5,
  },
  dot: {
    height: '6px',
    borderRadius: 'var(--radius-full)',
    transition: 'var(--transition)',
  },
  badgeOverlay: {
    position: 'absolute',
    top: '12px',
    left: '12px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    zIndex: 5,
  },
  badge: {
    padding: '4px 10px',
    borderRadius: '8px',
    fontSize: '0.75rem',
    fontWeight: '700',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
  },
  adminOverlay: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    display: 'flex',
    gap: '6px',
    zIndex: 5,
  },
  adminBtn: {
    width: '28px',
    height: '28px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    color: 'var(--text-primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: 'var(--shadow-sm)',
    transition: 'var(--transition)',
  },
  deleteBtn: {
    color: 'hsl(0, 72%, 51%)',
  },
  cardContent: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
  },
  ratingRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
  },
  locationGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  locationText: {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    fontWeight: '600',
  },
  ratingGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    background: 'rgba(251, 191, 36, 0.1)',
    padding: '2px 8px',
    borderRadius: '6px',
  },
  ratingText: {
    fontSize: '0.85rem',
    fontWeight: '700',
    color: '#fbbf24',
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
    marginBottom: '8px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  description: {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    marginBottom: '20px',
    lineHeight: '1.4',
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    height: '2.8em', // Roughly 2 lines
  },
  footerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid var(--border)',
    paddingTop: '16px',
    marginTop: 'auto',
  },
  priceContainer: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '2px',
  },
  priceValue: {
    fontSize: '1.25rem',
    fontWeight: '800',
    color: 'var(--text-primary)',
  },
  priceLabel: {
    fontSize: '0.8rem',
    color: 'var(--text-secondary)',
  },
  actionBtn: {
    padding: '8px 16px',
    fontSize: '0.85rem',
    borderRadius: '8px',
  }
};

export default HotelCard;
