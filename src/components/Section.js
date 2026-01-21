import React from 'react';
import './section.css';

const Section = ({ title, children }) => {
  return (
    <section className="section">
      <header className="section-header">
        <h2>{title}</h2>
      </header>
      <div className="section-body">{children}</div>
    </section>
  );
};

export default Section;
