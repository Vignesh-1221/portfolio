import React from "react";
import { useInView } from "react-intersection-observer";

const FadeInSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
    rootMargin: "0px 0px -40px 0px",
  });

  return (
    <div
      ref={ref}
      className={`fade-section ${inView ? "is-visible" : ""}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
