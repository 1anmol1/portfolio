import React, { useState, useEffect } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  // Handle Scroll Spy
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // Trigger exactly at middle of screen
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Only update if we are scrolling (not just clicking)
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav className="navbar" data-section={activeSection}>
      <div
        className="nav-logo"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          setActiveSection("hero");
        }}
      >
        Anmol
      </div>

      <div className="nav-links">
        {["about", "projects", "skills", "contact"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className={
              item === "contact"
                ? "btn-rainbow-border nav-contact-btn"
                : `nav-link ${activeSection === item ? "active" : ""}`
            }
            onClick={() => setActiveSection(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;