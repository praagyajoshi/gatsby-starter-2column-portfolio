import React, { Component } from 'react'

import './ProjectUnit.scss'

class ProjectUnit extends Component {
  render() {
    return (
      <div className="experience-unit col-xs-12 col-sm-6 col-md-3" id={this.props.id}>
        <div
          className="image"
          style={{
            backgroundImage: `url(${this.props.photo})`
          }}>
          </div>
        <div className="title bold">
          {this.props.name}
        </div>
        <div className="subtitle">
          {this.props.text}
        </div>
        <div className="subtitle">
          <strong>Context:</strong> {this.props.context}<br/>
        </div>        
      </div>
    )
  }
}

export default ProjectUnit
