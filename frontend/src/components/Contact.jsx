import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import portfolioData from "../data/portfolioData.jsx";
import ScrollReveal from "./ScrollReveal.jsx";

function Contact() {
  return (
    <section id="contact" className="contact section-padding">
      <div className="container contact-content">
        <ScrollReveal>
          <h2 className="section-title">Let's Connect</h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="contact-description">
            Open to freelance opportunities and full-time roles.
            <br />
            If you have a project in mind, let's build it.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="contact-links">
            <a
              className="contact-link"
              href={`mailto:${portfolioData.contact.email}`}
              aria-label="Email"
            >
              <FaEnvelope size={20} />
              <span>Email Me</span>
            </a>

            <a
              className="contact-link"
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
              <span>LinkedIn</span>
            </a>

            <a
              className="contact-link"
              href={portfolioData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Contact;