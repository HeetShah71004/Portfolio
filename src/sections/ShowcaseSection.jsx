import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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
            <div className="image-wrapper">
              <a
                href="https://realtime-spotify-clone-bx45.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/spotify.png" alt="Spotify Clone App" />
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
              <div className="image-wrapper bg-[#FFEFDB]">
                <a
                  href="https://code-craft-mocha.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/code-craft.png" alt="Code App Interface" />
                </a>
              </div>
              <h2>
                Code-Craft: Elevate Your Coding with a Modern, Intuitive Editor
              </h2>
            </div>

            <div className="project" ref={streamRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <a
                  href="https://echo-stream.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/stream2.png" alt="Streamify App" />
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
