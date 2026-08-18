import React, { useContext } from "react";
import { PortfolioContext } from "../App";
import { useNavigate } from "react-router-dom";

const COLOR_MAP = {
  "#10b981": "green",
  "#3b82f6": "blue",
  "#a855f7": "purple",
};

function ArrowUpRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProjectCard({ project, isFirst }) {
  const navigate = useNavigate();
  const colorKey = COLOR_MAP[project.color] || "blue";

  return (
    <div
      className="project-card fade-up"
      data-color={colorKey}
      onClick={() => navigate(`/project/${project.id}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && navigate(`/project/${project.id}`)}
    >
      {/* Image */}
      <div className="project-card-image">
        {project.image ? (
          <img src={project.image} alt={project.name} loading="lazy" />
        ) : (
          <div
            className="project-card-placeholder"
            style={{
              background: `linear-gradient(135deg, ${project.color}14, ${project.color}06)`,
              color: project.color,
              fontSize: isFirst ? "clamp(2rem, 5vw, 3.5rem)" : "clamp(1.5rem, 3vw, 2.5rem)",
            }}
          >
            {project.name}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="project-card-body">
        <div className="project-card-header">
          <div>
            <div className="project-card-name">{project.name}</div>
            <div className="project-card-subtitle">{project.subtitle}</div>
          </div>
          <div className="project-arrow">
            <ArrowUpRight />
          </div>
        </div>

        <p className="project-card-desc">{project.shortDescription}</p>

        <div className="project-tags">
          {project.tags.slice(0, isFirst ? 7 : 4).map((tag, i) => (
            <span className="tag" key={i}>{tag}</span>
          ))}
          {project.tags.length > (isFirst ? 7 : 4) && (
            <span className="tag">+{project.tags.length - (isFirst ? 7 : 4)}</span>
          )}
        </div>

        {project.achievement && (
          <div className="project-achievement">
            🏆 {project.achievement}
          </div>
        )}
      </div>
    </div>
  );
}

function Projects() {
  const portfolioData = useContext(PortfolioContext);
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label fade-up">Selected Works</p>
        <h2 className="section-headline fade-up">Projects</h2>
        <p className="section-body fade-up">
          End-to-end products built with care — from initial design to production deployment.
        </p>

        <div className="projects-grid">
          {portfolioData.projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} isFirst={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;