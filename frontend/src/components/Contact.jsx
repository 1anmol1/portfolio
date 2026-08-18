import React, { useContext } from "react";
import { PortfolioContext } from "../App";

function ExternalIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" style={{ opacity: 0.55 }}>
      <path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Contact() {
  const portfolioData = useContext(PortfolioContext);
  const socialLinks = [
    { label: "LinkedIn", href: portfolioData.contact.linkedin },
    { label: "GitHub", href: portfolioData.contact.github },
    { label: "LeetCode", href: portfolioData.contact.leetcode },
  ];
  return (
    <section id="contact" className="contact-section">
      <div className="contact-glow" />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <p className="section-label fade-up">Let's Work Together</p>
        <h2 className="section-headline fade-up" style={{ maxWidth: 600, margin: "0 auto 8px" }}>
          Got a project in mind?
        </h2>
        <a href={`mailto:${portfolioData.contact.email}`} className="contact-email-link fade-up">
          {portfolioData.contact.email}
        </a>

        <div className="contact-social-row fade-up">
          {socialLinks.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="social-link">
              {s.label} <ExternalIcon />
            </a>
          ))}
          <a
            href={portfolioData.contact.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;