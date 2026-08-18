import React, { useContext } from "react";
import { PortfolioContext } from "../App";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../App.jsx";

const NAV_ITEMS = [
  { label: "About",    href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills",   href: "/#skills" },
  { label: "Contact",  href: "/#contact" },
];

/* ── Mobile bottom nav icons ─────────────────────────────────── */
function HomeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 9.5L10 3l7 6.5V17a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    </svg>
  );
}
function UserIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M3 17c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}
function GridIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="3" y="3" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
      <rect x="11" y="3" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
      <rect x="3" y="11" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
      <rect x="11" y="11" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
    </svg>
  );
}
function CodeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M7 5L3 10l4 5M13 5l4 5-4 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}
function SunIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="3" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M7 1v1.5M7 11.5V13M1 7h1.5M11.5 7H13M2.93 2.93l1.06 1.06M10.01 10.01l1.06 1.06M11.07 2.93L10.01 3.99M3.99 10.01l-1.06 1.06"
        stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}
function MoonIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M12 8.5A5 5 0 015.5 2c-.2 0-.4.01-.6.03A6 6 0 1011.97 9.1c.01-.2.03-.4.03-.6z"
        stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

const MOBILE_NAV = [
  { label: "Home",     href: "/#hero",     Icon: HomeIcon },
  { label: "About",    href: "/#about",    Icon: UserIcon },
  { label: "Work",     href: "/#projects", Icon: GridIcon },
  { label: "Skills",   href: "/#skills",   Icon: CodeIcon },
  { label: "Contact",  href: "/#contact",  Icon: MailIcon },
];

/* ── Navbar component ────────────────────────────────────────── */
function Navbar({ visible }) {
  const portfolioData = useContext(PortfolioContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {/* ── Desktop top nav ─────────────────────────────────── */}
      <div className={`nav-wrapper ${visible || !isHome ? "visible" : "hidden"}`}>
        <nav className="navbar">
          <Link to="/" className="nav-logo-link">Hero</Link>

          {NAV_ITEMS.map(({ label, href }) => (
            <a key={href} href={href} className="nav-link">{label}</a>
          ))}

          {/* Theme toggle — desktop */}
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
            <span className="theme-toggle-icon">
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </span>
            {theme === "dark" ? "Light" : "Dark"}
          </button>

          <a
            href={portfolioData.contact.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary nav-resume-btn"
          >
            Resume
          </a>
        </nav>
      </div>

      {/* ── Mobile bottom nav ───────────────────────────────── */}
      <nav className="mobile-bottom-nav">
        <div className="mobile-bottom-nav-inner">
          {MOBILE_NAV.map(({ label, href, Icon }) => (
            <a key={href} href={href} className="mobile-nav-item">
              <Icon />
              {label}
            </a>
          ))}
          {/* Theme toggle in mobile nav — same SVG icons as desktop */}
          <button className="mobile-nav-item" onClick={toggleTheme} title="Toggle theme">
            {theme === "dark" ? <SunIcon size={20} /> : <MoonIcon size={20} />}
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;