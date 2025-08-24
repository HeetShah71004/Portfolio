import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import Navbar from "./components/Navbar.jsx";
// import LogoShowcase from "./sections/LogoShowCase.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
// import ExperienceSection from "./sections/Experience.jsx";
import TechStack from "./sections/TechStack.jsx";
// import Testimonials from "./sections/Testimonials.jsx";
import Footer from "./sections/Footer.jsx";
import Contact from "./sections/Contact.jsx";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      {/* <LogoShowcase /> */}
      <FeatureCards />
      {/* <ExperienceSection /> */}
      <TechStack />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default App;
