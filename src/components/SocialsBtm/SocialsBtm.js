import React from 'react';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GrTwitter } from "react-icons/gr";
import "./SocialsBtm.scss";

const SocialsBtm = () => {
  return (
    <div className="socialBtmIcons">
       <li onClick={() => (window.location = "https://github.com/AbaniwoM")}><AiFillGithub /></li>
       <li onClick={() => (window.location = "https://www.linkedin.com/in/michael-abaniwo-521620193/")}><AiFillLinkedin /></li>
       <li onClick={() => (window.location = "https://twitter.com/_codedr")}><GrTwitter /></li>
    </div>
  )
}

export default SocialsBtm