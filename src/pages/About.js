import React, { Component } from 'react';
import "./About.css";
import headshot from "../assets/headshot.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
      <div class="split left">
        <div className="centered">
          <img 
            className="profile_image"
            src={headshot}
            alt="Profile Pic"
            ></img>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <div className="name_title">Sophie Tsanang</div>
          <div className="brief_description">
            // I am a rising sophomore at Columbia University majoring in Computer Science with a minor in French. I loves improving my coding skills and watching new shows. //
          </div>
        </div>
      </div>
    </div>
    )
  }
}