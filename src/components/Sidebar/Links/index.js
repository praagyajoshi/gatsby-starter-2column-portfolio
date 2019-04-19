import React, { Component } from 'react'

import './style.scss'
import 'font-awesome/css/font-awesome.min.css'

class Links extends Component {
  render() {
    return (
      <div className="links">
        <ul className="icons-list">
          <li className="icon">
            <a href="https://github.com/gusfune" target="_blank">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://www.twitter.com/gusfune" target="_blank">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://www.linkedin.com/in/gusfune/" target="_blank">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://log.epicawesome.co/@gusfune" target="_blank">
              <i className="fa fa-medium"></i>
            </a>
          </li>
          <li className="icon">
          <a href="https://steamcommunity.com/id/the_killer_panda/" target="_blank">
            <i className="fa fa-steam"></i>
          </a>
        </li>
          <li className="icon">
            <a href="mailto:gusfune@protonmail.com" target="_blank">
              <i className="fa fa-envelope"></i>
            </a>
          </li>
        </ul>
        <div className="small">
          Built with ❤️ using <a href="https://www.gatsbyjs.org/" target="_blank">GatsbyJS</a>
        </div>
      </div>
    )
  }
}

export default Links