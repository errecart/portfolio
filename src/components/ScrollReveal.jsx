"use client";
import { useInView } from "@/hooks/useInView";

const ScrollReveal = ({
  children,
  delay = 0,
  animation = "fade-up",
  className = "",
}) => {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${animation} ${isInView ? "in-view" : ""} ${className}`.trim()}
      style={{
        "--reveal-delay": `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
