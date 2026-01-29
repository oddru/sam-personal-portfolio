import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Section from './components/Section';
import projects from './data/projects';
import ContactForm from "./ContactForm";

function App() {
  const [tab, setTab] = useState('Home');
  const siteStyle = {
    backgroundImage: `linear-gradient(rgba(3,3,3,0.62), rgba(3,3,3,0.62)), url(${process.env.PUBLIC_URL}/assets/web-bg.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <div className="site" style={siteStyle}>
      <Nav active={tab} onChange={setTab} />

      <main className="main">
        {tab === 'Home' && (
          <Section title>
            <div className="hero-row">
              <div className="hero-text">
                <h1 className="hero">Greetings! I'm Sam</h1>
                <h3 className="subhero">Developer and Designer</h3>
                <p>
                  I’m a multidisciplinary developer with a strong foundation in graphic design, web design, and cybersecurity, focused on creating visually compelling,
                  user-friendly, and secure digital experiences.
                </p>
              </div>

              <img src="/assets/profile.jpg" alt="Sam profile" className="profile-img" />
            </div>
          </Section>
        )}
        {tab === 'Projects' && (
          <Section title="Projects">
            <div className="grid">
              {projects.map((p) => (
                <article key={p.id} className="card">
                  <h3 className="card-title">{p.title}</h3>
                  <p className="muted">{p.category}</p>
                  <p>{p.description}</p>
                  <div className="tags">
                    {p.tech.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </Section>
        )}

        {tab === 'Growth' && (
            <Section title="Currently Learning">
              <ul className="growth-list">
                <li>
                  <div className="growth-item">
                    <span className="growth-title">Full Stack Website Development</span>
                    <p className="item-sub">Actively expanding my skills in front-end and back-end development by building projects, exploring modern frameworks, 
                      and learning scalable application architecture.</p>
                  </div>
                </li>
                <li>
                  <div className="growth-item">
                    <span className="growth-title">Modern Web security</span>
                    <p className="item-sub">Continuously studying web security principles, secure coding practices, and ethical penetration testing to better 
                      understand and defend against real-world threats.</p>
                  </div>
                </li>
                <li>
                  <div className="growth-item">
                    <span className="growth-title">Graphic Design Fundamentals (typography, composition)</span>
                    <p className="item-sub">Consistently improving my design skills by studying visual principles such as typography, color theory, 
                      and layout, and applying them through hands-on design work.</p>
                  </div>
                </li>
              </ul>
            </Section>
        )}

        {tab === 'Contact' && (
          <Section title="Contact Me!">
            <p>I’m open to collaborations, freelance opportunities, and discussions related to web development, 
            design, or cybersecurity.
            </p>
            <ContactForm />
          </Section>
        )}
      </main>

      <footer className="footer">© {new Date().getFullYear()} — Graphic Design · Web Design · Cybersecurity</footer>
    </div>
  );
}

export default App;
