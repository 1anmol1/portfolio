import React from "react";
import portfolioData from "../data/portfolioData.jsx";
import ScrollReveal from "./ScrollReveal.jsx";

// Official Brand Colors
const brandColors = {
  "HTML": "#e34c26",       // Orange
  "CSS": "#264de4",        // Blue
  "JavaScript": "#f0db4f", // Yellow
  "React": "#61dafb",      // Cyan
  "Node": "#339933",       // Green
  "Express": "#404141ff",    // White
  "MongoDB": "#47a248",    // Green
  "Git": "#f63c1bff",        // Red-Orange
  "GitHub": "#ffffff",     // White
  "Postman": "#f57647ff",    // Orange
  "Vercel": "#bdb4b4ff"      // White
};

function Skills() {
  return (
    <section id="skills" className="skills section-padding">
      <div className="container skills-header">
        <ScrollReveal>
          <h2 className="section-title">Skills & Tech</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="section-subtitle">
            The arsenal of tools I use to bring ideas to life.
          </p>
        </ScrollReveal>
      </div>

      {/* Infinite Marquee Wrapper */}
      <ScrollReveal delay={0.2} width="100%">
        <div className="marquee-wrapper">
          <div className="marquee-container">
            <div className="marquee-content">
              {/* Duplicate list to ensure seamless scroll: Vercel -> HTML */}
              {[...portfolioData.skills, ...portfolioData.skills].map((skill, i) => (
                <div
                  className="skill-item"
                  key={i}
                  style={{ color: brandColors[skill] || "#fff" }} // Apply Native Color
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Categorized Skills Grid */}
      <div className="container skills-grid">

        {/* Frontend */}
        <ScrollReveal delay={0.3}>
          <div className="skill-category">
            <div className="skill-category-icon">🎨</div>
            <div className="skill-category-title">Frontend</div>
            <div className="skill-list">
              <span className="skill-list-item">React.js</span>
              <span className="skill-list-item">HTML5 / CSS3</span>
              <span className="skill-list-item">JavaScript (ES6+)</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Backend */}
        <ScrollReveal delay={0.4}>
          <div className="skill-category">
            <div className="skill-category-icon">⚡</div>
            <div className="skill-category-title">Backend</div>
            <div className="skill-list">
              <span className="skill-list-item">Node.js</span>
              <span className="skill-list-item">Express.js</span>
              <span className="skill-list-item">MongoDB</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Tools */}
        <ScrollReveal delay={0.5}>
          <div className="skill-category">
            <div className="skill-category-icon">🛠️</div>
            <div className="skill-category-title">Tools & Workflow</div>
            <div className="skill-list">
              <span className="skill-list-item">Git & GitHub</span>
              <span className="skill-list-item">Postman</span>
              <span className="skill-list-item">Vercel Deployment</span>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

export default Skills;