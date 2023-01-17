import React from 'react';
import "./Journey.scss";
import { WiWindBeaufort1, WiWindBeaufort2, WiWindBeaufort3, WiWindBeaufort4, WiWindBeaufort5, WiWindBeaufort6, WiWindBeaufort7} from "react-icons/wi";

const Journey = () => {
  return (
    <div className="jrnContainer">
       <div className="jrnHead">THE JOURNEY SO FAR</div>
       <div className="jrnText">I started my programming journey in November 2019 when I developed interest in frontend web development. I have great eyes towards seeing an active website with the interesting display of its functions. This made me very inquisitive and interested in learning the JavaScript language. My greatest milestone in web development so far is the young project I did with a team of 8 to build the VetConsult website. I also joined a team to build the Real Power Project; an application to connect software with hardware equipments. These projects exposed me to how I can make very professional websites. It has been an interesting journey so far.</div>
       <div className="jrnDate">
            <div className="contained">
               <div className="up">
                   <h3>2019</h3>
                   <p><WiWindBeaufort1 /></p>
               </div>
               <div className="down">Started my journey</div>
            </div>
            <div className="contained">
               <div className="up">
                   <h3>2020</h3>
                   <p><WiWindBeaufort2 /></p>
               </div>
               <div className="down">Worked as a frontend developer at Truparse Nigeria Limited</div>
            </div>
            <div className="contained">
               <div className="up">
                   <h3>2021</h3>
                   <p><WiWindBeaufort3 /></p>
               </div>
               <div className="down">Built my first personal website with HTML and CSS</div>
            </div>
            <div className="contained">
               <div className="up">
                   <h3>2021</h3>
                   <p><WiWindBeaufort4 /></p>
               </div>
               <div className="down">Started working as a frontend intern with Zuri Team</div>
            </div>
            <div className="contained">
               <div className="up">
                   <h3>2021</h3>
                   <p><WiWindBeaufort5 /></p>
               </div>
               <div className="down">Started and ended an HNG internship training with Hotels.ng</div>
            </div>
            <div className="contained">
               <div className="up">
                   <h3>2022</h3>
                   <p><WiWindBeaufort6 /></p>
               </div>
               <div className="down">Worked with Hamoye.com as a Frontend Developer</div>
            </div>
            <div className="contained">
               <div className="up">
                   <h3>2022</h3>
                   <p><WiWindBeaufort7 /></p>
               </div>
               <div className="down">Started learning Node.js at Alt_School</div>
            </div>
       </div>
    </div>
  )
}

export default Journey