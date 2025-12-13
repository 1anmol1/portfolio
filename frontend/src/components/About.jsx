import React from "react";
import portfolioData from "../data/portfolioData.jsx";
import ScrollReveal from "./ScrollReveal.jsx";

function About() {
  // Animation for metrics
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const endValue = parseInt(target.getAttribute('data-value'));
          const suffix = target.getAttribute('data-suffix') || '';
          let startValue = 0;
          const duration = 2000;
          const increment = endValue / (duration / 16); // 60fps

          const timer = setInterval(() => {
            startValue += increment;
            if (startValue >= endValue) {
              target.textContent = endValue + suffix;
              clearInterval(timer);
            } else {
              target.textContent = Math.floor(startValue) + suffix;
            }
          }, 16);
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-number').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about section-padding">
      <div className="container about-content">

        {/* Text Side */}
        <div className="about-text">
          <ScrollReveal>
            <h2 className="section-title">About Me</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p>{portfolioData.about}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
              {portfolioData.education}
            </p>
          </ScrollReveal>

          {/* Cinematic Stats Grid */}
          <div className="stats-grid">
            <ScrollReveal delay={0.3} width="100%">
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <div className="stat-card">
                  <span className="stat-number" data-value="3" data-suffix="+">0</span>
                  <span className="stat-label">Years Coding</span>
                </div>

                <div className="stat-card">
                  <span className="stat-number" data-value="10" data-suffix="+">0</span>
                  <span className="stat-label">Projects Built</span>
                </div>

                <div className="stat-card">
                  <span className="stat-number" data-value="8" data-suffix="m">0</span>
                  <span className="stat-label">Internship Exp</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

      </div>
    </section>
  );
}


export default About;