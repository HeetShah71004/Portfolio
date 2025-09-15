import { useState, useEffect, useCallback } from "react";

export const useScrollNavigation = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const sections = [
    { id: "hero", name: "Home" },
    { id: "work", name: "Showcase" },
    { id: "features", name: "Features" },
    { id: "skills", name: "Tech Stack" },
    { id: "contact", name: "Contact" },
  ];

  // Calculate scroll progress
  const calculateScrollProgress = useCallback(() => {
    const scrollTop = window.pageYOffset;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min((scrollTop / docHeight) * 100, 100);
    setScrollProgress(progress);
  }, []);

  // Find active section based on scroll position
  const findActiveSection = useCallback(() => {
    const scrollPosition = window.scrollY + 100; // Offset for better detection

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i].id);
      if (section && section.offsetTop <= scrollPosition) {
        setActiveSection(sections[i].id);
        break;
      }
    }
  }, [sections]);

  // Smooth scroll to section
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setIsScrolling(true);
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Reset scrolling state after animation
      setTimeout(() => setIsScrolling(false), 1000);
    }
  }, []);

  // Scroll to next section
  const scrollToNext = useCallback(() => {
    const currentIndex = sections.findIndex(
      (section) => section.id === activeSection
    );
    if (currentIndex < sections.length - 1) {
      scrollToSection(sections[currentIndex + 1].id);
    }
  }, [activeSection, sections, scrollToSection]);

  // Scroll to previous section
  const scrollToPrevious = useCallback(() => {
    const currentIndex = sections.findIndex(
      (section) => section.id === activeSection
    );
    if (currentIndex > 0) {
      scrollToSection(sections[currentIndex - 1].id);
    }
  }, [activeSection, sections, scrollToSection]);

  // Handle keyboard navigation
  const handleKeyPress = useCallback(
    (event) => {
      if (isScrolling) return;

      switch (event.key) {
        case "ArrowDown":
        case "PageDown":
          event.preventDefault();
          scrollToNext();
          break;
        case "ArrowUp":
        case "PageUp":
          event.preventDefault();
          scrollToPrevious();
          break;
        default:
          break;
      }
    },
    [isScrolling, scrollToNext, scrollToPrevious]
  );

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      if (isScrolling) return;

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        calculateScrollProgress();
        findActiveSection();
      }, 10);
    };

    const handleWheel = (event) => {
      // Optional: Add smooth wheel scrolling behavior
      if (Math.abs(event.deltaY) > 50) {
        event.preventDefault();
        if (event.deltaY > 0) {
          scrollToNext();
        } else {
          scrollToPrevious();
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyPress);
    // Uncomment the next line for wheel-based section navigation
    // window.addEventListener('wheel', handleWheel, { passive: false });

    // Initial calculations
    calculateScrollProgress();
    findActiveSection();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyPress);
      // window.removeEventListener('wheel', handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, [
    calculateScrollProgress,
    findActiveSection,
    handleKeyPress,
    isScrolling,
    scrollToNext,
    scrollToPrevious,
  ]);

  return {
    activeSection,
    scrollProgress,
    sections,
    scrollToSection,
    scrollToNext,
    scrollToPrevious,
    isScrolling,
  };
};
