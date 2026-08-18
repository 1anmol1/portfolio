import React, { useContext,  useEffect  } from "react";
import { PortfolioContext } from "../App";
import { useParams, useNavigate } from "react-router-dom";
import Lenis from "lenis";

function ArrowLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ExternalLink() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProjectDetail() {
  const portfolioData = useContext(PortfolioContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const project = portfolioData.projects.find((p) => p.id === id);
  const currentIdx = portfolioData.projects.findIndex((p) => p.id === id);
  const nextProject = portfolioData.projects[(currentIdx + 1) % portfolioData.projects.length];

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenis.scrollTo(0, { immediate: true });
    const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);

    // Scroll-reveal on this page too
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

    return () => { lenis.destroy(); observer.disconnect(); };
  }, [id]);

  if (!project) {
    return (
      <div className="container" style={{ paddingTop: 140, textAlign: "center" }}>
        <p style={{ color: "var(--text-2)", marginBottom: 24 }}>Project not found.</p>
        <button className="btn btn-ghost" onClick={() => navigate("/")}>← Go back</button>
      </div>
    );
  }

  return (
    <div className="page-enter">
      {/* Coloured top accent line */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0,
        height: 2,
        background: `linear-gradient(90deg, ${project.color}, transparent)`,
        zIndex: 1000,
        opacity: 0.7,
      }} />

      <div className="project-detail">
        <div className="container">
          {/* Back */}
          <button className="back-btn fade-up" onClick={() => navigate("/")}>
            <ArrowLeft /> All Projects
          </button>

          {/* Header */}
          <div style={{ marginTop: 36 }} className="fade-up">
            <span className="project-detail-eyebrow">{project.subtitle}</span>
            <h1 className="project-detail-title">{project.name}</h1>
            <div className="project-detail-meta">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Live Site <ExternalLink />
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                GitHub <ExternalLink />
              </a>
              {project.achievement && (
                <span className="project-achievement">🏆 {project.achievement}</span>
              )}
            </div>
          </div>

          {/* Hero image */}
          <div className="project-detail-hero-image fade-up">
            {project.image ? (
              <img src={project.image} alt={project.name} />
            ) : (
              <div style={{
                width: "100%", height: "100%",
                display: "grid", placeItems: "center",
                background: `linear-gradient(135deg, ${project.color}18, ${project.color}06)`,
                color: project.color,
                fontSize: "clamp(2rem, 6vw, 4.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.045em",
              }}>
                {project.name}
              </div>
            )}
          </div>

          {/* Grid: body + sidebar */}
          <div className="project-detail-grid">
            {/* Main */}
            <div className="project-detail-body fade-up">
              <h2>Overview</h2>
              <p>{project.longDescription}</p>

              <h2>Key Highlights</h2>
              <ul className="project-highlights">
                {project.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>

            {/* Sidebar */}
            <aside className="project-sidebar fade-up">
              <div className="sidebar-block">
                <p className="sidebar-label">Tech Stack</p>
                <div className="sidebar-tags">
                  {project.tags.map((t, i) => (
                    <span className="tag" key={i} style={{
                      borderColor: `${project.color}30`,
                      color: project.color,
                    }}>{t}</span>
                  ))}
                </div>
              </div>

              <div className="sidebar-block">
                <p className="sidebar-label">Links</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="social-link" style={{ justifyContent: "space-between" }}>
                    Live Site <ExternalLink />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="social-link" style={{ justifyContent: "space-between" }}>
                    GitHub <ExternalLink />
                  </a>
                </div>
              </div>

              {project.achievement && (
                <div className="sidebar-block">
                  <p className="sidebar-label">Recognition</p>
                  <p style={{ fontSize: "0.875rem", color: "var(--amber)", fontWeight: 600 }}>
                    🏆 {project.achievement}
                  </p>
                </div>
              )}
            </aside>
          </div>

          {/* Next project */}
          <div style={{ marginTop: 100, paddingTop: 48, borderTop: "1px solid var(--border)" }}>
            <p className="section-label">Next Project</p>
            <button
              className="next-project-btn"
              onClick={() => navigate(`/project/${nextProject.id}`)}
            >
              <span className="next-project-label">
                {nextProject.name} →
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
