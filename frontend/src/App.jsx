import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import "./App.css";

// Theme context so any component can read/toggle
export const ThemeContext = React.createContext({
  theme: "dark",
  toggleTheme: () => {},
});

// Portfolio context to provide MongoDB fetched data
export const PortfolioContext = React.createContext(null);

function App() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    // Fetch portfolio data from Vercel Serverless Function
    fetch("/api/portfolio")
      .then((res) => res.json())
      .then((data) => {
        setPortfolioData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch portfolio data:", err);
        setLoading(false);
      });
  }, []);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  if (loading || !portfolioData) {
    return <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", color: "var(--text-1)" }}>Loading Portfolio...</div>;
  }

  return (
    <PortfolioContext.Provider value={portfolioData}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>
      </ThemeContext.Provider>
    </PortfolioContext.Provider>
  );
}

export default App;
