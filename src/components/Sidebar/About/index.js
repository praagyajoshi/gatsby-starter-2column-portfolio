import React, { Component } from 'react'
import cspo from "../../../assets/images/seal-cspo.png" 

import './style.scss'

class About extends Component {
  render () {
    return (
      <div className="about">
        <div className="image">
        </div>
        <div className="bio">
          I am an expert with over 10 years experience on making ideas come to life.
          <div className="emoji">
            🐼 &nbsp; 🥓 &nbsp; 🍔 &nbsp; 🐕
          </div>
        </div>
        <div className="certification">
          <img src={cspo} alt="Certified Scrum Product Owner®" width="100%" height="auto" />
        </div>
      </div>
    )
  }
}

export default About