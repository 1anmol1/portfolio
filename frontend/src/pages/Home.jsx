import React, { useEffect, useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { PiEyesThin } from "react-icons/pi";
import { CiMobile1 } from "react-icons/ci";
import { IoIosDesktop } from "react-icons/io";

import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Projects from "../components/Projects.jsx";
import Skills from "../components/Skills.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  // Use refs for positions
  const cursorVal = useRef({ x: 0, y: 0 });
  const ringVal = useRef({ x: 0, y: 0 });

  // State
  const [cursorType, setCursorType] = useState("");
  const [isMobileView, setIsMobileView] = useState(false);
  const [isHero, setIsHero] = useState(true);

  const footerRef = useRef(null);
  const [isFooter, setIsFooter] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Navbar Trigger (Start of Scroll in Hero)
      if (scrollY > 250) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }

      // Dynamic Threshold based on Viewport (Hero is usually 100vh)
      const heroHeight = window.innerHeight * 0.8;

      // Hero Toggle Logic (View Button Morph) -> Changes AFTER Hero
      if (scrollY < heroHeight) {
        setIsHero(true);
      } else {
        setIsHero(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Footer Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooter(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when footer enters 10%
    );

    if (footerRef.current) observer.observe(footerRef.current);

    // Initial check moved inside generic Setup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []); // Run once on mount

  // Derived States for UI Logic
  // Navbar: Visible on Scroll (Not Footer)
  const showNavbar = hasScrolled && !isFooter;

  // Scroll Button: Visible only at Footer (Swaps with Navbar)
  const showTopBtnState = isFooter;

  useEffect(() => {
    // 1. Mouse Move Listener
    const moveCursor = (e) => {
      cursorVal.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", moveCursor);

    // 2. Animation Loop
    let animationFrameId;
    const animateRing = () => {
      if (ringRef.current) {
        const lerp = 0.15;
        ringVal.current.x += (cursorVal.current.x - ringVal.current.x) * lerp;
        ringVal.current.y += (cursorVal.current.y - ringVal.current.y) * lerp;
        ringRef.current.style.left = `${ringVal.current.x}px`;
        ringRef.current.style.top = `${ringVal.current.y}px`;
      }
      animationFrameId = requestAnimationFrame(animateRing);
    };
    animateRing();

    // 3. Hover Effects
    const handleMouseEnter = (e) => {
      if (!ringRef.current) return;
      const target = e.target.closest("a, button, [data-cursor], .project-card, .view-toggle-btn, .scroll-top-btn");

      let type = "";
      if (target) {
        const typeAttr = target.getAttribute("data-cursor");
        if (typeAttr) {
          type = typeAttr; // "view", "download"
        } else if (target.classList.contains("nav-link")) {
          type = "hover"; // Standard hover ring for nav links, no arrow
        } else if (target.tagName.toLowerCase() === "a" || target.tagName.toLowerCase() === "button") {
          type = "link";
        } else {
          type = "hover";
        }
      }

      setCursorType(type);
      ringRef.current.className = type ? `cursor-ring ${type}` : "cursor-ring";

      if (dotRef.current) {
        dotRef.current.style.opacity = type && type !== "hover" ? "0" : "1";
      }
    };

    const handleMouseLeave = () => {
      setCursorType("");
      if (ringRef.current) ringRef.current.className = "cursor-ring";
      if (dotRef.current) dotRef.current.style.opacity = "1";
    };

    const interactables = document.querySelectorAll("a, button, [data-cursor], .project-card, .view-toggle-btn, .scroll-top-btn");
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // 4. Scroll Reveal
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    }, { threshold: 0.1 });
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.classList.add("reveal-section");
      revealObserver.observe(section);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cancelAnimationFrame(animationFrameId);
      revealObserver.disconnect();
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isMobileView, isHero]); // Add deps to re-bind listeners to new elements if needed

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderCursorContent = () => {
    if (cursorType === "view") return <><span style={{ marginRight: '8px', fontSize: '0.8rem', fontWeight: 'bold' }}>VIEW</span> <PiEyesThin size={24} /></>;
    if (cursorType === "link") return <FaArrowUp style={{ transform: "rotate(45deg)" }} />;
    if (cursorType === "download") return <MdOutlineFileDownload size={24} />;
    return null;
  };

  return (
    <>
      {/* Cursor Elements (Moved to bottom for Z-Index priority) */}
      <div id="cursor-dot" ref={dotRef}></div>
      <div id="cursor-ring" ref={ringRef}>
        {renderCursorContent()}
      </div>

      {/* Main Content Wrapper for Mobile Simulation */}
      <div className={`app-wrapper ${isMobileView ? 'mobile-simulated' : ''}`}>

        {/* View Toggle Button */}
        <button
          className={`view-toggle-btn ${isHero && !isMobileView ? 'hero-mode' : ''} ${isMobileView ? 'active' : ''}`}
          onClick={() => setIsMobileView(!isMobileView)}
          data-cursor="view"
        >
          {isMobileView ? (
            <IoIosDesktop size={24} />
          ) : (
            <>
              <CiMobile1 size={24} />
              <span>Mobile View</span>
            </>
          )}
        </button>

        {/* Scroll To Top Button (Shows only at Footer) */}
        <button
          className={`scroll-top-btn ${showTopBtnState ? 'visible' : ''}`}
          onClick={scrollToTop}
          data-cursor="hover"
        >
          <FaArrowUp />
        </button>

        {/* Navbar with explicit visible state */}
        <div className={`nav-container ${showNavbar ? 'nav-visible' : 'nav-hidden'}`}>
          <Navbar />
        </div>

        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <div ref={footerRef}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;