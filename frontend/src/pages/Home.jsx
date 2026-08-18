import React, { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Projects from "../components/Projects.jsx";
import Skills from "../components/Skills.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  useEffect(() => {
    // Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Scroll-reveal
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => revealObserver.observe(el));

    // Restore scroll position
    const savedScroll = sessionStorage.getItem("portfolio-scroll-pos");
    if (savedScroll) {
      // Force instantaneous scroll restoration
      window.scrollTo({ top: parseInt(savedScroll, 10), behavior: "instant" });
      setTimeout(() => {
        lenis.scrollTo(parseInt(savedScroll, 10), { immediate: true });
      }, 50);
    }

    return () => {
      // Save scroll position right before we unmount (e.g. clicking a project)
      sessionStorage.setItem("portfolio-scroll-pos", window.scrollY.toString());
      lenis.destroy();
      cancelAnimationFrame(rafId);
      revealObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar visible={true} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Home;