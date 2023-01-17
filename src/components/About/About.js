import React from 'react';
import meImg from "../images/me.jpg";
import "./About.scss";

const About = () => (
  <div id="about">
  <div className="aboutContainer">
    <div className="aboutLeft">
      <h1>ABOUT</h1>
      <h3>
        Meet Michael Abaniwo
      </h3>
      <div className="lowerText">
      <p>
        Michael Abaniwo is a Software Developer with experience in building highly performant websites. Michael is very excited and passionate about user experience and interfaces, making sure that these interfaces are properly implemented with Frontend and Backend languages in real-time. He ensures that the implementation of these websites meets predefined expectation and that delivery is in good time.
      </p>
      {/* <div className="abtButton" onClick={() => window.location = 'https://www.linkedin.com/in/michael-abaniwo-521620193/'}>Checkout my Resume</div> */}
    </div>
    </div>
    <div className="aboutRight">
      <img src={meImg} alt="myImg" />
    </div>
  </div>
  </div>
);

export default About;