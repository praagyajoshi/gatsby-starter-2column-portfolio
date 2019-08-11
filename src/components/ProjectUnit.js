import React, { Component } from "react"

import "./ProjectUnit.scss"

class ProjectUnit extends Component {
  render() {
    return (
      <div
        className="experience-unit col-xs-12 col-sm-6 col-md-3"
        id={this.props.id}
      >
        <a href={this.props.link} target="_blank" rel="noopener noreferrer">
          <div
            className="image"
            style={{
              backgroundImage: `url(${this.props.logo})`,
              backgroundColor: this.props.colour,
            }}
          ></div>
        </a>
        <div className="title bold">{this.props.title}</div>
        <div className="subtitle">{this.props.subtitle}</div>
        <div className="subtitle">
          <strong>Role:</strong> {this.props.role}
          <br />
          <strong>Year:</strong> {this.props.year}
          <br />
        </div>
      </div>
    )
  }
}

export default ProjectUnit
