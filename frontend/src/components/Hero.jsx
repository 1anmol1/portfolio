import React from "react";
import portfolioData from "../data/portfolioData.jsx";

function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Background Video */}
      <div className="hero-bg-video-wrapper">
        <div className="hero-bg-overlay" />
        <video
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="hero-bg-video"
        />
      </div>

      {/* Animated background orbs (optional, can keep or remove, but we'll keep them for extra color) */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      <div className="hero-content container">
        {/* Left-aligned eyebrow badge */}
        <div className="hero-eyebrow">
          <span className="hero-dot" />
          {portfolioData.role}
        </div>

        <h1 className="hero-name">{portfolioData.name}</h1>

        {/* Left-aligned summary */}
        <p className="hero-sub">{portfolioData.summary}</p>

        {/* Left-aligned CTAs */}
        <div className="hero-actions">
          <a href="/#projects" className="btn btn-primary">
            View Work ↓
          </a>
          <a
            href={portfolioData.contact.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            View Resume
          </a>
          <a href="/#contact" className="btn btn-ghost">
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-hint">
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}

export default Hero;