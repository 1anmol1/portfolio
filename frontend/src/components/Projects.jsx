import React from "react";
import portfolioData from "../data/portfolioData.jsx";
import ScrollReveal from "./ScrollReveal.jsx";

function Projects() {
  // Logic for the spotlight hover effect defined in CSS
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Featured Projects</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="section-subtitle">
            Real-world solutions built with the MERN stack and AI agents.
          </p>
        </ScrollReveal>

        <div className="projects-grid">
          {portfolioData.projects.map((proj, index) => (
            <ScrollReveal key={index} delay={index * 0.1} width="100%">
              <div
                className="project-card"
                onMouseMove={handleMouseMove}
                data-cursor="view"
              >
                <div className="project-image">
                  <img
                    src={proj.image || `https://placehold.co/600x400/18181b/a1a1aa?text=${encodeURIComponent(proj.name)}`}
                    alt={proj.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                {/* Info Side */}
                <div className="project-info">
                  <span className="project-category">Full Stack Dev</span>

                  <h3 className="project-title">{proj.name}</h3>

                  <p className="project-description">{proj.description}</p>

                  <div className="project-metrics">
                    <div className="metric">
                      <span className="metric-value">React</span>
                      <span className="metric-label">Frontend</span>
                    </div>
                    <div className="metric">
                      <span className="metric-value">Node</span>
                      <span className="metric-label">Backend</span>
                    </div>
                  </div>

                  <div className="project-tags">
                    {/* Assuming generic MERN tags if not in individual project data */}
                    <span className="tag">MongoDB</span>
                    <span className="tag">Express</span>
                    <span className="tag">React</span>
                    <span className="tag">Node.js</span>
                  </div>

                  <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Code →
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;