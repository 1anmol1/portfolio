import React from "react";
import portfolioData from "../data/portfolioData.jsx";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">Anmol</div>
        <p style={{ color: "var(--text-tertiary)", fontSize: "0.9rem" }}>
          © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;