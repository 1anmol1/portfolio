import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollReveal = ({ children, width = "fit-content", delay = 0 }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                // On mobile, the bottom navbar (approx 80-100px) can hide the reveal.
                // We set a negative bottom margin to force the trigger point higher up.
                // effectively saying "start animating only when 120px above the bottom of the screen".
                margin: isMobile ? "0px 0px -120px 0px" : "0px 0px -50px 0px",
            }}
            transition={{
                duration: isMobile ? 0.9 : 0.6, // Slower on mobile
                delay: delay,
                ease: [0.16, 1, 0.3, 1], // easeOutExpo-ish
            }}
            style={{ width }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
