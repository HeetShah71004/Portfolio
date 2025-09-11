import React from "react";

const ProjectLink = ({ size = "md" }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`project-link-icon ${sizeClasses[size]} flex justify-center items-center rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-[60%] h-[60%] text-black"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </div>
      <span className="text-white text-sm font-medium bg-black/70 px-3 py-1 rounded-full">
        View Project
      </span>
    </div>
  );
};

export default ProjectLink;
