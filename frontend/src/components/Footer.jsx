import React from "react";
import portfolioData from "../data/portfolioData.jsx";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          © {new Date().getFullYear()} {portfolioData.name}. Built with React.
        </div>
        <div className="footer-right">
          Designed & developed by Anmol Patil
        </div>
      </div>
    </footer>
  );
}

export default Footer;