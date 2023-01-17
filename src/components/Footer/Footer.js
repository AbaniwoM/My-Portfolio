import React from 'react';
import SocialsBtm from '../SocialsBtm/SocialsBtm';
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footContainer">
       <div className="ftIcns"><SocialsBtm /></div>
       <div className="ftContact">
            <h2>Contact Me</h2>
            <p onClick={() => (window.location = "mailto:michaelabaniwo@gmail.com")}>michaelabaniwo@gmail.com</p>
            <p onClick={() => (window.location = "tel:+234-807-657-8993")}>+234-807-657-8993</p>
       </div>
       <div className="ftBtm">Bringing you code with a touch from Heaven</div>
    </div>
  )
}

export default Footer