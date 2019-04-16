import React, {Component} from 'react'

import './style.scss';

class Section extends Component {
  render () {
    return (
      <div className="section">
        <h5 className="bold">
          {this.props.title}
        </h5>
        <div className="section-units">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Section
