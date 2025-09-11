import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ProjectLink from "../components/ProjectLink";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const codeRef = useRef(null);
  const spotifyRef = useRef(null);
  const streamRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [codeRef.current, spotifyRef.current, streamRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={spotifyRef} className="first-project-wrapper">
            <div className="image-wrapper group relative">
              <a
                href="https://realtime-spotify-clone-bx45.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full w-full"
              >
                <img
                  src="/images/spotify.png"
                  alt="Spotify Clone App"
                  className="transition-all duration-300 group-hover:brightness-75"
                />
                <div className="absolute bottom-4 right-4 bg-[#1ED760]/90 rounded-full p-2 shadow-md animate-bounce">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </a>
            </div>
            <div className="text-content">
              <h2>
                On-Demand Music Streaming Made Simple with a Powerful Spotify
                Clone
              </h2>
              <p className="text-white-50 md:text-xl">
                A real-time music streaming app built with React, Node.js, and
                TailwindCSS—delivering a seamless and interactive listening
                experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={codeRef}>
              <div className="image-wrapper bg-[#FFEFDB] group relative">
                <a
                  href="https://code-craft-mocha.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full w-full"
                >
                  <img
                    src="/images/code-craft.png"
                    alt="Code App Interface"
                    className="transition-all duration-300 group-hover:brightness-75"
                  />
                  <div className="absolute bottom-4 right-4 bg-blue-500/90 rounded-full p-2 shadow-md animate-bounce">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </a>
              </div>
              <h2>
                Code-Craft: Elevate Your Coding with a Modern, Intuitive Editor
              </h2>
            </div>

            <div className="project" ref={streamRef}>
              <div className="image-wrapper bg-[#FFE7EB] group relative">
                <a
                  href="https://echo-stream.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full w-full"
                >
                  <img
                    src="/images/stream2.png"
                    alt="Streamify App"
                    className="transition-all duration-300 group-hover:brightness-75"
                  />
                  <div className="absolute bottom-4 right-4 bg-green-500/90 rounded-full p-2 shadow-md animate-bounce">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </a>
              </div>
              <h2>Streamify - Messaging App</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
