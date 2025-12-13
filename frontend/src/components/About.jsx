import React from "react";
import portfolioData from "../data/portfolioData.jsx";

function About() {
  return (
    <section id="about" className="about section-padding">
      <div className="container about-content">

        {/* Text Side */}
        <div className="about-text">
          <h2 className="section-title">About Me</h2>
          <p>{portfolioData.about}</p>

          <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
            {portfolioData.education}
          </p>

          {/* Cinematic Stats Grid */}
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Coding</span>
            </div>

            <div className="stat-card">
              <span className="stat-number">{portfolioData.projects.length}+</span>
              <span className="stat-label">Projects Built</span>
            </div>

            <div className="stat-card">
              <span className="stat-number">6m</span>
              <span className="stat-label">Internship Exp</span>
            </div>
          </div>
        </div>

        {/* Image Side */}
        <div className="about-image">
          <div className="about-profile-container">
            <img
              src={portfolioData.contact.profileImage}
              alt={portfolioData.name}
              className="about-profile-img"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;