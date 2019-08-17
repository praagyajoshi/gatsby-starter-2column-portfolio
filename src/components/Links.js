import React, { Component } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faMedium,
  faSteam,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import "./Links.scss"

class Links extends Component {
  render() {
    return (
      <div className="sidebar-links">
        <ul className="icons-list">
          <li className="icon">
            <a
              href="https://github.com/gusfune"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li className="icon">
            <a
              href="https://www.twitter.com/gusfune"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li className="icon">
            <a
              href="https://www.linkedin.com/in/gusfune/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li className="icon">
            <a
              href="https://log.epicawesome.co/@gusfune"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faMedium} />
            </a>
          </li>
          <li className="icon">
            <a
              href="https://steamcommunity.com/id/the_killer_panda/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faSteam} />
            </a>
          </li>
          <li className="icon">
            <a
              href="mailto:gusfune@protonmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
        </ul>
        <div className="small">
          Built with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          using{" "}
          <a
            href="https://www.gatsbyjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GatsbyJS
          </a>
          , full source code{" "}
          <a
            href="https://github.com/gusfune/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            available here
          </a>
          .
        </div>
      </div>
    )
  }
}

export default Links
