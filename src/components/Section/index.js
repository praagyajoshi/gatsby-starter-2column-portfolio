import React, {Component} from 'react'

import './style.scss';

class Section extends Component {
  render () {
    return (
      <div className="section">
        <h6 className="bold">
          {this.props.title}
        </h6>
        <div className="section-units">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Section
