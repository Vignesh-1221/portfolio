import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const FadeInSection = ({ children }) => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [previousScrollY, setPreviousScrollY] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger continuously when in view
    threshold: 0.5, // Trigger when 50% of the component is in view
  });

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > previousScrollY) {
      // Scrolling down
      setScrollDirection("down");
    } else {
      // Scrolling up
      setScrollDirection("up");
    }
    setPreviousScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [previousScrollY]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 transform ${
        inView
          ? scrollDirection === "down"
            ? "opacity-100 translate-x-0"  // Fade in when scrolling down
            : "opacity-0 translate-x-10"  // Fade out when scrolling up
          : "opacity-0 translate-x-10"
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
