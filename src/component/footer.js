import React from "react";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <footer className="bck_black">
      <Fade delay={800}>
        <div className="font_righteous footer_logo_venue">
          {" "}
          The Concert Venues
        </div>
        <div className="footer_copyright">
          The Conserts all rights reserved.
          <span> {new Date().getFullYear()}</span>
        </div>
      </Fade>
    </footer>
  );
};
export default Footer;
