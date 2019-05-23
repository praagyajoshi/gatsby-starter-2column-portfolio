import React, { Component } from 'react'
import cspo from "../assets/images/seal-cspo.png" 

import './About.scss'

class About extends Component {
  render () {
    return (
      <div className="about">
        <div className="image">
        </div>
        <div className="bio">
          <p>I’m an experienced product manager who can fix hard-to-find bugs, test design changes in the browser, and automate anything my team needs to get done faster.</p>
          <p>I’ve delivered over 100 projects for clients like 3M, Coca-Cola, Behold Studios, BMW, Heineken, McDonald's and Motorola. I’ve also worked with early-stage startups on everything from product research to hiring, team-building, and even accounting.</p>
        </div>
        <div className="certification">
          <img src={cspo} alt="Certified Scrum Product Owner®" width="100%" height="auto" />
        </div>
      </div>
    )
  }
}

export default About