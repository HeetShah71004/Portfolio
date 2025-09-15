import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import Navbar from "./components/Navbar.jsx";
// import LogoShowcase from "./sections/LogoShowcase.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
// import ExperienceSection from "./sections/Experience.jsx";
import TechStack from "./sections/TechStack.jsx";
// import Testimonials from "./sections/Testimonials.jsx";
import Footer from "./sections/Footer.jsx";
import Contact from "./sections/Contact.jsx";
import ScrollProgressBar from "./components/ScrollProgressBar.jsx";
import SectionNavigation from "./components/SectionNavigation.jsx";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#1c1c21",
            color: "#d9ecff",
            border: "1px solid #839cb5",
            borderRadius: "12px",
            fontSize: "14px",
            fontWeight: "500",
          },
          success: {
            iconTheme: {
              primary: "#10B981",
              secondary: "#ffffff",
            },
          },
          error: {
            iconTheme: {
              primary: "#EF4444",
              secondary: "#ffffff",
            },
          },
        }}
      />
      <ScrollProgressBar />
      <SectionNavigation />
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <ShowcaseSection />
      <div id="features">
        <FeatureCards />
      </div>
      {/* <ExperienceSection /> */}
      <TechStack />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default App;
