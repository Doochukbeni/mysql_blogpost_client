import React from "react";
import Logo from "../images/IMG-20180122-WA0076 (1).jpg";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="logo" />
      <span> &copy;{new Date().getFullYear()} chukbeni </span>
    </footer>
  );
};

export default Footer;
