import React from 'react';
import { Sun, Moon, Hotel, Plus } from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode, onAddHotelClick }) => {
  return (
    <nav className="glass-panel" style={styles.navbar}>
      <div className="container" style={styles.navContainer}>
        <div style={styles.logoGroup}>
          <div style={styles.logoIcon}>
            <Hotel size={24} color="white" />
          </div>
          <span style={styles.logoText}>LuxeBook</span>
        </div>

        <div style={styles.navActions}>
          <button 
            className="btn btn-primary" 
            onClick={onAddHotelClick}
            style={styles.addButton}
          >
            <Plus size={18} />
            <span>Add Hotel</span>
          </button>

          <button 
            onClick={toggleDarkMode} 
            className="btn-icon-only"
            aria-label="Toggle Dark Mode"
            style={styles.themeToggle}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid var(--border)',
    transition: 'var(--transition)',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    cursor: 'pointer',
  },
  logoIcon: {
    background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
    width: '40px',
    height: '40px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'var(--shadow-primary)',
  },
  logoText: {
    fontFamily: 'var(--font-heading)',
    fontSize: '1.5rem',
    fontWeight: '700',
    background: 'linear-gradient(135deg, var(--text-primary) 30%, var(--primary) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: '-0.5px',
  },
  navActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  addButton: {
    padding: '8px 16px',
    fontSize: '0.9rem',
    borderRadius: '10px',
  },
  themeToggle: {
    borderRadius: '10px',
    width: '38px',
    height: '38px',
  }
};

export default Navbar;
