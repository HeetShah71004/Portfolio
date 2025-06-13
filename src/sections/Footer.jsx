import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center md:items-start items-center">
          <a href="/">Home</a>
        </div>
        {/* <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <img src={socialImg.imgPath} alt="social icon" />
            </div>
          ))}
        </div> */}
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              {socialImg.url ? (
                <a
                  href={socialImg.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={socialImg.imgPath} alt={`${socialImg.name} icon`} />
                </a>
              ) : (
                <img src={socialImg.imgPath} alt={`${socialImg.name} icon`} />
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Heet Shah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
