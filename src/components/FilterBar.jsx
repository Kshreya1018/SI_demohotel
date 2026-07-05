import React from 'react';
import { SlidersHorizontal, MapPin, X, Star } from 'lucide-react';

const CITIES = [
  "Ahmedabad", "Bengaluru", "Chennai", "Delhi", "Goa", 
  "Gurgaon", "Hyderabad", "Jaipur", "Kolkata", "Mumbai", 
  "Noida", "Pune"
];

const FilterBar = ({
  selectedCity,
  setSelectedCity,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  minRating,
  setMinRating,
  orderBy,
  setOrderBy,
  onResetFilters
}) => {
  return (
    <div className="glass-panel" style={styles.container}>
      {/* City Tags Slider */}
      <div style={styles.citiesSection}>
        <div style={styles.sectionHeader}>
          <MapPin size={16} color="var(--primary)" />
          <span style={styles.sectionTitle}>Explore by Destination</span>
        </div>
        <div style={styles.chipsContainer}>
          {CITIES.map((city) => {
            const isSelected = selectedCity === city;
            return (
              <button
                key={city}
                onClick={() => setSelectedCity(isSelected ? null : city)}
                style={{
                  ...styles.chip,
                  backgroundColor: isSelected ? 'var(--primary)' : 'var(--bg-secondary)',
                  color: isSelected ? 'white' : 'var(--text-primary)',
                  borderColor: isSelected ? 'var(--primary)' : 'var(--border)',
                }}
              >
                {city}
              </button>
            );
          })}
        </div>
      </div>

      {/* Advanced Filter Panel */}
      <div style={styles.filtersGrid}>
        {/* Price Range Filter */}
        <div style={styles.filterCard}>
          <label style={styles.label}>Price Range (per night)</label>
          <div style={styles.rangeInputs}>
            <input
              type="number"
              placeholder="Min ₹"
              className="input-field"
              style={styles.numberInput}
              value={minPrice || ''}
              onChange={(e) => setMinPrice(Number(e.target.value) || null)}
            />
            <span style={styles.rangeSeparator}>to</span>
            <input
              type="number"
              placeholder="Max ₹"
              className="input-field"
              style={styles.numberInput}
              value={maxPrice || ''}
              onChange={(e) => setMaxPrice(Number(e.target.value) || null)}
            />
          </div>
        </div>

        {/* Rating Filter */}
        <div style={styles.filterCard}>
          <label style={styles.label}>Minimum Rating</label>
          <select
            className="select-field"
            style={styles.select}
            value={minRating || ''}
            onChange={(e) => setMinRating(e.target.value ? Number(e.target.value) : null)}
          >
            <option value="">Any Rating</option>
            <option value="4.5">4.5+ ⭐ Exceptional</option>
            <option value="4.0">4.0+ ⭐ Very Good</option>
            <option value="3.5">3.5+ ⭐ Good</option>
            <option value="3.0">3.0+ ⭐ Average</option>
          </select>
        </div>

        {/* Sort Filter */}
        <div style={styles.filterCard}>
          <label style={styles.label}>Sort By</label>
          <select
            className="select-field"
            style={styles.select}
            value={orderBy || ''}
            onChange={(e) => setOrderBy(e.target.value || null)}
          >
            <option value="">Default Recommended</option>
            <option value="-rating">Rating: High to Low</option>
            <option value="rating">Rating: Low to High</option>
            <option value="-price">Price: High to Low</option>
            <option value="price">Price: Low to High</option>
          </select>
        </div>

        {/* Reset Action */}
        <div style={styles.actionCard}>
          <button 
            className="btn btn-outline" 
            style={styles.resetButton}
            onClick={onResetFilters}
          >
            <X size={16} />
            <span>Reset Filters</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    borderRadius: '16px',
    padding: '24px',
    marginBottom: '32px',
    boxShadow: 'var(--shadow-md)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  citiesSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  sectionTitle: {
    fontSize: '0.9rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  chipsContainer: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
    paddingBottom: '4px',
  },
  chip: {
    padding: '8px 16px',
    borderRadius: 'var(--radius-full)',
    border: '1px solid var(--border)',
    fontSize: '0.9rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'var(--transition)',
    boxShadow: 'var(--shadow-sm)',
  },
  filtersGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px',
    alignItems: 'flex-end',
    borderTop: '1px solid var(--border)',
    paddingTop: '20px',
  },
  filterCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  actionCard: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  label: {
    fontSize: '0.85rem',
    fontWeight: '600',
    color: 'var(--text-secondary)',
  },
  rangeInputs: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  numberInput: {
    width: '100%',
    padding: '10px 12px',
    fontSize: '0.9rem',
  },
  rangeSeparator: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
  },
  select: {
    width: '100%',
    padding: '10px 12px',
    fontSize: '0.9rem',
    cursor: 'pointer',
  },
  resetButton: {
    width: '100%',
    padding: '10px',
    justifyContent: 'center',
    borderRadius: 'var(--radius-md)',
  }
};

export default FilterBar;
