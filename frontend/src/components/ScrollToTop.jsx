import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    // If we are popping history, OR if we explicitly asked to restore scroll, don't scroll to top
    if (navType !== "POP" && !location.state?.restoreScroll) {
      sessionStorage.removeItem("portfolio-scroll-pos");
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [location.pathname, navType, location.state]);

  return null;
}
