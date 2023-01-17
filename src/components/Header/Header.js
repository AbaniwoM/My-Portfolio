import React from 'react';
import { FcMindMap } from "react-icons/fc"
import Socials from '../Socials/Socials';
import Hamburger from './Hamburger';
import "./Header.scss";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="headContainer">
      <div className="logo">
        <div><FcMindMap /></div>
        <h3>Portfolio</h3>
      </div>
      <div className="links">
        <Link to="projects" smooth={true} duration={1000}>
          <li>Projects</li>
        </Link>
        <Link to="tech" smooth={true} duration={1000}>
          <li>Technologies</li>
        </Link>
        <Link to="about" smooth={true} duration={1000}>
          <li>About</li>
        </Link>
      </div>
      <div className="socials">
        <Socials />
      </div>
      <div className="hamMenu">
        <Hamburger />
      </div>
    </div>
  )
}

export default Header