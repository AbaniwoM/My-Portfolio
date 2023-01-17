import React from 'react';
import "./Projects.scss";
import blgImg from "../images/blg.jpg";
import frmPlus from "../images/form_plus.png";

const Projects = () => {
  return (
    <div id="projects">
    <div className="projectContainer">
        <div className="projHead">
            <h2>PROJECTS</h2>
            <p>Checkout some of my works</p>
        </div>
        <div className="project">
            <div className="left">
              <img src={blgImg} alt="blg-img"/>
            </div>
            <div className="right">
              <h4>ILLUSTRATION</h4>
              <h2>Blogging API v1</h2>
              <p>The Blogging API allows Developers work with files which have the functionality of user authentication, ability to secure login routes, create blog posts, update blog post, delete blog posts and view all blog posts. Routes can be tested with Postman.</p>
              <div className="prjButton">
              <div className="link" onClick={() => window.location = 'https://elated-sweatpants-bear.cyclic.app/'}>View Project</div>
              <div className="link" onClick={() => window.location = 'https://github.com/AbaniwoM/Blogging-API-v1'}>View Code</div>
              </div>
            </div>
        </div>
        <div className="project">
            <div className="left frmPlus">
              <img src={frmPlus} alt="frm-plus"/>
            </div>
            <div className="right">
              <h4>ILLUSTRATION</h4>
              <h2>REST API - React</h2>
              <p>This is basically a project which involves consuming the endpoints from an available API. It displays loading time with conditional-rendering and manages the contents of the API with React.js</p>
              <div className="prjButton">
              <div className="link" onClick={() => window.location = 'https://mike-abaniwos-form-plus-technical-task.netlify.app/'}>View Project</div>
              <div className="link" onClick={() => window.location = 'https://github.com/AbaniwoM/formplus-task'}>View Code</div>
              </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Projects