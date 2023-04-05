import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/IMG-20180122-WA0076 (1).jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=node">
            <h6>NodeJS</h6>
          </Link>
          <Link className="link" to="/?cat=html">
            <h6>Html</h6>
          </Link>
          <Link className="link" to="/?cat=css">
            <h6>Css</h6>
          </Link>
          <Link className="link" to="/?cat=react">
            <h6>ReactJS</h6>
          </Link>
          <Link className="link" to="/?cat=firebase">
            <h6>Firebase</h6>
          </Link>
          <Link className="link" to="/?cat=Javascript">
            <h6>Javascript</h6>
          </Link>
          <span>Ben</span>
          <span>logout</span>
          <span className="write">
            <Link to="/create" className="link">
              write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
