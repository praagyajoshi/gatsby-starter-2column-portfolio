import React, { Component } from 'react'

import './style.scss'

class TechUnit extends Component {
  render() {
    return (
      <div className="tech-unit col-xs-1 col-sm-1 col-md-1">
        <div
          className="image"
          style={{
            backgroundImage: `url(${this.props.logo})`,
            backgroundColor: this.props.colour
          }}>
        </div>
        <div className="subtitle">
          {this.props.subtitle}
        </div>
      </div>
    )
  }
}

export default TechUnit
