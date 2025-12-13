import React from "react";
import portfolioData from "../data/portfolioData.jsx";

function Hero() {
  const handleMouseMove = (e) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    currentTarget.style.setProperty("--hero-mouse-x", `${x}px`);
    currentTarget.style.setProperty("--hero-mouse-y", `${y}px`);
  };

  return (
    <section id="hero" className="hero" onMouseMove={handleMouseMove}>
      {/* Interactive Grid Background */}
      <div className="hero-grid-base"></div>
      <div className="hero-grid-highlight"></div>

      {/* Cinematic floating colored orbs (Defined in App.css) */}
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>
      <div className="hero-orb hero-orb-3"></div>

      <div className="hero-content container">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          Available for Opportunities
        </div>

        <h1>
          Hi, I'm <span className="gradient-text">{portfolioData.name}</span>
        </h1>

        <p className="hero-description">{portfolioData.title}</p>

        <div className="hero-cta">
          <a
            href={portfolioData.contact.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            data-cursor="download"
          >
            <span>Resume</span>
          </a>

          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;