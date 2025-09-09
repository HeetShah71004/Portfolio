import TitleHeader from "../components/TitleHeader.jsx";
import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img
        src={icon.imgPath}
        alt={icon.name}
        className="h-12 md:h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
      />
    </div>
  );
};

const TechStack = () => {
  // Expert skills for the summary section
  const expertSkills = [
    "React.js",
    "JavaScript ES6+",
    "Python",
    "Tailwind CSS",
    "Git & GitHub",
    "REST APIs",
  ];

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Professional Skills & Expertise"
          sub="🎯 My Technical Capabilities & Core Competencies"
        />

        {/* Horizontal Scrolling Tech Logos */}
        <div className="md:my-20 my-10 relative">
          <div className="gradient-edge" />
          <div className="gradient-edge" />

          <div className="marquee h-52">
            <div className="marquee-box md:gap-16 gap-8">
              {logoIconsList.map((icon, index) => (
                <LogoIcon key={`first-${index}`} icon={icon} />
              ))}

              {logoIconsList.map((icon, index) => (
                <LogoIcon key={`second-${index}`} icon={icon} />
              ))}
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-12 text-center">
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-white mb-3">
              🚀 Ready to contribute immediately with my expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {expertSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
