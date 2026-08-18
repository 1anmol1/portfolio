import React, { useContext } from "react";
import { PortfolioContext } from "../App";

function About() {
  const portfolioData = useContext(PortfolioContext);
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-label fade-up">About</p>
        <h2 className="section-headline fade-up">{portfolioData.name}</h2>
        <p className="section-body fade-up">{portfolioData.about}</p>

        <div className="about-grid">
          {/* Left: Stats + Education */}
          <div>
            <div className="stats-row">
              <div className="stat-cell">
                <div className="stat-number">{portfolioData.stats.yearsCoding}</div>
                <div className="stat-label">Years Coding</div>
              </div>
              <div className="stat-cell">
                <div className="stat-number">{portfolioData.stats.projectsBuilt}</div>
                <div className="stat-label">Projects Built</div>
              </div>
              <div className="stat-cell">
                <div className="stat-number">{portfolioData.stats.internshipExp}</div>
                <div className="stat-label">Industry Exp</div>
              </div>
            </div>

            <div style={{ marginTop: 48 }}>
              <p className="section-label" style={{ marginBottom: 20 }}>Education</p>
              <div className="timeline">
                {portfolioData.education.map((edu, i) => (
                  <div className="timeline-item fade-up" key={i}>
                    <div className="timeline-header">
                      <div>
                        <div className="timeline-role">{edu.school}</div>
                        <div className="timeline-company">{edu.degree}</div>
                        <div className="timeline-company" style={{ marginTop: 4, color: "var(--text-3)" }}>{edu.score}</div>
                      </div>
                      <div className="timeline-duration">{edu.duration}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Experience */}
          <div>
            <p className="section-label" style={{ marginBottom: 20 }}>Experience</p>
            <div className="timeline">
              {portfolioData.experience.map((exp, i) => (
                <div className="timeline-item fade-up" key={i}>
                  <div className="timeline-header">
                    <div>
                      <div className="timeline-role">{exp.role}</div>
                      <div className="timeline-company">{exp.company} · {exp.location}</div>
                    </div>
                    <div className="timeline-duration">{exp.duration}</div>
                  </div>
                  <ul className="timeline-points">
                    {exp.points.map((pt, j) => (
                      <li key={j}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;