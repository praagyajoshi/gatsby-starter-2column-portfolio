import React, { Component } from "react"
import "./ProjectUnit.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAndroid, faApple } from "@fortawesome/free-brands-svg-icons"
import { faGlasses, faGlobeEurope } from "@fortawesome/free-solid-svg-icons"

class ProjectUnit extends Component {
  render() {
    return (
      <div
        className="experience-unit col-xs-12 col-sm-6 col-md-3"
        id={this.props.id}
      >
        {this.props.link && (
          <a href={this.props.link} target="_blank" rel="noopener noreferrer">
            <div
              className="image"
              style={{
                backgroundImage: `url(${this.props.logo})`,
                backgroundColor: this.props.colour,
              }}
            ></div>
          </a>
        )}
        {this.props.title && (
          <div className="title bold">{this.props.title}</div>
        )}
        {this.props.subtitle && (
          <div className="subtitle">{this.props.subtitle}</div>
        )}
        {this.props.role && this.props.year && (
          <div className="subtitle">
            <strong>Role:</strong> {this.props.role}
            <br />
            <strong>Year:</strong> {this.props.year}
            <br />
          </div>
        )}
        {this.props.links && (
          <div className="links">
            {this.props.links.map(node => (
              <a
                href={node.link}
                target="_blank"
                id={node.name}
                key={node.name}
                rel="noopener noreferrer"
              >
                {node.platform === "android" && (
                  <FontAwesomeIcon icon={faAndroid} width="32" />
                )}
                {node.platform === "ios" && (
                  <FontAwesomeIcon icon={faApple} width="32" />
                )}
                {node.platform === "iot" && (
                  <FontAwesomeIcon icon={faGlasses} width="32" />
                )}
                {node.platform === "web" && (
                  <FontAwesomeIcon icon={faGlobeEurope} width="32" />
                )}
              </a>
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default ProjectUnit
