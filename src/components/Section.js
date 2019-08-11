import React, { Component } from "react"

import "./Section.scss"

class Section extends Component {
  render() {
    return (
      <div className="section">
        <h3 className="bold">{this.props.title}</h3>
        <div className="section-units">{this.props.children}</div>
      </div>
    )
  }
}

export default Section
