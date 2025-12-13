import React from "react";
import portfolioData from "../data/portfolioData.jsx";

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
        <h2 className="section-title">Skills & Tech</h2>
        <p className="section-subtitle">
          The arsenal of tools I use to bring ideas to life.
        </p>
      </div>

      {/* Infinite Marquee Wrapper */}
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

      {/* Categorized Skills Grid */}
      <div className="container skills-grid">

        {/* Frontend */}
        <div className="skill-category">
          <div className="skill-category-icon">🎨</div>
          <div className="skill-category-title">Frontend</div>
          <div className="skill-list">
            <span className="skill-list-item">React.js</span>
            <span className="skill-list-item">HTML5 / CSS3</span>
            <span className="skill-list-item">JavaScript (ES6+)</span>
          </div>
        </div>

        {/* Backend */}
        <div className="skill-category">
          <div className="skill-category-icon">⚡</div>
          <div className="skill-category-title">Backend</div>
          <div className="skill-list">
            <span className="skill-list-item">Node.js</span>
            <span className="skill-list-item">Express.js</span>
            <span className="skill-list-item">MongoDB</span>
          </div>
        </div>

        {/* Tools */}
        <div className="skill-category">
          <div className="skill-category-icon">🛠️</div>
          <div className="skill-category-title">Tools & Workflow</div>
          <div className="skill-list">
            <span className="skill-list-item">Git & GitHub</span>
            <span className="skill-list-item">Postman</span>
            <span className="skill-list-item">Vercel Deployment</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;