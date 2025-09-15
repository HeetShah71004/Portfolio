import { useEffect, useState } from "react";
import { useScrollNavigation } from "../hooks/useScrollNavigation";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { activeSection, scrollToNext, scrollToPrevious, sections } =
    useScrollNavigation();

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

  const currentSectionIndex = sections.findIndex(
    (section) => section.id === activeSection
  );
  const isFirstSection = currentSectionIndex === 0;
  const isLastSection = currentSectionIndex === sections.length - 1;

  if (!isVisible) return null;

  return (
    <div className="scroll-indicator-container">
      {/* Scroll Up Button */}
      {!isFirstSection && (
        <button
          className="scroll-nav-button scroll-up"
          onClick={scrollToPrevious}
          aria-label="Scroll to previous section"
        >
          <FiChevronUp size={20} />
        </button>
      )}

      {/* Main Scroll Indicator */}
      <div className="scroll-indicator" onClick={scrollToNext}>
        <div className="mouse">
          <div className="scroll-wheel"></div>
        </div>
        <div className="scroll-text">
          {isLastSection ? "End" : "Scroll Down"}
        </div>
      </div>

      {/* Scroll Down Button */}
      {!isLastSection && (
        <button
          className="scroll-nav-button scroll-down"
          onClick={scrollToNext}
          aria-label="Scroll to next section"
        >
          <FiChevronDown size={20} />
        </button>
      )}

      {/* Section Indicator */}
      <div className="section-indicator">
        <span className="current-section">
          {sections[currentSectionIndex]?.name}
        </span>
        <span className="section-counter">
          {currentSectionIndex + 1} / {sections.length}
        </span>
      </div>
    </div>
  );
};

export default ScrollIndicator;
