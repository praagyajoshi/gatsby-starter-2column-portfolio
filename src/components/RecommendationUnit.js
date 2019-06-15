import React, { Component } from 'react'

import './RecommendationUnit.scss'

class RecommendationUnit extends Component {
  render() {
    return (
      <div className="recommendation-unit row" id={this.props.id}>
          <div className="col-xs-2 col-sm-1">
            <img
              className="image"
              src={this.props.photo.file.url}
              title={this.props.photo.title}
              alt={this.props.photo.title}
              width="100%"
            />
          </div>
          <div className="col-xs-10 col-sm-11">
            <h2 className="title bold">
              {this.props.name}
            </h2>
            <h4>
              {this.props.context}
            </h4>
            <div className="subtitle">
              "{this.props.text}"
            </div>
          </div>
        </div>        
    )
  }
}

export default RecommendationUnit