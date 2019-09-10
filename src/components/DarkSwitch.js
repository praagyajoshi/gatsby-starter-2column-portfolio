import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
import { connect } from "react-redux"
import { toggleDarkMode } from "../state/app"
import "./DarkSwitch.scss"

const DarkSwitch = ({ isDarkMode, dispatch }) => (
  <p className="DarkSwitch">
    <Link onClick={() => dispatch(toggleDarkMode(!isDarkMode))}>
      {isDarkMode && (
        <span>
          <FontAwesomeIcon icon={faMoon} width="22" />
          &nbsp; The night is dark and full of terrors
        </span>
      )}
      {!isDarkMode && (
        <span>
          <FontAwesomeIcon icon={faSun} width="22" />
          &nbsp; Hide in the dark
        </span>
      )}
    </Link>
  </p>
)
export default connect(
  state => ({
    isDarkMode: state.app.isDarkMode,
  }),
  null
)(DarkSwitch)
