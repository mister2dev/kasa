import React from "react";
import logo from "../assets/footer-logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_img">
        <img src={logo} alt="Logo de bas de page" />
      </div>
      <div className="legal">
        <small>© 2020 Kasa. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
