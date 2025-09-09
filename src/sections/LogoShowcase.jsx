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

const LogoShowcase = () => (
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
);

export default LogoShowcase;
