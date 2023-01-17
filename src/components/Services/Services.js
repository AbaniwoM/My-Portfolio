import React from 'react';
import "./Services.scss";
import { DiReact, DiNodejsSmall } from "react-icons/di"

const Services = () => {
  return (
    <div id="tech">
    <div className="serviceContainer">
      <div className="headText">WHAT I DO</div>
      <div className="content">
        <div className="language">
          <div className="lanIcn"><DiReact /></div>
          <h3>JavaScript, React.js, HTML5, CSS3, Next.js, Tailwind CSS, Material-ui.</h3>
        </div>
        <div className="language">
          <div className="lanIcn"><DiNodejsSmall /></div>
          <h3>Node.js, Passport.js, ejs, MongoDB, Express.</h3>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Services