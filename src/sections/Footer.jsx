import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <a href="#hero" className="brand-name">
            Heet Shah
          </a>
          <p className="brand-title">Full Stack Developer</p>
          <p className="brand-tagline">
            <span>🚀</span>
            <span>Building amazing web experiences</span>
          </p>
        </div>

        {/* Social Section */}
        <div className="social-section">
          <h3 className="social-title">Let's Connect</h3>
          <div className="socials">
            {socialImgs.map((socialImg, index) => (
              <div key={index} className="social-icon-wrapper group">
                {socialImg.url ? (
                  <a
                    href={socialImg.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={`Visit ${socialImg.name}`}
                    title={`Connect on ${
                      socialImg.name.charAt(0).toUpperCase() +
                      socialImg.name.slice(1)
                    }`}
                  >
                    <img
                      src={socialImg.imgPath}
                      alt={`${socialImg.name} icon`}
                      className="social-icon"
                    />
                  </a>
                ) : (
                  <img
                    src={socialImg.imgPath}
                    alt={`${socialImg.name} icon`}
                    className="social-icon"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer Info */}
        <div className="footer-info">
          <div className="copyright">
            <p className="year">© {new Date().getFullYear()} Heet Shah</p>
            <p className="rights">All rights reserved</p>
          </div>
          <div className="tech-stack">
            <p className="built-with">
              <span>Built with</span>
              <span>❤️</span>
              <span>using React & Tailwind CSS</span>
            </p>
            <div className="availability">
              <span>📧</span>
              <span>Available for opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
