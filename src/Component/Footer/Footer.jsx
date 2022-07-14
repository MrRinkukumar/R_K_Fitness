import React from "react";

import "./Footer.css";
import { Link } from "react-scroll";

import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social_links">
          <a
            href="https://github.com/MrRinkukumar"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Github} alt="" />
          </a>
          <a
            href="https://www.instagram.com/mr_rinku_kumar_17/?utm_source=qr"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Instagram} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/mr-rinku-kumar-saini-52a164220"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedIn} alt="" />
          </a>
        </div>
        <div className="header-menu-f">
          <li>
            <Link to="Home" span={true} smooth={true}>
              Home
            </Link>
          </li>
          <li>
            <Link to="Programs" span={true} smooth={true}>
              programs
            </Link>
          </li>
          <li>
            <Link to="Reasons" span={true} smooth={true}>
              why us
            </Link>
          </li>
          <li>
            <Link to="Plans" span={true} smooth={true}>
              plans
            </Link>
          </li>

          <li>
            <Link to="Testimonials" span={true} smooth={true}>
              testimonials
            </Link>
          </li>
        </div>
          <span className="Example" style={{color :'white' ,diplay:'flex' , flexDiration:'row'}}>This is a Example app</span>
        <div className="logo-f">
          <div className="blur blur-f-1"></div>
          <div className="blur blur-f-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
