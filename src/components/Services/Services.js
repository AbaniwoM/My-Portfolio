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
          <h3>React.js, TypeScript, HTML5, CSS3, JavaScript, Tailwind CSS, Material-ui.</h3>
        </div>
        <div className="language">
          <div className="lanIcn"><DiNodejsSmall /></div>
          <h3>Node.js, MongoDB, Express, jwt, joi.</h3>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Services