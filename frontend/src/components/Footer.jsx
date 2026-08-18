import React, { useContext } from "react";
import { PortfolioContext } from "../App";

function Footer() {
  const portfolioData = useContext(PortfolioContext);
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