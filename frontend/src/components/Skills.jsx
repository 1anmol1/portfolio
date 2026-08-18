import React, { useContext } from "react";
import { PortfolioContext } from "../App";

const SKILL_GROUPS = [
  { label: "Languages", key: "languages" },
  { label: "Frameworks & UI", key: "frameworks" },
  { label: "Databases & Cloud", key: "databases" },
  { label: "APIs, Auth & Tools", key: "tools" },
];

function Skills() {
  const portfolioData = useContext(PortfolioContext);
  const { skills, achievements } = portfolioData;

  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="section-label fade-up">Capabilities</p>
        <h2 className="section-headline fade-up">Skills & Stack</h2>
        <p className="section-body fade-up">
          Technologies I use to build fast, scalable, production-ready products.
        </p>

        <div className="skills-group fade-up">
          {SKILL_GROUPS.map((group) => (
            <div key={group.key} className="skills-group" style={{ marginTop: 32 }}>
              <p className="skills-group-label">{group.label}</p>
              <div className="skills-chips">
                {skills[group.key].map((s, i) => (
                  <span className="skill-chip" key={i}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div style={{ marginTop: 80 }}>
          <p className="section-label fade-up">Recognition</p>
          <h2 className="section-headline fade-up">Honours & Achievements</h2>
          <div className="achievements-grid" style={{ marginTop: 40 }}>
            {achievements.map((a, i) => (
              <div className="achievement-cell fade-up" key={i}>
                <span className="achievement-icon">{a.icon}</span>
                <div className="achievement-title">{a.title}</div>
                <div className="achievement-desc">{a.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;