import React from "react"
import CookieConsent from "react-cookie-consent"
import PropTypes from "prop-types"

import About from "../components/About"
import Links from "../components/Links"
import "./Layout.scss"

const Layout = ({ children, location }) => (
  <>
    <div className="index">
      <div className="main">{children}</div>

      <div className="aside">
        <div className="top">
          <About />
        </div>
        <div className="bottom">
          <Links />
        </div>
      </div>
    </div>
    <CookieConsent
      location="bottom"
      buttonText="Ok!"
      cookieName="gusfuneCookie"
      style={{ background: "#111", fontSize: "1.1rem" }}
      buttonStyle={{ color: "#000", background: "#fff" }}
      expires={150}
    >
      This website uses cookies so I can find ways to improve it over time.
      Because of regulation, I am obliged to tell you so, but no worries, all
      data is kept anonymous and never shared with third-parties.{" "}
    </CookieConsent>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
