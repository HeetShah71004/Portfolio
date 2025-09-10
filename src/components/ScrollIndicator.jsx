import { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide the scroll indicator when user starts scrolling
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollDown = () => {
    const nextSection = document.getElementById("work");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="scroll-indicator" onClick={handleScrollDown}>
      <div className="mouse">
        <div className="scroll-wheel"></div>
      </div>
      <div className="scroll-text">Scroll Down</div>
    </div>
  );
};

export default ScrollIndicator;
