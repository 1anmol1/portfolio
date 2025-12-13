import React from "react";
import portfolioData from "../data/portfolioData.jsx";
import ScrollReveal from "./ScrollReveal.jsx";

function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Cinematic floating colored orbs (Defined in App.css) */}
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>
      <div className="hero-orb hero-orb-3"></div>

      <div className="hero-content container">
        <ScrollReveal>
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Available for Opportunities
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1>
            Hi, I'm <span className="gradient-text">{portfolioData.name}</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="hero-description">{portfolioData.title}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
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
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Hero;