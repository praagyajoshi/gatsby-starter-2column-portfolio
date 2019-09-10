import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"

import CookieConsent from "react-cookie-consent"
import PropTypes from "prop-types"

import { connect } from "react-redux"

import About from "../components/About"
import DarkSwitch from "../components/DarkSwitch"
import Links from "../components/Links"
import profileImage from "../assets/images/gusfune.jpg"
import favicon16 from "../assets/favicons/favicon-16x16.png"
import favicon32 from "../assets/favicons/favicon-32x32.png"
import "./Layout.scss"

const Layout = ({ children, isDarkMode, dispatch }) => (
  <StaticQuery
    query={graphql`
      query MetadataQuery {
        site {
          siteMetadata {
            title
            description
            siteUrl
            keywords
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: "description",
              content: data.site.siteMetadata.description,
            },
            { name: "keywords", content: data.site.siteMetadata.keywords },
            { property: "og:url", content: data.site.siteMetadata.siteUrl },
            { property: "og:image", content: profileImage },
            { property: "og:title", content: data.site.siteMetadata.title },
            {
              property: "og:description",
              content: data.site.siteMetadata.description,
            },
          ]}
          link={[
            { rel: "icon", type: "image/png", sizes: "16x16", href: favicon16 },
            { rel: "icon", type: "image/png", sizes: "32x32", href: favicon32 },
          ]}
        />
        <div className={("index", isDarkMode ? "theme-dark" : "theme-light")}>
          <div className="main">{children}</div>
          <div className="aside">
            <div className="top">
              <About />
            </div>
            <div className="bottom">
              <DarkSwitch />
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
          Because of regulation, I am obliged to tell you so, but no worries,
          all data is kept anonymous and never shared with third-parties.{" "}
        </CookieConsent>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default connect(
  state => ({
    isDarkMode: state.app.isDarkMode,
  }),
  null
)(Layout)
