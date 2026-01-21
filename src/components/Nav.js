import React from 'react';
import './nav.css';

const Nav = ({ active, onChange }) => {
  const tabs = ['Home', 'Projects', 'Growth', 'Contact'];

  return (
    <header className="nav">
      <div className="brand">
        <span className="brand-mark"> ☩ </span>
        <h1 className="brand-title">Erebus Studios</h1>
      </div>

      <nav className="nav-links">
        {tabs.map((t) => (
          <button
            key={t}
            className={`nav-btn ${active === t ? 'active' : ''}`}
            onClick={() => onChange(t)}
          >
            {t}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Nav;
