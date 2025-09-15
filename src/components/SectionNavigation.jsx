import { useScrollNavigation } from "../hooks/useScrollNavigation";

const SectionNavigation = () => {
  const { activeSection, sections, scrollToSection } = useScrollNavigation();

  return (
    <nav className="section-navigation">
      {sections.map((section) => (
        <button
          key={section.id}
          className={`nav-dot group ${
            activeSection === section.id ? "active" : ""
          }`}
          onClick={() => scrollToSection(section.id)}
          aria-label={`Navigate to ${section.name} section`}
          title={section.name}
        >
          <span className="nav-dot-inner" />
          <span className="nav-label">{section.name}</span>
        </button>
      ))}
    </nav>
  );
};

export default SectionNavigation;
