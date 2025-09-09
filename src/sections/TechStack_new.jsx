import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader.jsx";

const TechStack = () => {
  // All skills in one array for horizontal scrolling
  const allSkills = [
    { name: "React.js", level: "Expert", years: "2+", color: "#61DAFB", icon: "⚛️" },
    { name: "JavaScript ES6+", level: "Expert", years: "3+", color: "#F7DF1E", icon: "🟨" },
    { name: "Python", level: "Expert", years: "3+", color: "#3776AB", icon: "🐍" },
    { name: "Node.js", level: "Advanced", years: "2+", color: "#339933", icon: "💚" },
    { name: "TypeScript", level: "Advanced", years: "2+", color: "#3178C6", icon: "🔵" },
    { name: "Tailwind CSS", level: "Expert", years: "2+", color: "#06B6D4", icon: "🎨" },
    { name: "Next.js", level: "Advanced", years: "2+", color: "#000000", icon: "▲" },
    { name: "MongoDB", level: "Advanced", years: "2+", color: "#47A248", icon: "🍃" },
    { name: "Three.js", level: "Intermediate", years: "1+", color: "#000000", icon: "🎮" },
    { name: "Docker", level: "Intermediate", years: "1+", color: "#2496ED", icon: "🐳" },
    { name: "Git & GitHub", level: "Expert", years: "3+", color: "#F05032", icon: "🔀" },
    { name: "REST APIs", level: "Expert", years: "2+", color: "#FF9500", icon: "🔗" },
  ];

  // Animate the skills container on scroll and auto-scroll
  useGSAP(() => {
    // Initial fade in animation
    gsap.fromTo(
      ".skills-container",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );

    // Auto-scroll animation
    const skillsTrack = document.querySelector('.skills-track');
    if (skillsTrack) {
      const scrollWidth = skillsTrack.scrollWidth;
      const containerWidth = skillsTrack.parentElement.offsetWidth;
      
      gsap.to(skillsTrack, {
        x: -(scrollWidth - containerWidth),
        duration: 20,
        ease: "none",
        repeat: -1,
        repeatDelay: 0,
      });
    }

    // Animate individual skill cards
    gsap.fromTo(
      ".skill-card",
      {
        scale: 0.9,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#skills",
          start: "top 80%",
        },
      }
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Professional Skills & Expertise"
          sub="🎯 My Technical Capabilities & Core Competencies"
        />
        
        <div className="mt-16 skills-container">
          {/* Auto-scrolling Skills Row */}
          <div className="skills-scroll-wrapper">
            <div className="skills-track">
              {/* Duplicate skills for seamless loop */}
              {[...allSkills, ...allSkills].map((skill, index) => (
                <div
                  key={index}
                  className="skill-card"
                  style={{ "--skill-color": skill.color }}
                >
                  <div className="skill-card-content">
                    {/* Skill Icon & Name */}
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <h4 className="skill-name">{skill.name}</h4>
                    </div>

                    {/* Skill Level Badge */}
                    <div className="skill-level-badge" style={{ borderColor: skill.color }}>
                      <span className="level-dot" style={{ backgroundColor: skill.color }}></span>
                      <span className="level-text">{skill.level}</span>
                    </div>

                    {/* Experience */}
                    <div className="skill-experience">
                      <span className="experience-text">{skill.years} experience</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="progress-bar">
                      <div 
                        className="progress-fill"
                        style={{ 
                          backgroundColor: skill.color,
                          width: skill.level === 'Expert' ? '90%' : 
                                 skill.level === 'Advanced' ? '75%' : '60%'
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Hover Gradient Effect */}
                  <div 
                    className="skill-card-bg"
                    style={{ 
                      background: `linear-gradient(135deg, ${skill.color}15, transparent)`
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Summary */}
          <div className="mt-12 text-center">
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-3">
                🚀 Ready to contribute immediately with my expertise
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {allSkills
                  .filter(skill => skill.level === 'Expert')
                  .map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium"
                    >
                      {skill.name}
                    </span>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
