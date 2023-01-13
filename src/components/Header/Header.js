import React from 'react';
import { FcMindMap } from "react-icons/fc"
import Socials from '../Socials/Socials';
import Hamburger from './Hamburger';
import "./Header.scss";

const Header = () => {
  return (
    <div className="headContainer">
      <div className="logo">
        <div><FcMindMap /></div>
        <h3>Portfolio</h3>
      </div>
      <div className="links">
        <li>Projects</li>
        <li>Technologies</li>
        <li>About</li>
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